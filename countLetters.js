const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter === " ") {
      continue;
    }
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;