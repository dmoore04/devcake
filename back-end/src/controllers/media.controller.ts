import { Request, Response, NextFunction } from 'express';
import findMedia from '../services/media.service';

const sendMedia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const media = await findMedia();
    res.status(200).send({ media });
  } catch (err) {
    next(err);
  }
};

export default sendMedia;
