// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  
  // check the length of the arrays if it is the same.
  if (array1.length !== array2.length) {
    return false;
  }

  // loop through the array so you can check the inside of it.
  for (let i = 0; i < array1.length; i++) {
    
    // check the nested arrays if it is the same.
    const value1 = array1[i]
    const value2 = array2[i]
    if (Array.isArray(value1) && Array.isArray(value2)){
      if (!eqArrays(value1, value2)) {
        return false;
      }
    }

    // make this as else if and check the value inside the array if it is the same.
    else if (value1 !== value2) {
      return false;
    }
  }

  // Happy path.
  return true;
};
module.exports = eqArrays;
