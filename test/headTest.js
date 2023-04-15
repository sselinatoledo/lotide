// test assertEqualTest.js
const assertEqual = require('../assertEqual')

// test headTest.js
const head = require('../head')

// TEST CODE
assertEqual(head([5,6,7]), 5) // passed!
assertEqual(head(["Hello", "Lighthosue", "Labs"]), "Hello");  // passed!