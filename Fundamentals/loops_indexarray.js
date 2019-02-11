/*search array from the front

function lastIndexOf(inputArray, target) {
  var lastMatch = -1;
  for (var i = 0; i <= inputArray.length; i++) {
    if (inputArray[i] === target) {
      lastMatch = i;
    }
  } return lastMatch

}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

//search array from the back
function lastIndexOf(inputArray, target) {
  for (var i = inputArray.length - 1; i >= 0; i--) {
    if (inputArray[i] === target) {
      return i;
    } else {
      return -1;
    }
    }
  }
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

//using conditional operator*/
function lastIndexOf(inputArray, target) {
  for (var i = inputArray.length - 1; i >= 0; i--) {
    inputArray[i] === target ? i : -1;
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
