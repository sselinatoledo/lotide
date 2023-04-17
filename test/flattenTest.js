// require functions to run the test code.
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

// TEST CODE 1
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => PASS

// TEST CODE 2
assertArraysEqual(flatten([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1]); // => PASS
assertArraysEqual(flatten([6, 5, [4, 3], 2, [1]]), [2, 4, 6, 8]); // => FAIL