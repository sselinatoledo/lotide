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

// coding style using C style loop
const flatten = function(nested) {
  let newArray = []
  for (var i = 0; i < nested.length; i++) {
  if (Array.isArray(nested[i])) {
    newArray = newArray.concat(flatten(nested[i]))
  }
  else (
    newArray.push(nested[i])
  )
}
  return newArray
}

// TEST CODE 
console.log(flatten([1, 2, [3, 4], 5, [6]])) // nested array => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // => PASS


// different coding style using for of loop
const otherFlatten = function(nested) {
  let newArray = []
  for (var i of nested) {
  if (Array.isArray(i)) {
    newArray = newArray.concat(otherFlatten(i))
  }
  else {
    newArray.push(i)
  }
}
  return newArray
}


// TEST CODE 
console.log(otherFlatten([1, 2, [3, 4], 5, [6]])) // nested array => [1, 2, 3, 4, 5, 6]
assertArraysEqual(otherFlatten([1, 2, [3, 4], 5, [6]]), [6, 5, 4, 3, 2, 1]) // => PASS
