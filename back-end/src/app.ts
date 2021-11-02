import express from 'express';
import config from 'config';
import connect from '../db/connection';
import logger from './utils/logger';
import apiRouter from './routes/api.router';

const port = config.get<number>('port');

const app = express();

app.use('/api', apiRouter);

app.listen(port, async () => {
  logger.info(`App is running on port http://localhost:${port}.`);

  await connect();
});

export default app;
