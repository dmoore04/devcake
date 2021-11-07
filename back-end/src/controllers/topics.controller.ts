import { Request, Response, NextFunction } from 'express';
import { findTopics, findTopicById } from '../services/topics.service';

export const sendTopics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topics = await findTopics();
    res.status(200).send({ topics });
  } catch (err) {
    next(err);
  }
};

export const sendTopic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { topic_id } = req.params;
    const topic = await findTopicById(topic_id);
    res.status(200).send({ topic });
  } catch (err) {
    next(err);
  }
};
