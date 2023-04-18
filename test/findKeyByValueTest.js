// test findKeyByValue.js and assertEqual.js functions in here.
// const findKeyByValue = require('../findKeyByValue');
// const assertEqual = require('../assertEqual');

// // INITIAL TEST CODE
// // we need this in order to have the output and function findKeyByValue to work.
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));  // output: "comedy"
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse")); // output: "sci_fi"
// console.log(findKeyByValue(bestTVShowsByGenre, "The Little Mermaid"));  // output: "undefined"

// FINAL TEST CODE
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // passed: drama === drama
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // passed: undefined === undefined

// MOCHA AND CHAI TESTING
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("findKeyByValue function", function() {
  it("returns drama === drama for (bestTVShowsByGenre, 'The Wire'), 'drama')", function() {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined === undefined for (bestTVShowsByGenre, 'That '70s Show'), undefined)", function() {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});