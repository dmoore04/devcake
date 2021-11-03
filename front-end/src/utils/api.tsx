import axios from 'axios';
const gamesApi = axios.create({
  baseURL: 'https://brads-nc-games.herokuapp.com/api',
});

export const getUserInfo = async (username: string) => {
  const { data } = await gamesApi.get(`/users/${username}`);
  return data.user;
};
