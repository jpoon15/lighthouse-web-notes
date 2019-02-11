//your array
var words = ["ground", "control", "to", "major", "tom"];

//main function that calls on callbacks
function myNewArray(words, cb) {
  var newArray = [];
  for(var i = 0; i < words.length; i++) {
    newArray.push(cb(words[i], i, words))
  }
  return newArray;
};

//these are the callbacks

function wordLength(word) {
  return word.length;
};

function upperCaseWord(word) {
  return word.toUpperCase();
};

function reverseWord(word) {
  return word.split('').reverse().join('');
};

//actual codes, everything else upon only defined things.
console.log(myNewArray(words, reverseWord));

