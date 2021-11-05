import axios from 'axios';
import logging from '../config/logging';
import ITopicData from '../interfaces/topic.interface';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export const fetchTopics = async () => {
  const res = await api.get<ITopicData>('/topics');
  return res;
};

const postUser = (newUserInfo: {}) => {
  logging.info(`sending new user info to the DB: ${newUserInfo}`, 'API request');
};

export default postUser;
