import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import NavBar from '../components/nav-bar';

const HomePage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return (
    <div>
      <NavBar />
      <p>This is the homepage!</p>
    </div>
  );
};

export default HomePage;
