import axios from 'axios';
import logging from '../config/logging';
import ITopicsData from '../interfaces/topicsData.interface';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export const fetchTopics = async () => {
  const res = await api.get<ITopicsData>('/topics');
  return res.data;
};

const postUser = (newUserInfo: {}) => {
  logging.info(`sending new user info to the DB: ${newUserInfo}`, 'API request');
};

export default postUser;
