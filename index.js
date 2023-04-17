// index.js
const head = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const findKey = require('./findKey')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')
const countOnly = require('./countOnly')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  findKey,
  map,
  takeUntil,
  without,
  countOnly,
  eqArrays,
  eqObjects,
  findKeyByValue,
  flatten,
  letterPositions
};