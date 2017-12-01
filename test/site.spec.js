var app = require('../');
var server = app.listen()
var request = require('supertest').agent(server);

describe('Our amazing site', function() {
  it('has a nice welcoming message', function(done) {
    request.get('/').expect('Koa says hi!').end(done);
  });
});

after(function (done) {
  server.close();
  done();
});
