//import assert library from chai package.
const assert = require('chai').assert;

// import middle function.
const middle = require('../middle');

describe('#middle', () => {
  it('returns [] when array has only 1 or 2 length', () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns one middle element when array has odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns two middle elements when array has even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
