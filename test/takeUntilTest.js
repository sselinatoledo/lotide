// require takeUntil and assertArraysEqual functions to run the test code here.
// const takeUntil = require('../takeUntil');
// const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE 1
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// OUTPUT
// [1, 2, 5, 7, 2]
// ['I\'ve', 'been', 'to', 'Hollywood']

// TEST CODE 2
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);  // pass!
// assertArraysEqual(results2, ["I've been to Hollywood"]); // fail! I've,been,to,Hollywood

// mocha and chai testing
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("takeUntil function", function() {
  it("returns [1, 2, 5, 7, 2] === [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", function() {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("returns 'I've','been','to','Hollywood' === 'I've','been','to','Hollywood' for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", function() {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ["I've","been","to","Hollywood"]);
  });
});