const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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
  const result = {}
  for (var item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1
      } else {
        result[item] = 1
      }
    }
  }
  return result;
}

// INITIAL TEST CODE 
const items = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]

const count = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhana": false
}

const result1 = countOnly(items, count)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);