// INSTRUCTIONS:
// should scan the object and return the first key which contains the given value.
// if no key with that given value is found, then return undefined

// CODE:
// implement the function findKeyByValue. which takes in an object and a value.
const findKeyByValue = function(object, value) {
  // for each key in the object. this is the loop in order to access the properties of an object.
  for (let key in object) {
    // check if the value of the current key = to the given value.
    if (object[key] === value) {
      //if it is, return the key.
      return key;
    }
  }
  // if the loop completes, and without finding a match, return undefined
  return undefined;
};
module.exports = findKeyByValue;