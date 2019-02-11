var args = process.argv;
var password = args[2]
var array = [];
for (var i = 0; i < password.length; i++) {
  var letter = password.charAt(i);
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
}
console.log(array);



var args = process.argv;
var password = args[2]
var array = [];
for (var i = 0; i < password.length; i++) {
  var letter = password.charAt(i);
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
}
console.log(array);


var args = process.argv[2]

function passwordArray(element) {
  var array = [];
  for (var i = 0; i < element.length; i++) {
    var letter = element.charAt(i);

    switch (letter) {
      case "a":
      array += 4;
      break;

      case "e":
      array += 3;
      break;

      case "l":
      array += 1;
      break;

      case "o":
      array += 0;
      break;

      default:
      array += letter;
    }
  } return array;
}
console.log(passwordArray(args));
