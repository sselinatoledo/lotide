// import assert library from chai package.
const assert = require('chai').assert;

// import eqObjects function.
const eqObjects = require('../eqObjects');

// TEST CODE
describe("eqObjects function", () => {
  it("returns true for objects with same properties", () => {
    assert.deepEqual(eqObjects({color: 'red', size: 'medium'}, {size: 'medium', color: 'red'}), true);
  });
  it("returns true for objects with same array values", () => {
    assert.deepEqual(eqObjects({colors: ['red', 'blue'], size: 'medium'}, { size: 'medium', colors: ['red', 'blue']}), true);
  });
  it("returns true for objects with same nested object values", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});