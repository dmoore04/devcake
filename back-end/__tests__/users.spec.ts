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

describe('/api/users', () => {
  describe('GET', () => {
    it('200: should respond with an array of users', async () => {
      const response = await request(app).get('/api/users').expect(200);
      expect(response.body.length).toBe(4);
    });
  });
});
