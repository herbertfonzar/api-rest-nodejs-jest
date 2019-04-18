const request = require('supertest');

const app = require('../src/app');

test('Should list all users', () => (
  request(app).get('/users')
    .expect(200)
    .then((response) => {
      expect(response.body).toHaveLength(1);
      expect(response.body[0]).toHaveProperty('name', 'Herbert Fonzar');
    })
));

test('Should successfully insert user', () => (
  request(app).post('/users')
    .send({ name: 'Herbert Fonzar', mail: 'herbertfonzar@mail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Herbert Fonzar');
    })
));
