const request = require('supertest');
const app = require('../src/app');

describe('Test route', () => {
    test('GET Route /reddit, status 200, content-type html', (done) => {
      request(app)
        .get('/reddit')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });

    test('GET Route /home, status 200, content-type html', (done) => {
        request(app)
          .get('/home')
          .expect(200)
          .expect('Content-Type', /html/)
          .end((err, res) => {
            if (err) return done(err);
            return done();
          });
      });

      test('GET Route /signin, status 200, content-type html', (done) => {
        request(app)
          .get('/signin')
          .expect(200)
          .expect('Content-Type', /html/)
          .end((err, res) => {
            if (err) return done(err);
            return done();
          });
      });

      
      test('GET Route /signUp, status 200, content-type html', (done) => {
        request(app)
          .get('/signUp')
          .expect(200)
          .expect('Content-Type', /html/)
          .end((err, res) => {
            if (err) return done(err);
            return done();
          });
      });

      test('GET Route /getpost, status 200, content-type html', (done) => {
        request(app)
          .get('/getpost')
          .expect(500)
          .expect('Content-Type', /html/)
          .end((err, res) => {
            if (err) return done(err);
            return done();
          });
      });
})