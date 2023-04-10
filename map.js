// .map() pass a callback function that takes the parameter as an argument and getting the length of the each element of the array.
// an array to map
// a callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // temporary code:
  console.log('array:', array);
  console.log('callback:', callback);
  // empty for now :)
  const results = [];
  for (let item of words) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, function(word) {
  return word[0];
});
console.log(results1);


/*
PSEUDOCODE
  1. an array of strings called words. contains 5 elements.
  2. higher order function called map. takes 2 parameters (array, callback).
  3. you want a different output from the given array, so create an empty array.
  4. loop through each element of the array.
  5. call the second parameter 
*/



// the argument is given on the top.
// const words1 = ['ground', 'control', 'to', 'major', 'tom'];

// // output is [ 'g', 'c', 't', 'm', 't']

// // need to have solution first and then call the function in order to run this.
// const map = function (array1, index) {
//   let result = []
//   for (let i = 0; i < array1.length; i++) {
//     result.push(index(array1[i]))
//   }
//   return result;
// }



// // calling the function here.
// console.log(map(words1))