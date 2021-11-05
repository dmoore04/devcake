import { Request, Response, NextFunction } from 'express';
import findTopics from '../services/topics.service';

const sendTopics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topics = await findTopics();
    res.status(200).send({ topics });
  } catch (err) {
    next(err);
  }
};

export default sendTopics;
