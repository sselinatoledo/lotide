// test assertArraysEqual.js
const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]);   // passed! all values in each index are the same.
assertArraysEqual([1, 2, 3], [3, 2, 1]);   // failed! the value in each index are not the same.
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);   // passed! all strings.
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);     // failed! 3 is not a string.