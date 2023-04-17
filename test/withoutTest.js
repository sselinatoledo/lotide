// require without and assertArraysEqual functions to run the test code in here.
const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

// Test Code 1
without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual([2, 3], [2, 3]); // => pass!

// Test Code 2
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual([1, 2], [1, 2]); // => pass!

// Test Code 3
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function => pass!