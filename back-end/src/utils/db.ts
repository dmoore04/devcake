import mongoose, { Model } from 'mongoose';
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

export async function seedCollection<T>(data: T[], model: Model<T>) {
  const { db } = mongoose.connection;
  const { collectionName } = model.collection;
  await db.dropCollection(collectionName);
  db.collection(collectionName);
  await model.create(...data);
}
