// require assertArraysEqual and letterPositions function to run the test code.
// const assertArraysEqual = require('../assertArraysEqual');
// const letterPositions = require('../letterPositions');

// // INITIAL TEST CODE
// console.log(letterPositions("lighthouse in the house"));

// // OUTPUT STEP 1
// /*
// {
//   l: [ 0 ],
//   i: [ 1, 11 ],
//   g: [ 2 ],
//   h: [ 3, 5, 15, 18 ],
//   t: [ 4, 14 ],
//   o: [ 6, 19 ],
//   u: [ 7, 20 ],
//   s: [ 8, 21 ],
//   e: [ 9, 16, 22 ],
//   n: [ 12 ]
// }
// */

// // FINAL TEST CODE
// assertArraysEqual(letterPositions("lighthouse in the house").l, [1]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

// MOCHA AND CHAI TESTING
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPositions function", function() {
  it("returns 3,5,15,18 === 3,5,15,18 for (letterPositions('lighthouse in the house').h, [3, 5, 15, 18])", function() {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
  it("returns 0 === 0 for (letterPositions('lighthouse in the house').l, [0])", function() {
    assert.deepEqual(letterPositions("lighthouse in the house").l, [0]);
  });
});