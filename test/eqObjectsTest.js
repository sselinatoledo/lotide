// test eqObjects.js
const eqObjects = require('../eqObjects');

// test assertEqual.js
const assertEqual = require('../assertEqual');


// PRIMITIVE AS VALUES (TESTS)
// created objects to be compared
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // assertion passed!
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // assertion passed!
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // assertion failed!

// ARRAYS AS VALUES (TESTS)
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // assertion passed!
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // assertion passed!
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), true); // assertion failed!

// OBJECTS AS VALUES (DISCUSSION)
// we'll be coming back to it soon enough.