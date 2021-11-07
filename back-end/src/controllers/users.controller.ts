import { Request, Response, NextFunction } from 'express';
import { findUsers, saveUser, updateUser } from '../services/users.service';

export const sendUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.query;
    const query = username ? { username: String(username) } : {};
    const users = await findUsers(query);
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
};

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const newUser = await saveUser(body);
    res.status(201).send({ user: newUser });
  } catch (err) {
    next(err);
  }
};

export const patchUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user_id } = req.params;
    const updatedUser = await updateUser(user_id, req.body);
    res.status(200).send({ user: updatedUser });
  } catch (err) {
    next(err);
  }
};

export default sendUsers;
