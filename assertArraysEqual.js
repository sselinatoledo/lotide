// function called eqArrays. takes in 2 arrays as parameters.
const eqArrays = require('./eqArrays')

// implement assertArraysEqual function
// take in 2 arrays
// console.log appropriate message to the console
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
}
}
module.exports = assertArraysEqual;
