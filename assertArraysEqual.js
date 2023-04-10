// function called eqArrays. takes in 2 arrays as parameters.
const eqArrays = function(array1, array2) {
  // if the length of 1st array is not equal to 2nd array.
  if (array1.length !== array2.length) {
    // return false.
    return false
  }
  // for loop to get access inside the array.
  for (var i = 0; i < array1.length; i++) {
    // compare the inside of the 1st array to the 2nd array.
    if (array1[i] !== array2[i]) {
      // return false.
      return false
    }
  }
  // if the loop complete and without finding a match, return true.
  return true
}

// implement assertArraysEqual function
// take in 2 arrays
// console.log appropriate message to the console
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
}
}


// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3])   // passed!
assertArraysEqual([1, 2, 3], [3, 2, 1])   // failed!
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])   // passed!
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])     // failed!