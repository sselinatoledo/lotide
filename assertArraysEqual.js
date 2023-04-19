// import function eqArrays.
const eqArrays = require('./eqArrays');

// function that prints an appropriate message after comparing the two arrays.
const assertArraysEqual = function(array1, array2) {

  // conditional statement that tells if eqArrays is true or false.
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// export function assertArraysEqual.
module.exports = assertArraysEqual;