// 1. create an empty array to store the items we want to keep from the original array.
// 2. loop throufgh each item in the array.
// 3. for each item - we check if the callback returns a truth value by passing the item to the callback

// IMPLEMENTATION
const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    // you want the falsy to be your output
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};
module.exports = takeUntil;