// Define a function called eqObjects. that takes in two objects as parameters.
const eqObjects = require('./eqObjects');


// implement assertObjectsEqual. which will take in two objects.
const assertObjectsEqual = function(actual, expected) {
  // require("util").inspect => accessing the inspect function from util module without having to import the entire module.
  const inspect = require("util").inspect;
  // console.log an appropriate message to the console.
  // check if the actual object is equal to the expected object by calling a separate function(which returns a boolean)
  if (eqObjects(actual, expected)) {
    // log a pass message if actual is equal to expected. then inspect is added because we need to call out the eqArrays inside the eqObjects.
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    // otherwise, if it is not equal.
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;