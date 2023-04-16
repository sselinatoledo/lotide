// // test tailTest.js
// const tail = require('../tail');

// // test assertEqualTest.js
// const assertEqual = require('../assertEqual');

// // TEST CODE 1
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! it is not comparing each value inside the array. you cannot compare the array as whole array. hence, it is always failed!

// // TEST CODE 2
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3); // will passed!

const assert = require('chai').assert;
const tail   = require('../tail');

describe('#tail', function() {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('cannot change the original array', function() {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, (["Yo Yo", "Lighthouse", "Labs"]))
  });
});