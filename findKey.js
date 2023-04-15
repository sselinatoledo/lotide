const assertEqual = function(actual, expected) {                        
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  for(let key in object) {
    console.log(object[key])
    
    if(callback(object[key])) {
      return key
    }
  }
  return undefined
};

// calling the function findKey.
const answer = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  'noma': { stars: 2 },
  "elbBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
  // callback function.
}, x => x.stars === 2)

// INITIAL TEST CODE
console.log(answer) // noma

// FINAL TEST CODE 
assertEqual(answer, "noma"); // Assertion Passed: noma === noma
assertEqual(answer, undefined); // Assertion Failed: noma !== undefined

// TIP: some of the core logic will be the same as the function findKeyByValue.js 
