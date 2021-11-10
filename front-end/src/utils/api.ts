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
    const { user } = res.data;
    const loggedInUser: IUser = {
      _id: user._id,
      username: user.username,
      name: user.name,
      avatarUrl: user.avatarUrl,
      topics: user.topics,
      media: user.media,
      saved: user.saved,
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

export const patchSaved = async (user_id: string, savedItems: string[]) => {
  const newSaved = { saved: [...savedItems] };
  const res = await api.patch(`/users/${user_id}`, newSaved);
  return res.data.user;
};

export const addMedia = async (user_id: string, mediaToAdd: string[]) => {
  const newMedia = { media: mediaToAdd };
  const res = await api.patch(`/users/${user_id}`, newMedia);
  return res.data.user;
};

export const fetchContent = async (id: string, page?: number) => {
  const userId = id;
  console.log(userId, '<--- id in api');
  let path = `/content?user_id=${id}`;
  if (page) path += `&&page=${page}`;
  console.log(path, '<--- PATH');
  const res = await api.get(path);
  return res.data.content.docs;
};

export const fetchSingleContent = async (id: string) => {
  const res = await api.get(`/content/${id}`);
  return res.data.content;
};

export const fetchSavedContent = async (user_id: string) => {
  const res = await api.get(`/users/${user_id}/saved`);
  return res.data.content;
};
