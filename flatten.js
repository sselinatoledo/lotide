const flatten = function(nested) {
  let newArray = [];
  for (let i of nested) {
    if (Array.isArray(i)) {
      newArray = newArray.concat(flatten(i));
    } else {
      newArray.push(i);
    }
  }
  return newArray;
};

module.exports = flatten;