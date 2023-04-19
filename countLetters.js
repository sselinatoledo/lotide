// function that takes in a sentence and returns a count of each of the letters in the sentence.
const countLetters = function(string) {
  
  // store the count of each letter.
  const result = {};
  
  // loop through each of the letters in the sentence.
  for (let letter of string) {
    
    // conditional if statement that will not count the spaces in the sentence.
    if (letter === " ") {
      continue;
    }
    
    // conditional if statement that puts a value of 1 to each letter if its not yet encountered in the sentence.
    if (result[letter]) {
      result[letter] += 1;
    
    // Otherwise, else statement that increments the count of each letter as we encounter each letter in the sentence.
    } else {
      result[letter] = 1;
    }
  }

  // return the result object.
  return result;
};

// export function countLetters.
module.exports = countLetters;