import React, { useEffect, useState, useContext } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { fetchTopics } from '../utils/api';
import { Link, Redirect } from 'react-router-dom';
import ITopicData from '../interfaces/topic.interface';
import UserContext from '../contexts/UserContext';
import ITopicQueryData from '../interfaces/TopicQueryData.interface';

const TopicChoice: React.FC<IPage> = (props) => {
  const [topics, setTopics] = useState<ITopicData[]>([]);

  const [toggledTopics, setToggledTopics] = useState<[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const { user, setUser } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    setSubmitted(false);
    logging.info(`Loading ${props.name}`);
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
    });
  }, [props.name]);

  const handleToggle = (e: React.SyntheticEvent) => {
    const toggledID = (e.target as Element).id;
    topics.forEach((topic) => {
      if (topic.id === toggledID) {
        topic.toggled = !topic.toggled;
      }
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const topicArr: string[] = [];
    topics.forEach((topic) => {
      if (topic.toggled) {
        topicArr.push(topic.id);
      }
    });
    console.log(`patching the user with the following topics: ${topicArr}`);
    console.log('pressed submit - set state submitted to true');
  };

  if (submitted) {
    return <Redirect push to={{ pathname: '/media-choice' }} />;
  }

  return (
    <div>
      <Link key="home" to="/">
        Home
      </Link>
      <Link key="media-choice" to="/media-choice">
        Media Choice
      </Link>
      <h1>What do you want to follow? </h1>
      <div>
        {topics.map((topic) => {
          return (
            <button
              id={topic.id}
              key={topic.id}
              name={`${topic.name}-button`}
              className={`${topic.name}__button`}
              onClick={handleToggle}
            >
              {topic.name}
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

export default TopicChoice;
