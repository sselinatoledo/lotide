const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPositions function", () => {
  it("returns the index of each letter inside the string", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});
