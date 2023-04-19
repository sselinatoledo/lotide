// function that takes in an array and returns everything except the first element of the array.
const tail = function(actual) {

  // using slice method to remove the first index of the array.
  return actual.slice(1);
};

// export tail function.
module.exports = tail;
