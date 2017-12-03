var should = require('should');
var fill = require('../lib/coffeeCode');

describe('CoffeeScript is complied OK', function() {
  it('fills the mug with coffee', function() {
    fill('mug', 'coffee').should.equal('Filling the mug with coffee');
  });
});
