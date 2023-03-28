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
assertArraysEqual([1, 2, 3], [1, 2, 3]) 
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) 