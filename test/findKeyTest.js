// Use mocha and chai for testing
const assert = require('chai').assert;

// import findKey function.
const findKey = require('../findKey');

describe("findKey function", () => {
  it("returns noma === noma", () => {
    const answer = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      'noma': { stars: 2 },
      "elbBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2);
    assert.deepEqual(answer, 'noma');
  });
});