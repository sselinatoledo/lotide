// import function eqObjects.
const eqObjects = require('./eqObjects');

// function that takes in 2 objects and returns true if they are equal and false otherwise.
const assertObjectsEqual = function(actual, expected) {

  // import library.
  const inspect = require("util").inspect;

  // conditional statement that tells if eqObjects are equal or not.
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// export function assertObjectsEqual.
module.exports = assertObjectsEqual;