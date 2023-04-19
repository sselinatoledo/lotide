// function that takes in 2 values and returns false if they are not equal and true otherwise.
const assertEqual = function(actual, expected) {
  
  // conditional statement that tells if 2 values are equal or not.
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// export function assertEqual.
module.exports = assertEqual;

