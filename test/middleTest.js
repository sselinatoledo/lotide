//import assert library from chai package.
const assert = require('chai').assert;

// import middle function.
const middle = require('../middle');

describe('#middle', () => {
  it('returns [] for input [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for input [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [2] for input [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [2, 3] for input [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('returns [3, 4] for input [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
