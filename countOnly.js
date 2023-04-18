// this function should take in a collection of items => array
// return counts for a specific subset of those items => object

// it won't count everything
// In order to decide what to count, it will be given an idea of which items we care about and it will only count those, ignoring the others => conditional

// array + object = return an object that is truthy value
// false in the object and not included in the array is not counted

// array = allItems
// object = itemsToCount

// 1. cannot read property => make a new empty object and return it
// equals to undefined

// 2. for loop
// to count them all

// 3. if statement
// set the empty object and index of the array to 1 and increment it to many times it appears

// 4. otherwise
// set it = to 1 only

// 5. need to add another if because of the false from the object itemsToCount

// SOLUTION
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};
module.exports = countOnly;
