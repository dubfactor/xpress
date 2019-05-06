// assertion library is needed
var assert = require('assert')
var doubleInt = require('../double')

// first group of tests
describe("1. Let's test doubleInt function", function() {

    // happy case 1
    it('1a. should return double of a positive number passed in', function() {
      var result = doubleInt(4);
      assert.equal(result, 8);
    });
     // happy case 2
    it('1b. doubles a negative number', function() {
      var result = doubleInt(-10);
      assert.equal(result, -20);
    });
     // error case 1
    it('1c. fails on strings', function() {
      assert.throws(function() {
        doubleInt("ACC");
      });
    });
  });
 

