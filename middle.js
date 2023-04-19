// function that takes in an array and returns middle most element of the array.
const middle = function(array) {

  // store the results of the middle element of an array.
  let newArray = [];

  // Math.floor method to round down the length of the array when divided to 2.
  const middleSolution = Math.floor(array.length / 2);

  // if an array has less than or equal to 2 elements.
  if (array.length <= 2) {

    // return empty array.
    return [];
  }

  // if the length of an array is an even number.
  if (array.length % 2 === 0) {

    // store the result to the newArray using slice method that gets the element before the middle and the middle element.
    newArray = array.slice(middleSolution - 1, middleSolution + 1);

    // Otherwise, using push method to put the middle element in the newArray for odd number of the length of an array.
  } else {
    newArray.push(array[middleSolution]);
  }

  // return the newArray.
  return newArray;
};

// export middle function.
module.exports = middle;