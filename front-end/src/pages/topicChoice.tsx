import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import { fetchTopics, addTopics } from '../utils/api';
import { Link, Redirect } from 'react-router-dom';
import ITopicData from '../interfaces/topic.interface';
import UserContext from '../contexts/UserContext';
import ITopicQueryData from '../interfaces/topicQueryData.interface';
import {
  Button,
  ChoiceContainer,
  ToggledButton,
  NextButton,
} from '../styling/TopicMediaChoice.styled';

const TopicChoice: React.FC<IPage> = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [topics, setTopics] = useState<ITopicData[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toggledTopics, setToggledTopics] = useState<string[]>([]);

  useEffect(() => {
    setIsError(false);
    setSubmitted(false);
    fetchTopics().then((result) => {
      const topicsArr = result.map((topic: ITopicQueryData) => {
        const newTopic = {
          id: topic._id,
          name: topic.name,
          slug: topic.slug,
          popularity: topic.popularity,
          desc: topic.desc,
          imgUrl: topic.imgUrl,
          toggled: false,
        };
        return newTopic;
      });
      setTopics(topicsArr);
      setToggledTopics(user.topics);
    });
  }, []);

  const handleToggle = (e: React.SyntheticEvent) => {
    const toggledID = (e.target as Element).id;
    const newTopics = [...toggledTopics];
    topics.forEach((topic) => {
      if (topic.id === toggledID) {
        if (!toggledTopics.includes(topic.slug)) {
          newTopics.push(topic.slug);
        } else {
          const index = newTopics.indexOf(topic.slug);
          if (index > -1) {
            newTopics.splice(index, 1);
          } else newTopics.pop();
        }
      }
    });
    setToggledTopics(newTopics);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsError(false);
    const user_id = user._id;
    if (toggledTopics.length > 0) {
      addTopics(user_id, toggledTopics)
        .then((patchedUser) => {
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
    return <Redirect push to={{ pathname: '/media-choice' }} />;
  }

  return (
    <ChoiceContainer className="choices">
      <Link key="home" to="/">
        Home
      </Link>
      <Link key="media-choice" to="/media-choice">
        Media Choice
      </Link>
      <div>
        <h1>What do you want to follow? </h1>
        {isError ? <p>At least one topic must be selected</p> : null}
        <div>
          {topics.map((topic) => {
            return !toggledTopics.includes(topic.slug) ? (
              <Button
                id={topic.id}
                key={topic.id}
                name={`${topic.name}-button`}
                className={`btn`}
                onClick={handleToggle}
              >
                {topic.name}
              </Button>
            ) : (
              <ToggledButton
                id={topic.id}
                key={topic.id}
                name={`${topic.name}-button`}
                className={`btn`}
                onClick={handleToggle}
              >
                {topic.name}
              </ToggledButton>
            );
          })}
        </div>
        <br />
        <NextButton type="submit" onClick={handleSubmit}>
          Next
        </NextButton>
      </div>
    </ChoiceContainer>
  );
};

export default TopicChoice;
