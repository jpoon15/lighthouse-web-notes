
/*var conditionalSum = function(values) {
  var addedNums = 0;

  for (var i = 0; i <= values.length; i++) {
    addedNums += i;
  }
  return addedNums;
};

console.log(conditionalSum([1, 2, 3, 4, 5]));
*/


var conditionalSum = function(values, condition) {
  var addedNums = 0;

  if (condition === "odd") {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        addedNums += values[i];
      }
    }
  } else if (condition === "even") {
      for (var j = 0; j < values.length; j++) {
        if (values[j] % 2 === 0) {
          addedNums += values[j];
        }
      }
    } return addedNums;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
/*question : understanding
<=value.length = only even numbers produce answers
< value.length = works for everything*/