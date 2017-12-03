var should = require('should');
var greeter = require('../lib/tsCode');

describe('TypeScript is complied OK', function() {
  it('greets', function() {
    var g = new greeter();
    g.greet('Yoda').should.equal('A typeScript greeting to you, Yoda')
  })
});
