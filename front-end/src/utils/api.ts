import axios from 'axios';
import ILoginQuery from '../interfaces/loginQuery.interface';
import INewUser from '../interfaces/newUser.interface';
import IUser from '../interfaces/user';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export const fetchTopics = async () => {
  const res = await api.get('/topics');
  return res.data.topics;
};

export const fetchMedia = async () => {
  const res = await api.get('/media');
  return res.data.media;
};

export const loginUser = async (userInfo: ILoginQuery) => {
  const res = await api.post(`/users/login`, userInfo);
  if (res.data.user) {
    const user = res.data.user;
    const loggedInUser: IUser = {
      _id: user._id,
      username: user.username,
      name: user.name,
      avatarURL: user.avatarUrl,
      topics: [],
      media: [],
      saved: [],
    };
    return loggedInUser;
  }
  Promise.reject('invalid username or password');
};

export const postUser = async (newUserInfo: INewUser) => {
  const res = await api.post(`/users`, newUserInfo);
  return res.data.user;
};

export const addTopics = async (user_id: string, topicsToAdd: string[]) => {
  const newTopics = { topics: topicsToAdd };
  const res = await api.patch(`/users/${user_id}`, newTopics);
  return res.data.user;
};

export const addMedia = async (user_id: string, mediaToAdd: string[]) => {
  const newMedia = { media: mediaToAdd };
  const res = await api.patch(`/users/${user_id}`, newMedia);
  return res.data.user;
};
