// function that takes in a collection of items and returns a specific subset of those items.
const countOnly = function(allItems, itemsToCount) {

  // store the values of the object result.
  const result = {};

  // loop through the allItems to check how many times eaxh item appear.
  for (const item of allItems) {

    // if the value is found in the itemsToCount object.
    if (itemsToCount[item]) {
      
      // then we need to increment the count of each item into result as we encounter it.
      if (result[item]) {
        result[item] += 1;
        
        // Otherwise, set it only to 1.
      } else {
        result[item] = 1;
      }
    }
  }

  // return the result object.
  return result;
};

// export function countOnly.
module.exports = countOnly;