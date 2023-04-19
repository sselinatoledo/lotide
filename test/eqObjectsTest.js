// import assert library from chai package.
const assert = require('chai').assert;

// import eqObjects function.
const eqObjects = require('../eqObjects');

describe("eqObjects function", () => {
  it("returns true === true for the same primitive values", () => {
    assert.deepEqual(eqObjects({color: 'red', size: 'medium'}, {size: 'medium', color: 'red'}), true);
  });
  it("returns true === true for the same array values", () => {
    assert.deepEqual(eqObjects({colors: ['red', 'blue'], size: 'medium'}, { size: 'medium', colors: ['red', 'blue']}), true);
  });
  it("returns true === true for the same object values", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});