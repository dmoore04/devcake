import { Request, Response, NextFunction } from 'express';
import findContent from '../services/content.service';

const sendContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, limit } = req.query;
    const content = await findContent(Number(page) || 1, Number(limit) || 10);
    res.status(200).send({ content });
  } catch (err) {
    next(err);
  }
};

export default sendContent;
