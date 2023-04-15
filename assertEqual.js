// const sum = function(a, b) {
//   return a * b;
// }

// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 21);

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
// passing variable assertEqual (which points to our function). And not calling it. 
module.exports = assertEqual;
                                                  