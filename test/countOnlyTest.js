// Use mocha and chai for testing 
const assert = require('chai').assert;

// test assertEqual and countOnly function in this test file.
// const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

// MANUAL TESTING
// const items = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
// const count = {
//   "Jason": true,
//   "Karima": true,
//   "Fang": true,
//   "Agouhana": false
// };
// const result1 = countOnly(items, count);
// assertEqual(result1["Jason"], 1); // 1 === 1
// assertEqual(result1["Karima"], undefined);  // undefined === undefined
// assertEqual(result1["Fang"], 2);  // 2 === 2
// assertEqual(result1["Agouhanna"], undefined); //undefined === unefined

// MOCHA AND CHAI TESTING
//describe countOnly function using describe function
describe("countOnly function", () => {
  it("returns Jason: 1 === 1 && Fang: 2 === 2", () => {
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
    const result = countOnly(items, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result["Jason"], 1);
    assert.deepEqual(result["Fang"], 2)
  });
  it("returns Karima: undefined === undefined && Agouhana: undefined === undefined", () => {
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
    const result =  countOnly(items, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result["Karima"], undefined);
    assert.deepEqual(result["Agouhana"], undefined);
  });
});