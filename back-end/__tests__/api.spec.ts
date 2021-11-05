import request from 'supertest';
import app from '../src/app';

describe('/api', () => {
  describe('GET', () => {
    it('200: responds with all available endpoints', async () => {
      const res = await request(app).get('/api').expect(200);
      const { endpoints } = res.body;
      const endpointKeys = Object.keys(endpoints);
      expect(endpointKeys.length).toBe(9);
    });
  });
});
