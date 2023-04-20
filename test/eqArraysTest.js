//import assert library from chai package.
const assert = require('chai').assert;

// import eqArrays function.
const eqArrays = require('../eqArrays');

// TEST CODE
describe("eqArrays function", () => {
  it("returns true when comparing identical arrays", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true when comparing empty arrays", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("returns false when comparing arrays with different lengths", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it("returns false when comparing arrays with different values", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns false when comparing arrays with different types", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});