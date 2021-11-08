import { createContext } from 'react';
import IUser from '../interfaces/user';

interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

const UserContext = createContext<IUserContext>({
  user: {
    _id: '',
    username: '',
    avatarUrl: '',
    name: '',
    topics: [],
    media: [],
    saved: [],
  },
  setUser: (user: IUser) => {},
});

export const UserContextProvider = UserContext.Provider;

export default UserContext;
