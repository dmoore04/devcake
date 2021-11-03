import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const SignupPage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  return <p>This is the sign up page!</p>;
};

export default SignupPage;
