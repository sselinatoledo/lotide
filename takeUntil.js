// IMPLEMENTATION
const takeUntil = function(array, callback) {
  const result = []
  for (let item of array) {
    // you want the falsy to be your output
    if(!callback(item)) {
      result.push(item)
    } else {
    return result
    }
  }
  return result
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// OUTPUT
// [1, 2, 5, 7, 2]
// ['I\'ve', 'been', 'to', 'Hollywood']

// 1. create an empty array to store the items we want to keep from the original array.
// 2. loop throufgh each item in the array.
// 3. for each item - we check if the callback returns a truth value by passing the item to the callback 