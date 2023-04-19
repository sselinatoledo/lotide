// function that takes in an object and a value and returns the first key that corresponds to that value.
const findKeyByValue = function(object, value) {

  // loop through for each key in the object in order to access the properties of an object.
  for (let key in object) {

    // check if the value of the current key = to the given value.
    if (object[key] === value) {

      // if it is, return the key.
      return key;
    }
  }

  // if the loop completes and without finding a match, return undefined.
  return undefined;
};

// export findKeyByValue function.
module.exports = findKeyByValue;