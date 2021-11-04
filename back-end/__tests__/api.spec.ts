import request from 'supertest';
import app from '../src/app';

describe('/api', () => {
  describe('GET', () => {
    it('200: responds with all available endpoints', async () => {
      const res = await request(app).get('/api').expect(200);
      const resKeys = Object.keys(res.body.endpoints);
      expect(resKeys.length).toBe(9);
    });
  });
});
