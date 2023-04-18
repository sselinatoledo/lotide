// // test eqObjects.js
// const eqObjects = require('../eqObjects');

// // test assertEqual.js
// const assertEqual = require('../assertEqual');

// // // PRIMITIVE AS VALUES (TESTS)
// // // created objects to be compared
// // const shirtObject = { color: "red", size: "medium" };
// // const anotherShirtObject = { size: "medium", color: "red" };
// // console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

// // const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// // console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

// // assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // assertion passed!
// // assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // assertion passed!
// // assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // assertion failed!

// // // ARRAYS AS VALUES (TESTS)
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// // console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// // console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // assertion passed!
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // assertion passed!
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), true); // assertion failed!

// // OBJECTS AS VALUES (DISCUSSION)
// // we'll be coming back to it soon enough.
// // STRETCH: recursion. we are back.
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

// MOCHA AND CHAI TESTING
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("eqObjects function", function() {
  it("returns true === true for primitive values {color: 'red', size: 'medium'}, {size: 'medium', color: 'red'}), true)", function() {
    assert.deepEqual(eqObjects({color: 'red', size: 'medium'}, {size: 'medium', color: 'red'}), true);
  });
  it("returns false === false for primitive values {color: 'red', size: 'medium'}, {size: 'medium', color: 'red', sleeveLength: 'long'}), false)", function() {
    assert.deepEqual(eqObjects({color: 'red', size: 'medium'}, {size: 'medium', color: 'red', sleeveLength: 'long'}), false);
  });
  it("returns false !== true for array values {colors: ['red', 'blue'], size: 'medium'}, { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'}), true)", function() {
    assert.deepEqual(eqObjects({colors: ['red', 'blue'], size: 'medium'}, { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'}), false);
  });
  it("returns true === true for object values ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)", function() {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
});