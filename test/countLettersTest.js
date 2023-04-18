// test countLetters.js function.
// const countLetters = require('../countLetters');

// // test assertEqual in countLetters function.
// const assertEqual = require('../assertEqual');

// // INITIAL TEST CODE
// console.log(countLetters("lighthouse in the house"));
// const result1 = countLetters("lighthouse in the house");
// assertEqual(result1["l"], 1);
// assertEqual(result1["c"], undefined);
// assertEqual(result1["i"], 2);
// assertEqual(result1["h"], undefined);

// OUTPUT
/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

// MOCHA AND CHAI TESTING
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("countLetters function", function() {
  it("returns 1 === 1 for (countLetters('lighthouse in the house')['l'], 1)", function() {
    assert.deepEqual(countLetters("lighthouse in the house")["l"], 1);
  });
  it("returns undefined === undefined for (countLetters('lighthouse in the house')['c'], undefined)", function() {
    assert.deepEqual(countLetters("lighthouse in the house")["c"], undefined);
  });
  it("returns 2 === 2 for (countLetters('lighthouse in the house')['i'], 2)", function() {
    assert.deepEqual(countLetters("lighthouse in the house")["i"], 2);
  });
  it("returns 1 === 1 for (countLetters('lighthouse in the house')['h'], undefined)", function() {
    assert.deepEqual(countLetters("lighthouse in the house")["h"], 4);
  });
});