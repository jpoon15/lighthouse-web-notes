//if statements for Boolean conditions
var raining = false;
var cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
//conditional if statements
var temperature = 10;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// Logical Operators
// && - logical AND, || - logical OR and ! - logical NOT

var temp = 20;

if (temp < -40 || temp > 40) {
  console.log("Maybe going outside isn't such a good idea…");
} else {
console.log("It's fine to go outside");
}

//Another example
//! = opposite; raining is true, !raining is false.
if (!raining) {
  console.log("Not Raining, leave umbrella home");
}