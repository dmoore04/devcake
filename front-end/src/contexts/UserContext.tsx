import UserContextInterface from '../interfaces/userContextInterface';
import { createContext } from 'react';

export const UserContext = createContext<UserContextInterface | null>(null);
