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
      const { content } = response.body;
      expect(content.docs.length).toBe(10);
    });
  });
  describe('/:content_id', () => {
    describe('GET', () => {
      it('200: should return a specific content document', async () => {
        const contentResponse = await request(app).get('/api/content');
        const { docs } = contentResponse.body.content;
        const { _id } = docs[0];
        const response = await request(app).get(`/api/content/${_id}`);
        const { content } = response.body;
        expect(content).toMatchObject(docs[0]);
      });
    });
  });
});
