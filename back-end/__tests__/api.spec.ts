import request from 'supertest';
import app from '../src/app';

describe('/api', () => {
  describe('GET', () => {
    it('200: responds with all available endpoints', async () => {
      const expected = require('../src/endpoints.json');
      const res = await request(app).get('/api').expect(200);
      const { endpoints } = res.body;
      expect(endpoints).toMatchObject(expected);
    });
  });
});

describe('/any-bad-path', () => {
  describe('ANY METHOD', () => {
    it('404: should respond with an error message', async () => {
      const res = await request(app).get('/a-bad-path').expect(404);
      const { msg } = res.body;
      expect(msg).toBe('Route not found');
    });
  });
});
