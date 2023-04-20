// import assert library from chai package.
const assert = require('chai').assert;

// import findKey function.
const flatten = require('../flatten');

describe("flatten function", () => {
  it("returns for all nested arrays sorted and merged", () => {
    assert.deepEqual(flatten([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1]);
  });
});