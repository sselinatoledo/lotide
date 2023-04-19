const takeUntil = function(array, callback) {
  const result = [];
  for (let element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
};

module.exports = takeUntil;