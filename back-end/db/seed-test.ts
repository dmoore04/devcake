import mongoose from 'mongoose';
import { UserModel } from '../src/models/user.model';
import { ContentModel } from '../src/models/content.model';
import { TopicModel } from '../src/models/topic.model';
import { connect, disconnect } from './connection';
import { users, content, topics, media } from './data/test-data';
import { MediaModel } from '../src/models/media.model';

export async function seedUsers() {
  await connect();
  const { db } = mongoose.connection;
  await db.dropCollection('users');
  const collection = db.collection('users');
  await collection.insertMany(users.map((user) => new UserModel(user)));
  return disconnect();
}

export async function seedContent() {
  await connect();
  const { db } = mongoose.connection;
  await db.dropCollection('content');
  const collection = db.collection('content');
  await collection.insertMany(content.map((c) => new ContentModel(c)));
  return disconnect();
}

export async function seedTopics() {
  await connect();
  const { db } = mongoose.connection;
  await db.dropCollection('topics');
  const collection = db.collection('topics');
  await collection.insertMany(topics.map((topic) => new TopicModel(topic)));
  return disconnect();
}

export async function seedMedia() {
  await connect();
  const { db } = mongoose.connection;
  await db.dropCollection('media');
  const collection = db.collection('media');
  await collection.insertMany(media.map((m) => new MediaModel(m)));
  return disconnect();
}

Promise.all([seedUsers(), seedContent(), seedTopics(), seedMedia()]).then(() => {
  console.log('seeded');
});
