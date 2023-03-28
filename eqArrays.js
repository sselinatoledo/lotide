const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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



// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])) // => false       // add another tester
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// use assertEqual function => test cases for various scenarios 

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true) // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => should FAIL
