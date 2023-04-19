// import assert library from chai package.
const assert = require('chai').assert;

// import countLetters function.
const countLetters = require('../countLetters');

describe("countLetters function", () => {
  it("returns the count when accessing the letter in the string", () => {
    assert.deepEqual(countLetters("lighthouse in the house")["h"], 4);
  });
});