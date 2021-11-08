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

const testUser: Omit<User, 'comparePassword'> = {
  name: 'Testy McTestface',
  email: 'test@example.com',
  username: 'mrtest01',
  password: 'test',
};

describe('/api/users', () => {
  describe('GET', () => {
    it('200: should respond with an array of users', async () => {
      const response = await request(app).get('/api/users').expect(200);
      const { users } = response.body;
      expect(users.length).toBe(4);
    });
    it('200: accepts query parameters', async () => {
      const userResponse = await request(app).post('/api/users').send(testUser);
      const expected = userResponse.body.user;
      const response = await request(app).get(`/api/users?username=${expected.username}`);
      const { users } = response.body;
      expect(users[0]).toMatchObject(expected);
    });
  });
  describe('POST', () => {
    it('200: should save a new user to the database and respond with the new user', async () => {
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

describe('/api/users/:user_id', () => {
  describe('PATCH', () => {
    it('200: should update a user document and return the updated version', async () => {
      const userResponse = await request(app).post('/api/users').send(testUser);
      const { _id } = userResponse.body.user;
      const response = await request(app)
        .patch(`/api/users/${_id}`)
        .send({ topics: ['javascript', 'python'] })
        .expect(200);
      const { user } = response.body;
      expect(user.topics).toEqual(['javascript', 'python']);
    });
  });
});

describe('/api/users/login', () => {
  describe('POST', () => {
    it('200: should respond with the logged in user if password is valid', async () => {
      await request(app).post('/api/users').send(testUser);

      const response = await request(app)
        .post('/api/users/login')
        .send({ username: 'mrtest01', password: 'test' })
        .expect(200);

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
    it('401: should respond with an error message for an invalid username/password', async () => {
      const badUsername = await request(app)
        .post('/api/users/login')
        .send({ username: 'idontexist', password: 'test' })
        .expect(401);

      expect(badUsername.body.msg).toBe('invalid username');

      const badPassword = await request(app)
        .post('/api/users/login')
        .send({ username: 'j0hntr0n', password: 'notjohnpass' })
        .expect(401);

      expect(badPassword.body.msg).toBe('invalid password');
    });
  });
});
