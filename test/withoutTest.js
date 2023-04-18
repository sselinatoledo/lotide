// require without and assertArraysEqual functions to run the test code in here.
// const without = require('../without');
// const assertArraysEqual = require('../assertArraysEqual');

// // Test Code 1
// without([1, 2, 3], [1]); // => [2, 3]
// assertArraysEqual([2, 3], [2, 3]); // => pass!

// // Test Code 2
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// assertArraysEqual([1, 2], [1, 2]); // => pass!

// // Test Code 3
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function => pass!

// // mocha and chai testing
const assert = require('chai').assert;
const without = require('../without');

describe("without function", function() {
  it("returns 2,3 === 2,3 for without([1, 2, 3], [1])", function() {
    without([1, 2, 3], [1])
    assert.deepEqual([2, 3], [2, 3]);
  });
  it("returns 1,2 === 1,2 for without(['1', '2', '3'], [1, 2, '3'])", function() {
    without(["1", "2", "3"], [1, 2, "3"])
    assert.deepEqual([1, 2], [1, 2]);
  });
  it("returns hello,world,lighthouse === hello,world,lighthouse for without(['hello', 'world', 'lighthouse'])", function() {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); 
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});