// test assertEqual.js
const assertEqual = require('../assertEqual');

// test eqArrays.js
const eqArrays = require('../eqArrays');

// TEST CODE 1
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false, add another tester
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// TEST CODE 2
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

// TEST CODE 3 
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [2, 3], [4, 5])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false