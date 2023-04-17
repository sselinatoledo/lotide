// test countLetters.js function.
const countLetters = require('../countLetters');

// test assertEqual in countLetters function.
const assertEqual = require('../assertEqual');

// INITIAL TEST CODE
console.log(countLetters("lighthouse in the house"));
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["c"], undefined);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], undefined);

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
