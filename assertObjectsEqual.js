// Define a function called eqObjects. that takes in two objects as parameters.
const eqObjects = function(object1, object2) {
  // Get the keys of the 2 objects. Object.keys() method. STEP 3 PRIMITIVE AS VALUES (IMPLEMENTATION).
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  // check if the length of the index from 2 objects are not equal.
  if (key1.length !== key2.length) {
    // return false
    return false;
  }
  // next, for in loop through the properties of the object.
  for (let key in object1) {
    // if both objects have arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // call eqArrays function to check if they are not equal
      if (!eqArrays(object1, object2)) {
        // return false
        return false;
        // need to change the if to else if so it will skip if the answer above is true(meaning 2 arrays are equal)
        // if current index(value) from 2 objects are not equal.
      } else if (object1[key] !== object2[key]) {
        // return false
        return false;
      }
    }
    // if all matches, return true
    return true;
  }
};

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

// test code
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // should pass
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2, c: '3' }); // should fail
