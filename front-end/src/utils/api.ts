import axios from 'axios';
import logging from '../config/logging';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export const fetchTopics = async () => {
  const res = await api.get('/topics');
  return res.data.topics;
};

export const fetchMedia = async () => {
  const res = await api.get('/media');
  return res.data.media;
};

const postUser = (newUserInfo: {}) => {
  logging.info(`sending new user info to the DB: ${newUserInfo}`, 'API request');
};

export default postUser;
