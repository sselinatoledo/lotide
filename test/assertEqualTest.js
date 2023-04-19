// import assertEqual function.
const assertEqual = require('../assertEqual');

// TEST CODE 
assertEqual("Lighthouse Labs", "Bootcamp"); // failed! non-identical strings
assertEqual(1, 1); // passed! identical numbers
assertEqual("JavaScript", "JavaScript"); // passed! identical strings
assertEqual(2, 1); // failed! non-identical numbers