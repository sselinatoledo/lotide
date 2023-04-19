const letterPositions = function(sentence) {
  const results = {};
  for (let letter = 0; letter < sentence.length; letter++) {
    if (sentence[letter] === " ") {
      continue;
    }
    if (!results[sentence[letter]]) {
      results[sentence[letter]] = [];
    }
    results[sentence[letter]].push(letter);
  }
  return results;
};

module.exports = letterPositions;
