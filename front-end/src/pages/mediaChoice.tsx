import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { fetchMedia } from '../utils/api';
import { Link, Redirect } from 'react-router-dom';
import IMediaData from '../interfaces/mediaData.interface';
import UserContext from '../contexts/UserContext';

const MediaChoice: React.FC<IPage> = (props) => {
  const [media, setMedia] = useState<IMediaData[]>([]);

  const [toggledMedia, setToggledMedia] = useState<[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const { user, setUser } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
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
    const mediaArr: string[] = [];
    media.forEach((type) => {
      if (type.toggled) {
        mediaArr.push(type._id);
      }
    });
    console.log(`patching the user with the following types: ${mediaArr}`);
    console.log('pressed submit - set state submitted to true');
  };

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
    </div>
  );
};

export default MediaChoice;
