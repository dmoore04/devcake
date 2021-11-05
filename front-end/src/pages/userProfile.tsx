import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import NavBar from '../components/nav-bar';

const UserProfile: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return (
    <div>
      <NavBar />
      <p>This is the user profile page!</p>
    </div>
  );
};

export default UserProfile;
