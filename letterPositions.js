// CODE
// set up a function called letterPositions. that takes a sentence as a parameter.
const letterPositions = function(sentence) {
  // initialize an empty object.
  const results = {};
  // create a for loop that repeat through each index(letter) of the string(sentence).
  for (let letter = 0; letter < sentence.length; letter++) {
    // check if the current index is a space. sentence[letter] is accessing the element.
    if (sentence[letter] === " ") {
      // if it is, skip and continue to the next index.
      continue;
    }
    // this is for the key output. check if the current index is not a key yet in the results object.
    if (!results[sentence[letter]]) {
      // if is not, make this a key and value as an empty array.
      results[sentence[letter]] = [];
    }
    // this is for the index output. push the index(letter) to the empty array above
    results[sentence[letter]].push(letter);
  }
  // After the loop finishes, return the results object.
  return results;
};
module.exports = letterPositions;
