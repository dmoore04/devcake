import { Response, NextFunction, Request } from 'express';
import fetchEndpoints from '../models/api.models';

const sendEndpoints = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const endpoints: string = await fetchEndpoints();
    res.status(200).send({ endpoints });
  } catch (err) {
    next(err);
  }
};

export default sendEndpoints;
