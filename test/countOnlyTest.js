// test assertEqual and countOnly function in this test file.
const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

// INITIAL TEST CODE
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

const count = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhana": false
};

const result1 = countOnly(items, count);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);