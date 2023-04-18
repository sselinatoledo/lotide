/* MANUAL TESTING
// test assertEqual.js
const assertEqual = require('../assertEqual');

// test eqArrays.js
const eqArrays = require('../eqArrays');

// TEST CODE 1
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false, add another tester //
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true //
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false //
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true //
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false //

// TEST CODE 2
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS //
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL //
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS //
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL //
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS //
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL //

// TEST CODE 3 
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [2, 3], [4, 5])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
*/

// MOCHA AND CHAI TESTING
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays function", function() {
  it("returns true === true for ([1, 2, 3],[1, 2, 3]), true)", function() {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true === true for (['1', '2', '3'],['1', '2', '3']), true)", function() {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false !== true for ([1, 2, 3],[1, 2, 3, 4]), true)", function() {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it("returns false !== true for ([1, 2, 3],[3, 2, 1), true)", function() {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it("returns false !== true for (['1', '2', '3'],['1', '2', 3]), true)", function() {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});