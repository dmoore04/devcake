import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { fetchTopics } from '../utils/api';
import { Link } from 'react-router-dom';

const TopicChoice: React.FC<IPage> = (props) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    logging.info(`Loading ${props.name}`);
    fetchTopics().then((result) => {
      console.log(result);
    });
  }, [props.name]);

  return (
    <div>
      <p>This is the topic choice page!</p>
      <Link key="home" to="/">
        Home
      </Link>
      <Link key="category-choice" to="/category-choice">
        Category Choice
      </Link>
    </div>
  );
};

export default TopicChoice;
