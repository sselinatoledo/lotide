// function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  
  // create an empty array to store the result.
  let newArray = [];
  
  // loop through for each i in source.
  for (let i = 0; i < source.length; i++) {

    // if item is not in itemsToRemove
    if (source[i] !== itemsToRemove[i]) {

      // add item to newArray.
      newArray.push(source[i]);
    }
  }
  
  // return newArray.
  return newArray;
};

// export the without function.
module.exports = without;