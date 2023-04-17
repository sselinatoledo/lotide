// .map() pass a callback function that takes the parameter as an argument and getting the length of the each element of the array.
// an array to map
// a callback function

/*
PSEUDOCODE
  1. an array of strings called words. contains 5 elements.
  2. higher order function called map. takes 2 parameters (array, callback).
  3. you want a different output from the given array, so create an empty array.
  4. loop through each element of the array.
  5. call the second parameter
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
