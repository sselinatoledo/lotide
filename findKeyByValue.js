const assertEqual = function(actual, expected) {                        
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
// INSTRUCTIONS:
// should scan the object and return the first key which contains the given value. 
// if no key with that given value is found, then return undefined

// CODE:
// implement the function findKeyByValue. which takes in an object and a value.
const findKeyByValue = function(object, value) {
  // for each key in the object. this is the loop in order to access the properties of an object.
  for (let key in object) {
    // check if the value of the current key = to the given value.
    if (object[key] === value) {
      //if it is, return the key.
      return key
    }
  }
  // if the loop completes, and without finding a match, return undefined
  return undefined
}

// we need this in order to have the output and function findKeyByValue to work.
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}

// INITIAL TEST CODE
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))// output: "comedy"
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse")) // output: "sci_fi"
console.log(findKeyByValue(bestTVShowsByGenre, "The Little Mermaid"))// output: "undefined"

// FINAL TEST CODE
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);