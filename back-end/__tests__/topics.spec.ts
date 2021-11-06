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

describe('/api/topics/:topic_id', () => {
  describe('GET', () => {
    it('200: should respond with the specified topic', async () => {
      const topicsResponse = await request(app).get('/api/topics');
      const { topics } = topicsResponse.body;
      const expected = topics[0];
      const topic_id = expected._id;
      const response = await request(app).get(`/api/topics/${topic_id}`).expect(200);
      const { topic } = response.body;
      expect(topic).toMatchObject(expected);
    });
  });
});
