import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { addMedia, fetchMedia } from '../utils/api';
import { Link, Redirect } from 'react-router-dom';
import IMediaData from '../interfaces/mediaData.interface';
import UserContext from '../contexts/UserContext';

const MediaChoice: React.FC<IPage> = (props) => {
  const { user, setUser } = useContext(UserContext);

  const [media, setMedia] = useState<IMediaData[]>([]);
  const [isError, setIsError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  console.log(user);

  useEffect(() => {
    setIsError(false);
    setSubmitted(false);
    logging.info(`Loading ${props.name}`);
    fetchMedia().then((result) => {
      console.log(result);
      const mediaArr = result.map((media: IMediaData) => {
        const newMedia = {
          _id: media._id,
          type: media.type,
          description: media.description,
          toggled: false,
        };
        return newMedia;
      });
      setMedia(mediaArr);
    });
  }, [props.name]);

  const handleToggle = (e: React.SyntheticEvent) => {
    const toggledID = (e.target as Element).id;
    media.forEach((type) => {
      if (type._id === toggledID) {
        type.toggled = !type.toggled;
      }
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsError(false);
    const mediaArr: string[] = [];
    media.forEach((type) => {
      if (type.toggled) {
        mediaArr.push(type.type);
      }
    });
    const user_id = user._id;
    if (mediaArr.length > 0) {
      addMedia(user_id, mediaArr)
        .then((patchedUser) => {
          console.log(patchedUser);
          setUser(patchedUser);
          localStorage.setItem('devCakeUser', JSON.stringify(patchedUser));
          setSubmitted(true);
        })
        .catch((err) => {
          setIsError(true);
        });
    } else {
      setIsError(true);
    }
  };

  //   const mediaArr: string[] = [];
  //   media.forEach((type) => {
  //     if (type.toggled) {
  //       mediaArr.push(type._id);
  //     }
  //   });
  //   console.log(`patching the user with the following types: ${mediaArr}`);
  //   console.log('pressed submit - set state submitted to true');
  // };

  if (submitted) {
    return <Redirect push to={{ pathname: '/' }} />;
  }

  return (
    <div>
      <Link key="home" to="/">
        Home
      </Link>
      <Link key="topic-choice" to="/topic-choice">
        Topic Choice
      </Link>
      <h1>How do you want to learn? </h1>
      <div>
        {media.map((type) => {
          return (
            <button
              id={type._id}
              key={type.type}
              name={`${type.type}-button`}
              className={`${type.type}__button`}
              onClick={handleToggle}
            >
              {type.type}
            </button>
          );
        })}
      </div>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Next
      </button>
      {isError ? <p>At least one topic must be selected</p> : null}
    </div>
  );
};

export default MediaChoice;
