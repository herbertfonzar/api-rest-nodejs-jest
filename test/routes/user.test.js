const request = require('supertest');

const app = require('../../src/app');

test('Should list all users', () => (
  request(app).get('/users')
    .expect(200)
    .then((response) => {
      expect(response.body.length).toBeGreaterThan(0);
    })
));

test('Should successfully insert user', () => {
  const email = `${Date.now()}@mail.com`;
  return request(app).post('/users')
    .send({ name: 'Herbert Fonzar', email, passwd: '12345' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Herbert Fonzar');
    });
});
