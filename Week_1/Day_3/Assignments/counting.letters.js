function countLetters(string){
  var noSpaces = string.split(" ").join("").toLowerCase();
  var letters = noSpaces.split("");
  var uniqueCounterObj = {}
  for (var i = 0 ; i < letters.length ; i++){
    if (uniqueCounterObj[letters[i]] == undefined){
      uniqueCounterObj[letters[i]] = 1;
    } else {
      uniqueCounterObj[letters[i]] += 1;
    }
  } return uniqueCounterObj;
}