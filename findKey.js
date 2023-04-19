// function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
const findKey = function(object, callback) {

  // loop through each key in the object.
  for (let key in object) {

    // if callback function is true and found then return the current key.
    if (callback(object[key])) {
      return key;
    }
  }

  // otherwise if no key is found then return undefined.
  return undefined;
};

// export findKey function.
module.exports = findKey;