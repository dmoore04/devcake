import logging from '../config/logging';

const postUser = (newUserInfo: {}) => {
  logging.info(`sending new user info to the DB: ${newUserInfo}`, 'API request');
};

export default postUser;
