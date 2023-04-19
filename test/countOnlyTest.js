// import assert library from chai package.
const assert = require('chai').assert;

// import countOnly function.
const countOnly = require('../countOnly');

describe("countOnly function", () => {
  it("returns Jason: 1 === 1", () => {
    const items = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(items, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false });
    assert.deepEqual(result["Jason"], 1);
  });
  it("returns Karima: undefined === undefined", () => {
    const items = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result =  countOnly(items, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false });
    assert.deepEqual(result["Karima"], undefined);
  });
});