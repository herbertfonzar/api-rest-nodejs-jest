const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => (
  request(app).get('/users')
    .expect(200)
    .then((response) => {
      expect(response.body).toHaveLength(1);
      expect(response.body[0]).toHaveProperty('name', 'John Doe');
    })
));
