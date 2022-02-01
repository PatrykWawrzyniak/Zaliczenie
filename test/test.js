const assert = require('chai').assert
const addition = require('../src/addition.js')

describe('Add two numbers', () => {
  it('Should add two numbers', () => {
    assert.equal(addition(2, 5), 7)
  })
})
