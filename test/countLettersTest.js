// import assert library from chai package.
const assert = require('chai').assert;

// import countLetters function.
const countLetters = require('../countLetters');

// TEST CODE
describe("countLetters function", () => {
  it("returns the count of each letter inside the string", () => {
    assert.deepEqual(countLetters("lighthouse in the house")["h"], 4);
  });
});