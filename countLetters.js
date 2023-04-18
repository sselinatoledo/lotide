// function that takes the sentence as a string
// object that return a count of each of the letter in the sentence

// 1. set up a function called countLetters. that takes a word as a parameter.
// 2. initialize an empty object.
// 3. create a for of loop that repeat through the elements. accessing the elements.
// 4. check if the current index is a space. if it is, skip and continue to the next index.
// 5. if and else => this is for the key and value output.
// 6. check if the current index is not a key yet in the object. if it is not, make that a key and value equals to 1.
// 7. Otherwise, incrememnt(add it to the existing value 1 if it is repeated).

// SOLUTION
const countLetters = function(word) {
  const result = {};
  for (let letter of word) {
    if (letter === " ") {
      continue;
    }
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};
module.exports = countLetters;