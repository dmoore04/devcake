import { Request, Response, NextFunction } from 'express';
import findContent from '../services/content.service';
import mongoose from 'mongoose';

const sendContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { page, limit, user_id } = req.query;
    const content = await findContent(user_id, Number(page) || 1, Number(limit) || 10);
    res.status(200).send({ content });
  } catch (err) {
    next(err);
  }
};

export default sendContent;
