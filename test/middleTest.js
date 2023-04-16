// The TEST CODE should require the middle and assertArraysEqual modules.
//const middle = require('../middle')
//const assertArraysEqual = require('../assertArraysEqual')

// TEST CODE with assertArraysEqual => passed or fail
//assertArraysEqual(middle([1]), []); // empty array. no middle with only one element.
//assertArraysEqual(middle([1, 2]), []); // empty array.no middle with two elements.
//assertArraysEqual(middle([1, 2, 3]), [2]); // [2] there is one middle with odd number elements.
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3] two middles with even.
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4] two middles with even.

// mocha and chai
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', function() {
  it('returns [] for input [1]', function() {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for input [1, 2]', function() {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [2] for input [1, 2, 3]', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [2, 3] for input [1, 2, 3, 4]', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('returns [3, 4] for input [1, 2, 3, 4, 5, 6]', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
