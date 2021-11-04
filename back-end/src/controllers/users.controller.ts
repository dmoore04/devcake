import { Request, Response, NextFunction } from 'express';
import { findUsers, saveUser } from '../services/users.service';

export const sendUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await findUsers();
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const newUser = await saveUser(body);
    res.status(201).send(newUser);
  } catch (err) {
    next(err);
  }
};

export default sendUsers;
