import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const TopicChoice: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return <p>This is the topic choice page!</p>;
};

export default TopicChoice;
