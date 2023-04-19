const middle = function(array) {
  let newArray = [];
  const middleSolution = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    newArray = array.slice(middleSolution - 1, middleSolution + 1);
  } else {
    newArray.push(array[middleSolution]);
  }
  return newArray;
};

module.exports = middle;