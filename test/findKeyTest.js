// test the findKey and assertEqual function in here.
const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

// INITIAL TEST CODE
const answer = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  'noma': { stars: 2 },
  "elbBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
  // callback function.
}, x => x.stars === 2);

// FINAL TEST CODE
assertEqual(answer, "noma"); // Assertion Passed: noma === noma
assertEqual(answer, undefined); // Assertion Failed: noma !== undefined

// TIP: some of the core logic will be the same as the function findKeyByValue.js
