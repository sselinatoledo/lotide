// test findKeyByValue.js and assertEqual.js functions in here.
const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

// INITIAL TEST CODE
// we need this in order to have the output and function findKeyByValue to work.
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));  // output: "comedy"
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse")); // output: "sci_fi"
console.log(findKeyByValue(bestTVShowsByGenre, "The Little Mermaid"));  // output: "undefined"

// FINAL TEST CODE
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // passed: undefined === undefined
