// function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
const eqArrays = function(arr1, arr2) {

  // check the length of the arrays if it is the same.
  if (arr1.length !== arr2.length) {
    return false;
  }

  // loop through the array so you can check the inside of it.
  for (let i = 0; i < arr1.length; i++) {

    // check the nested arrays if it is the same.
    const value1 = arr1[i];
    const value2 = arr2[i];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }

      // make this as else if and check the value inside the array if it is the same.
    } else if (value1 !== value2) {
      return false;
    }
  }

  // Happy path.
  return true;
};

// export function eqArrays.
module.exports = eqArrays;
