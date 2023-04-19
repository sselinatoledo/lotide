// import assertArraysEqual function.
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);   // passed!
assertArraysEqual([1, 2, 3], [3, 2, 1]);   // failed!
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);   // passed!
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);     // failed!