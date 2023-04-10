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

// CODE
// set up a function called letterPositions. that takes a sentence as a parameter.
const letterPositions = function(sentence) {
  // initialize an empty object.
  const results = {};
    // create a for loop that repeat through each index(letter) of the string(sentence).
    for (let letter = 0; letter < sentence.length; letter++) {
      // check if the current index is a space. sentence[letter] is accessing the element.
      if (sentence[letter] === " ") {
        // if it is, skip and continue to the next index.
        continue;
      }
      // this is for the key output. check if the current index is not a key yet in the results object. 
      if (!results[sentence[letter]]) {
        // if is not, make this a key and value as an empty array.
        results[sentence[letter]] = []
      }
        // this is for the index output. push the index(letter) to the empty array above
        results[sentence[letter]].push(letter)     
}
// After the loop finishes, return the results object.
return results
}

// INITIAL TEST CODE 
console.log(letterPositions("lighthouse in the house"))

// OUTPUT STEP 1
/*
{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
}
*/

// OUTPUT STEP 2
assertArraysEqual(letterPositions("lighthouse in the house").l, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
