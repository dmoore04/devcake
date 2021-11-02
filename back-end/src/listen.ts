import config from 'config';
import app from './app';
import connect from '../db/connection';
import logger from './utils/logger';

const port = config.get<number>('port');

app.listen(port, async () => {
  logger.info(`App is running on port http://localhost:${port}.`);

  await connect();
});
