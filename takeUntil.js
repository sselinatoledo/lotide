// function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
const takeUntil = function(array, callback) {

  // create an empty array to store the result.
  const result = [];

  // loop through for each element of the array.
  for (let element of array) {

    // if the callback is true return result.
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
};

// export takeUntil function.
module.exports = takeUntil;