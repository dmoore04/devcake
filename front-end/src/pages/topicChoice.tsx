import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { fetchTopics } from '../utils/api';

const TopicChoice: React.FC<IPage> = (props) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    logging.info(`Loading ${props.name}`);
    fetchTopics().then((topics) => {
      console.log(topics);
    });
  }, [props.name]);
  return <p>This is the topic choice page!</p>;
};

export default TopicChoice;
