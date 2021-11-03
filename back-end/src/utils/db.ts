import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

export const connect = async () => {
  await mongoose.connect(config.get('dbUri'));
  logger.info(`Connected to '${mongoose.connection.name}' database`);
  return mongoose.connection;
};

export const disconnect = async () => {
  await mongoose.disconnect();
  logger.info(`Disconnect from MongoDB.`);
};
