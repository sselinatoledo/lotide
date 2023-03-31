const assertEqual = function(actual, expected) {                          // function called assertEqual
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count 

const countOnly = function(allItems, itemsToCount) {      // 1. make a function that will have a parameter of an aray of strings and an object specififes the counnt of the strings
  const results = {}                                     // 5. make a buffer(temporarily used store data)
  for (item of allItems) {                              // 7. Make a for of loop to access the allItems => the elements of the array => firstNames array
    //console.log(item);                               // 8. this is to check the loop if it accessing
    if (itemsToCount[item]) {                          // 9. outer if to access the 2nd parameter if it is true then go to the inner if, if it is false then go back to the result
    if (results[item]) {                              // 10. inner if to increment the name if it has repeated
        results[item] = results[item] + 1;
      }
      else {                                          // 11. Otherwise, if will only be 1 count
      results[item] = 1
      }
  }
}
  return results;                                   // 6. need to return to the buffer
} 

const firstNames = [                               // 2. this is the inside of the allItems parameter
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const whatToCount = {                              // 3. this is the inside of the itemsToCount parameter
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
}

const result1 = countOnly(firstNames, whatToCount)         // 4. this is calling the function 

// TEST CODE
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


// OUTPUT
