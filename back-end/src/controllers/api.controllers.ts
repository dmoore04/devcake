import { Response, NextFunction, Request } from 'express';

const endpoints: string = require('../endpoints.json');

const sendEndpoints = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ endpoints });
  } catch (err) {
    next(err);
  }
};

export default sendEndpoints;
