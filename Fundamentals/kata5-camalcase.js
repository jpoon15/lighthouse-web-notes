/*Using Loops

var camelCase = function(input) {
  var newString = "";
  var wordArr = input.split(" "); //split words at space
  for (var i = 0; i < wordArr.length; i++) {
    var letterArr = wordArr[i].split(""); //split up letters
    var firstLetter = letterArr[0].toUpperCase(); //cap first letter
    var x = letterArr.slice(1).join(""); //rm lc letter and reform word
    var newWord = firstLetter.concat(x); //combine words together
    newString += newWord // combine word in loop
  } var result = newString.charAt(0).toLowerCase() + newString.slice(1); //Add lowercase letter and then delete Uppercase
  return result;
};
*/

// Using metacharacter

var camelCase = function(input) {
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');

}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));