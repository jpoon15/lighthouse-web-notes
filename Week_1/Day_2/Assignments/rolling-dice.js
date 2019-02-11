var numberOfRolls = process.argv.splice(2);
var output = [];

for(var i = 0; i < numberOfRolls[0]; i++){
  output.push(Math.floor(Math.random() * (6-0) + 1));
}

var result = output.join(', ')

console.log("Rolled " + numberOfRolls[0] + " dice: " + result)

