/*
Write a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/


/* Using switch Statement
function loopyLighthouse(start, end) {
for (var i = start; i <= end; i++){
  switch (true) {

    case (i % 3 === 0 && i % 4 === 0):
      console.log("LoopyLightouse");
      break;

    case (i % 3 === 0):
      console.log("Loopy");
      break;

    case (i % 4 === 0):
      console.log("Lighthouse");
      break;

    default:
      console.log(i);
  }
}
}
console.log(loopyLighthouse(100, 200)); */

// Using If Else Statement
var mathNumber

for (var i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    mathNumber = "LoopyLighthouse";
  } else if (i % 3 === 0) {
    mathNumber = "Loopy";
  } else if (i % 4 === 0) {
    mathNumber = "Lighthouse";
  } else {
    mathNumber = i;
  }
  console.log(mathNumber);
}
