// import assertObjectsEqual function
const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CODE
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // passed!
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2, c: '3' }); // failed!