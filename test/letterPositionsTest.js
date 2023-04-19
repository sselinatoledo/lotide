const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPositions function", function() {
  it("returns [3,5,15,18] === [3,5,15,18] for letter h in 'lighthouse in the house'", function() {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
  it("returns [0] === [0] for letter l in 'lighthouse in the house' ", function() {
    assert.deepEqual(letterPositions("lighthouse in the house").l, [0]);
  });
});
