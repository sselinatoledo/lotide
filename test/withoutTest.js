const assert = require('chai').assert;
const without = require('../without');

describe("without function", () => {
  it("returns 2,3 === 2,3 for without([1, 2, 3], [1])", () => {
    without([1, 2, 3], [1]);
    assert.deepEqual([2, 3], [2, 3]);
  });
  it("returns 1,2 === 1,2 for without(['1', '2', '3'], [1, 2, '3'])", () => {
    without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual([1, 2], [1, 2]);
  });
  it("returns true when comparing ['hello', 'world', 'lighthouse'] with the ['lighthouse'] ", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});