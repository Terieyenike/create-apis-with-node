const request = require('supertest');
const app = require('../app');

describe('Test GET /friends', () => {
  test('It should respond with 200 success', async () => {
    await request(app)
      .get('/friends')
      .expect('Content-Type', /json/)
      .expect(200);
    // expect(response.statusCode).toBe(200);
  });
});

describe('Test POST /friends', () => {
  const friendNames = {
    name: 'teri eyenike',
  };

  test('It should respond with 200 successful', async () => {
    await request(app)
      .post('/friends')
      .send(friendNames)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
