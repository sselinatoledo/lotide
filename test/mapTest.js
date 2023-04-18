// require map and assertArraysEqual function in here.
// const map = require('../map');
// const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE 1
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, function(word) {
//   return word[0];
// });
// console.log(results1);

// // TEST CODE 2
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // pass!
// assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]); // pass!
// assertArraysEqual(results1, [ 't', 'm', 't', 'c', 'g' ]); // fail!
// assertArraysEqual(words, ["ground", "control"]); // fail!

// MOCHA AND CHAI TESTING
const assert = require('chai').assert;
const map = require('../map');

describe("map function", function() {
  it("returns g,c,t,m,t === g,c,t,m,t for ['ground', 'control', 'to', 'major', 'tom']", function() {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, function(word) {
      return word[0];
    });
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns ground,control,to,major,tom === ground,control,to,major,tom for ['ground', 'control', 'to', 'major', 'tom']", function() {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(words, ["ground", "control", "to", "major", "tom"]);
  });
});
