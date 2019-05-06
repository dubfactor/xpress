
var lengthFn = require('../length')
var assert = require('assert')

describe('1. Test the length function', function(){

    it('1a. should return 5 for a value of "Hello"', function(){
        var result = lengthFn("Hello")
        assert.equal(result, 5)
    })

    it('1b. should return 3 for a value of 123', function(){
        var result = lengthFn(123)
        assert.equal(result, 4)
    })

    it('1c. should return 1 for a value of true', function(){
        var result = lengthFn(true)
        assert.equal(result, 1)
    })

})