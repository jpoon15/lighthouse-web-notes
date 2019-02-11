function countLetters(string){
  var noSpaces = string.split(" ").join("").toLowerCase();
  var letters = noSpaces.split("");
  var uniqueCounterObj = {}
  for (var i = 0 ; i < letters.length ; i++){
    if (uniqueCounterObj[letters[i]] == undefined){
      uniqueCounterObj[letters[i]] = [i];
    } else {
      uniqueCounterObj[letters[i]].push(i);
    }
  } return uniqueCounterObj;
}

console.log(countLetters("hello"));
