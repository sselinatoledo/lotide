const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// Define a function called eqObjects. that takes in two objects as parameters.
const eqObjects = function(object1, object2) {
  // Get the keys of the 2 objects. Object.keys() method. STEP 3 PRIMITIVE AS VALUES (IMPLEMENTATION).
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  // check if the length of the index from 2 objects are not equal.
  if (key1.length !== key2.length) {
    // return false
    return false;
  }
  // next, for in loop through the properties of the object.
  for (let key in object1) {
    // if both objects have arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // call eqArrays function to check if they are not equal 
      if(!eqArrays(object1, object2)) {
        // return false
        return false
      }
    }
    // need to change the if to else if so it will skip if the answer above is true(meaning 2 arrays are equal)
    // if current index(value) from 2 objects are not equal.
    else if (object1[key] !== object2[key]) {
      // return false
      return false;
    }
  }
  // if all matches, return true
  return true;
};

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