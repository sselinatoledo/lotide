// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
  }
  console.log(newArray);
};
module.exports = without;