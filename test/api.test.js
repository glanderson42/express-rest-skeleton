'use strict';

const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1/helloWorld', () => {
  it('Responds with hello world message', (done) => {
    request(app)
      .get('/api/v1/helloWorld')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Hello world!'
      }, done);
  });
});

describe('GET /api/v1', () => {
  it('Respond with Ok status json', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        status: 'Ok'
      }, done);
  })
})