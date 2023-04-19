//import assert library from chai package.
const assert = require('chai').assert;

// import tail function.
const tail   = require('../tail');

describe('#tail', () => {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('cannot modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, (["Yo Yo", "Lighthouse", "Labs"]));
  });
});