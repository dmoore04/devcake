import mongoose from 'mongoose';
import { UserModel } from '../src/models/user.model';
import { ContentModel } from '../src/models/content.model';
import { TopicModel } from '../src/models/topic.model';
import { users, content, topics, media, providers } from './data/test-data';
import { MediaModel } from '../src/models/media.model';
import { ProviderModel } from '../src/models/provider.model';
import seedProdContent from './seed-prod-content';
import logger from '../src/utils/logger';

export async function seedUsers() {
  const { db } = mongoose.connection;
  await db.dropCollection('users');
  const collection = db.collection('users');
  await collection.insertMany(users.map((user) => new UserModel(user)));
}

export async function seedContent() {
  const { db } = mongoose.connection;
  await db.dropCollection('content');
  const collection = db.collection('content');
  await collection.insertMany(content.map((c) => new ContentModel(c)));
}

export async function seedTopics() {
  const { db } = mongoose.connection;
  await db.dropCollection('topics');
  const collection = db.collection('topics');
  await collection.insertMany(topics.map((topic) => new TopicModel(topic)));
}

export async function seedMedia() {
  const { db } = mongoose.connection;
  await db.dropCollection('media');
  const collection = db.collection('media');
  await collection.insertMany(media.map((m) => new MediaModel(m)));
}

export async function seedProviders() {
  const { db } = mongoose.connection;
  await db.dropCollection('providers');
  const collection = db.collection('providers');
  await collection.insertMany(providers.map((provider) => new ProviderModel(provider)));
}

export async function seedDB(includeProdContent: boolean) {
  const promises = [seedTopics(), seedMedia(), seedProviders()];
  if (process.env.NODE_ENV === 'test') {
    promises.push(seedContent(), seedUsers());
  } else if (includeProdContent === true) {
    promises.push(seedProdContent(topics, providers));
  }
  await Promise.all(promises);
  logger.info(`Seeded all '${mongoose.connection.name}' collections.`);
}

// dont set this to true or I will owe RapidAPI money :)
seedDB(false);
