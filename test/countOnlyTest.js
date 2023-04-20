// import assert library from chai package.
const assert = require('chai').assert;

// import countOnly function.
const countOnly = require('../countOnly');

// TEST CODE
describe("countOnly function", () => {
  it("returns the correct count for specified items in the array", () => {
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
  it("returns undefined for an item that is not present in the object", () => {
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