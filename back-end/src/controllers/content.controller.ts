import { Request, Response, NextFunction } from 'express';
import findContent from '../services/content.service';

const sendContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const content = await findContent();
    res.status(200).send(content);
  } catch (err) {
    next(err);
  }
};

export default sendContent;
