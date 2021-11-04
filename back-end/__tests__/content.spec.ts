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

describe('/api/content', () => {
  describe('GET', () => {
    it('200: should respond with an array of content', async () => {
      const response = await request(app).get('/api/content').expect(200);
      expect(response.body.length).toBe(13);
    });
  });
});
