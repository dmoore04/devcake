import { Request, Response, NextFunction } from 'express';
import { findContent, findRelevantContent } from '../services/content.service';
import mongoose from 'mongoose';

export const sendContentFeed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, limit, user_id } = req.query;
    const content = await findRelevantContent(user_id, Number(page) || 1, Number(limit) || 10);
    res.status(200).send({ content });
  } catch (err) {
    next(err);
  }
};

export const sendContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { content_id } = req.params;
    const content = await findContent(content_id);
    res.status(200).send({ content });
  } catch (err) {
    next(err);
  }
};

export default sendContent;
