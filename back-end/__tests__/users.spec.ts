import mongoose from 'mongoose';
import request from 'supertest';
import config from 'config';
import app from '../src/app';
import { User, UserModel } from '../src/models';
import { seedCollection } from '../src/utils/db';
import { users as userData } from '../db/data/test-data';

beforeAll(async () => {
  await mongoose.connect(config.get<string>('dbUri'));
});

afterEach(async () => {
  await seedCollection<Partial<User>>(userData, UserModel);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('/api/users', () => {
  describe('GET', () => {
    it('200: should respond with an array of users', async () => {
      const response = await request(app).get('/api/users').expect(200);
      const { users } = response.body;
      expect(users.length).toBe(4);
    });
  });
  describe('POST', () => {
    it('200: should save a new user to the database and respond with the new user', async () => {
      const testUser: Omit<User, 'comparePassword'> = {
        name: 'Testy McTestface',
        email: 'test@example.com',
        username: 'mrtest01',
        password: 'test',
      };

      const response = await request(app).post('/api/users').send(testUser).expect(201);
      const { user } = response.body;
      expect(user).toMatchObject({
        _id: expect.any(String),
        name: 'Testy McTestface',
        email: 'test@example.com',
        username: 'mrtest01',
        topics: [],
        media: [],
        saved: [],
        avatarUrl: expect.any(String),
      });
    });
  });
});
