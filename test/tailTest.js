//import assert library from chai package.
const assert = require('chai').assert;

// import tail function.
const tail   = require('../tail');

describe('#tail', () => {
  it("returns a new array containing all elements of the array except for the first one", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should not modify the original array when called an array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, (["Yo Yo", "Lighthouse", "Labs"]));
  });
});