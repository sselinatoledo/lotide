// function that takes in a string and returns all indices of letter positions in the string.
const letterPositions = function(sentence) {

  // initialize an empty object.
  const results = {};

  // create a for loop that repeat through each letter of the sentence.
  for (let letter = 0; letter < sentence.length; letter++) {

    // check if the current letter is a space. sentence[letter] is accessing the element.
    if (sentence[letter] === " ") {

      // if it is, skip and continue to the next letter.
      continue;
    }

    // this is for the key output. check if the current letter is not a key yet in the results object.
    if (!results[sentence[letter]]) {

      // if is not, make this a key and value as an empty array.
      results[sentence[letter]] = [];
    }

    // this is for the index output. push the letter to the empty array above
    results[sentence[letter]].push(letter);
  }

  // After the loop finishes, return the results object.
  return results;
};

// export letterPositions function.
module.exports = letterPositions;
