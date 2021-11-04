import { Request, Response, NextFunction } from 'express';
import findUsers from '../services/users.service';

const sendUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await findUsers();
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

export default sendUsers;
