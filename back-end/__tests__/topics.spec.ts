import mongoose from 'mongoose';
import request from 'supertest';
import config from 'config';
import app from '../src/app';
import { seedCollection } from '../src/utils/db';
import { Topic, TopicModel } from '../src/models/topic.model';
import { topics } from '../db/data/test-data';

beforeAll(async () => {
  await mongoose.connect(config.get<string>('dbUri'));
});

beforeEach(async () => {
  await seedCollection<Topic>(topics, TopicModel);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('/api/topics', () => {
  describe('GET', () => {
    it('200: should repond with an array of topics', async () => {
      const response = await request(app).get('/api/topics').expect(200);
      expect(response.body.length).toBe(31);
    });
  });
});
