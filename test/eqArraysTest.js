//import assert library from chai package.
const assert = require('chai').assert;

// import eqArrays function.
const eqArrays = require('../eqArrays');

describe("eqArrays function", () => {
  it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true for ['1', '2', '3'] === ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false for [1, 2, 3] === [1, 2, 3, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it("returns false for [1, 2, 3] === [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it("returns false for ['1', '2', '3'] === ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});