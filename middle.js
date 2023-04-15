// ACTUAL FUNCTION
const middle = function (array) {
  let newArray = []
  let middleSolution = Math.floor(array.length / 2)
  if (array.length <= 2) {
    return []
  }
  else if (array.length % 2 === 0) {
    newArray = array.slice(middleSolution - 1, middleSolution + 1)
  }
    else {
  newArray.push(array[middleSolution])
}
return newArray
}
module.exports = middle;

