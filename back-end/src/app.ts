import express, { Request, Response } from 'express';
import config from 'config';
import connect from '../db/connection';
import logger from './utils/logger';
import apiRouter from './routes/api.router';

const port = config.get<number>('port');

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.use((err: any, req: Request, res: Response) => {
  logger.error(err);
  res.status(500).send(err.msg);
});

app.listen(port, async () => {
  logger.info(`App is running on port http://localhost:${port}.`);

  await connect();
});

export default app;
