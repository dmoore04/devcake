import mongoose from 'mongoose';
import config from 'config';
import logger from '../src/utils/logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    logger.info('Connected to db');
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

export default connect;
