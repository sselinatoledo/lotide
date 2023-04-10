// 1. create an empty array to store the items we want to keep from the original array.
// 2. loop throufgh each item in the array.
// 3. for each item - we check if the callback returns a truth value by passing the item to the callback


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
}

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

// TEST CODE 1
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

// TEST CODE 2
assertArraysEqual(results1, [1, 2, 5, 7, 2])  // pass!
assertArraysEqual(results2, ["I've been to Hollywood"])   // fail!
