const request = require('supertest');

const app = require('../src/app');

test('deve responder na raiz ', () => request(app).get('/').expect(200));
