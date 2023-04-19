const assert = require('chai').assert;
const map = require('../map');

describe("map function", () => {
  it("returns g,c,t,m,t for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, function(word) {
      return word[0];
    });
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns ground,control,to,major,tom for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(words, ["ground", "control", "to", "major", "tom"]);
  });
});
