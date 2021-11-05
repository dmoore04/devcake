import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { Link } from 'react-router-dom';

const CategoryChoice: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return (
    <div>
      <p>This is the category choice page!</p>
      <Link key="home" to="/">
        Home
      </Link>
      <Link key="topic-choice" to="/topic-choice">
        Topic Choice
      </Link>
    </div>
  );
};

export default CategoryChoice;
