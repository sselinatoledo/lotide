// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = function(actual) {
  return actual[0]
}


// TEST CODE
assertEqual(head([5,6,7]), 5)
assertEqual(head(["Hello", "Lighthosue", "Labs"]), "Hello");