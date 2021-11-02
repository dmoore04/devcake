import express, { Request, Response } from 'express';
import logger from './utils/logger';
import apiRouter from './routes/api.router';

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.use((err: any, req: Request, res: Response) => {
  logger.error(err);
  res.status(500).send(err.msg);
});

export default app;
