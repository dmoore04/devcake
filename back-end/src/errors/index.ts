import { NextFunction, Request, Response } from 'express';

const handle404 = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ msg: 'Route not found' });
};

export default handle404;
