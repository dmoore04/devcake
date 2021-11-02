import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';

afterAll(async () => {
  await mongoose.disconnect();
});

describe('/api', () => {
  describe('GET', () => {
    it('200: responds with all available endpoints', async () => {
      const res = await request(app).get('/api').expect(200);
      const resKeys = Object.keys(res.body.endpoints);
      expect(resKeys.length).toBe(9);
    });
  });
});
