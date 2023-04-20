const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("takeUntil function", () => {
  it("returns the array up until the function callback is true", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
});