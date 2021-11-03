import config from 'config';
import app from './app';
import * as db from './utils/db';
import logger from './utils/logger';

const port = config.get<number>('port');

app.listen(port, async () => {
  logger.info(`App is running on port http://localhost:${port}.`);
  await db.connect();
});
