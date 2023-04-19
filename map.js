// function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
const map = function(array, callback) {

  // store the results of callback function.
  const results = [];

  // loop through for each element of the array.
  for (let item of array) {

    // call the function on each element and push the results in the empty array.
    results.push(callback(item));
  }

  // return the result array.
  return results;
};

// export map function.
module.exports = map;
