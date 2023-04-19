// import function eqArrays.
const eqArrays = require('./eqArrays');

// function that takes in 2 objects and return true if they are equal and false otherwise.
const eqObjects = function(object1, object2) {

  // check if both objects have the same number of keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate over each key in object1
  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    // check if the value of value1 is an array.
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    
    // check if the value of value2 is an object.
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!Array.isArray(value1) && !Array.isArray(value2)) {
        if (!eqObjects(value1, value2)) {
          return false;
        }
      }

      // compare the values directly.
    } else if (value1 !== value2) {
      return false;
    }
  }

  // happy path.
  return true;
};

// export function eqObjects.
module.exports = eqObjects;