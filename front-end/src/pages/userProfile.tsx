import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const UserProfile: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return <p>This is the user profile page!</p>;
};

export default UserProfile;
