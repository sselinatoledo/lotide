// test tailTest.js
const tail = require('../tail');

// test assertEqualTest.js
const assertEqual = require('../assertEqual');

// TEST CODE 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! it is not comparing each value inside the array. you cannot compare the array as whole array. hence, it is always failed!

// TEST CODE 2
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // will passed!