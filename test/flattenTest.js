// require functions to run the test code.
// const assertArraysEqual = require('../assertArraysEqual');
// const flatten = require('../flatten');

// // TEST CODE 1
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => PASS

// // TEST CODE 2
// assertArraysEqual(flatten([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1]); // => PASS
// assertArraysEqual(flatten([6, 5, [4, 3], 2, [1]]), [2, 4, 6, 8]); // => FAIL

// MOCHA AND CHAI TESTING
const assert = require('chai').assert;
const flatten = require('../flatten');

describe("flatten function", function() {
  it("returns 1,2,3,4,5,6 === 1,2,3,4,5,6 for (flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])", function() {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns 6,5,4,3,2,1 === 6,5,4,3,2,1 for ([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1])", function() {
    assert.deepEqual(flatten([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1]);
  });
});