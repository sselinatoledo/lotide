// const sum = function(a, b) {
//   return a * b;
// }

// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 21);

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {                          // function called assertEqual
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //non-identical strings. calling all out the function
assertEqual(1, 1); //identical numbers
assertEqual("JavaScript", "JavaScript"); //identical strings
assertEqual(2, 1); //non-identical numbers


// different coding style
const assertEqual1 = function(actual, expected) {
  if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
};

// TEST CODE
console.log(assertEqual1("Lighthouse Labs", "Bootcamp"));               // change the test code by putting console.logging it and at the same time calling it
console.log(assertEqual1(1, 1));                                         // in this code -> you can use return because of the test code explanation above this
console.log(assertEqual("JavaScript", "JavaScript"));
console.log(assertEqual(2, 1));
                                                  