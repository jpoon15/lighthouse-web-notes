var element = process.argv[2]; //process.argv.splice(2) did not work, typeof is object;
console.log(typeof element) // returns string
function passwordArray(element) {
  var array = []; //outside of loop
  for (var i = 0; i < element.length; i++) {
    var letter = element.charAt(i); //only works on strings, not objects apparently;
    if (letter == "a") {
      array += 4;
    } else if (letter == "e") {
      array += 3;
    } else if (letter == "o") {
      array += 0;
    } else if (letter == "l") {
      array += 1;
    } else {
      array += letter
    }
  } return array;
}
console.log(passwordArray(element));

//for consideration: What happens when there are more than 2 parameters entered in CLI node?

// var element = process.argv[2]; //define element to CLI

// function passwordArray(element) {
//     var array = []; //must be outside of for loop
//   for (var i = 0; i < element.length; i++) {
//     var letter = element.charAt(i);

//     switch (letter) {
//       case "a":
//       array += 4;
//       break;

//       case "e":
//       array += 3;
//       break;

//       case "l":
//       array += 1;
//       break;

//       case "o":
//       array += 0;
//       break;

//       default:
//       array += letter;

//     }
//   } return array;
// }
// console.log(passwordArray(element)); //calling function with element
