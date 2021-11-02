import mongoose from 'mongoose';
import config from 'config';
import logger from '../src/utils/logger';

export async function connect() {
  const dbUri = config.get<string>(`${process.env.NODE_ENV || 'dev'}Uri`);
  try {
    await mongoose.connect(dbUri);
    logger.info(`Connected to db: ${mongoose.connection.name}`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

export async function disconnect() {
  try {
    await mongoose.disconnect();
    logger.info(`Disconnected from MongoDB.`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
