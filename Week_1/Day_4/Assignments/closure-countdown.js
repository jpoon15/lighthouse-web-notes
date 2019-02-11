//below is the closure()
//function(x) returns a new function therefore closure
var countdownGenerator = function (x) {
  /* your code here */
  var counter = x;

/*
if functions are named, you need to return the function.
or empty array/string

  function Testing() {
    //if statements needs to happen first
    //otherwise x decreases first
    if (x === 3 || x === 2 || x === 1) {
      console.log("T-minus " + x + "...")
    } else if (x === 0) {
      console.log("Blast Off");
    } else {
      console.log("Rockets already gone, bub!")
    } x--;
  }; return Testing;

  if using anonymous functions, can just return at the beginning.
  If function has parameters inside, you need to define function outside scope
*/

  return function() {
    //if statements needs to happen first
    //otherwise x decreases first
    if (x === 3 || x === 2 || x === 1) {
      console.log("T-minus " + x + "...")
    } else if (x === 0) {
      console.log("Blast Off");
    } else {
      console.log("Rockets already gone, bub!")
    } x--;
  };

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!