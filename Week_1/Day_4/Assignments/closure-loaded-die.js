//THIS IS THE CLOSURE
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var counter = 0;

  return function() { //this is a closure because of internal function

    return list[counter++];
  }
}

var rollLoadedDie = makeLoadedDie(); //RollloadedDie is reference to the Closure() and retaining values

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1


var anotherDie = makeLoadedDie(); //AnotherDie() a new reference to the closure() and retaining values
console.log(anotherDie());
console.log(anotherDie());
console.log(anotherDie());