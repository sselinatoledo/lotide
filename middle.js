// TEST/ASSERTION FUNCTIONS
const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
}

// ACTUAL FUNCTION
const middle = function (array) {
  let newArray = []
  let middleSolution = array.length / 2
  if (array.length <= 2) {
    return []
  }
  else if (array.length % 2 === 0) {
    newArray = array.slice(middleSolution - 1, middleSolution + 1)
  }
    else {
  newArray.push(array[middleSolution])
}
return newArray
}

// TEST CODE
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]