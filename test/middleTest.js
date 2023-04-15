// The TEST CODE should require the middle and assertArraysEqual modules.
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

// TEST CODE with assertArraysEqual => passed or fail
assertArraysEqual(middle([1]), []); // empty array. no middle with only one element.
assertArraysEqual(middle([1, 2]), []); // empty array.no middle with two elements.
assertArraysEqual(middle([1, 2, 3]), [2]); // [2] there is one middle with odd number elements.
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3] two middles with even.
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4] two middles with even.
