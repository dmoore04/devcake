import mongoose from 'mongoose';
import request from 'supertest';
import config from 'config';
import app from '../src/app';

beforeAll(async () => {
  await mongoose.connect(config.get<string>('dbUri'));
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('/api/topics', () => {
  describe('GET', () => {
    it('200: should repond with an array of topics', async () => {
      const response = await request(app).get('/api/topics').expect(200);
      const { topics } = response.body;
      expect(topics.length).toBe(31);
    });
  });
});
