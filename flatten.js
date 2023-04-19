// function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function(nested) {

  // store the merged array.
  let newArray = [];

  // loop through the array.
  for (let i of nested) {

    // if the nested arrays is an array.
    if (Array.isArray(i)) {

      // concatenate the array and putting it as the newArray.
      newArray = newArray.concat(flatten(i));

      // otherwise, use push method to push the element inside the buffer if the array is not a nested array.
    } else {
      newArray.push(i);
    }
  }

  // return the newArray.
  return newArray;
};

// export flatten function.
module.exports = flatten;