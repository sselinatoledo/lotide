// // test assertObjectsEqualTest.js
const assertObjectsEqual = require('../assertObjectsEqual');

// test code
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // should pass
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2, c: '3' }); // should fail