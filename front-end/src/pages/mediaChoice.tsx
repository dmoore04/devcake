import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import { addMedia, fetchMedia } from '../utils/api';
import { Link, Redirect } from 'react-router-dom';
import IMediaData from '../interfaces/mediaData.interface';
import UserContext from '../contexts/UserContext';
import { Button, ChoiceContainer, ToggledButton } from '../styling/TopicMediaChoice.styled';

const MediaChoice: React.FC<IPage> = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [media, setMedia] = useState<IMediaData[]>([]);
  const [isError, setIsError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toggledMedia, setToggledMedia] = useState<string[]>([]);

  useEffect(() => {
    setIsError(false);
    setSubmitted(false);
    fetchMedia().then((result) => {
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
  }, []);

  const handleToggle = (e: React.SyntheticEvent) => {
    const toggledID = (e.target as Element).id;
    const newMedia = [...toggledMedia];
    media.forEach((type) => {
      if (type._id === toggledID) {
        if (!toggledMedia.includes(type.type)) {
          newMedia.push(type.type);
        } else {
          const index = newMedia.indexOf(type.type);
          if (index > -1) {
            newMedia.splice(index, 1);
          } else newMedia.pop();
        }
      }
    });
    setToggledMedia(newMedia);
  };

  // const handleToggle = (e: React.SyntheticEvent) => {
  //   const toggledID = (e.target as Element).id;
  //   media.forEach((type) => {
  //     if (type._id === toggledID) {
  //       type.toggled = !type.toggled;
  //     }
  //   });
  // };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsError(false);
    const user_id = user._id;
    if (toggledMedia.length > 0) {
      addMedia(user_id, toggledMedia)
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

  if (submitted) {
    return <Redirect push to={{ pathname: '/' }} />;
  }

  return (
    <ChoiceContainer>
      <Link key="home" to="/">
        Home
      </Link>
      <Link key="topic-choice" to="/topic-choice">
        Topic Choice
      </Link>
      <div>
        <h1>How do you want to learn? </h1>
        {isError ? <p>At least one topic must be selected</p> : null}
        <div>
          {media.map((type) => {
            return !toggledMedia.includes(type.type) ? (
              <Button
                id={type._id}
                key={type.type}
                name={`${type.type}-button`}
                className={`${type.type}__button`}
                onClick={handleToggle}
              >
                {type.type}
              </Button>
            ) : (
              <ToggledButton
                id={type._id}
                key={type.type}
                name={`${type.type}-button`}
                className={`${type.type}__button`}
                onClick={handleToggle}
              >
                {type.type}
              </ToggledButton>
            );
          })}
        </div>
        <br />
        <Button type="submit" onClick={handleSubmit}>
          Next
        </Button>
      </div>
    </ChoiceContainer>
  );
};

export default MediaChoice;
