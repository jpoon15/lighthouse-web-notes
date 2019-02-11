function isEven(num) {
  return num % 2 === 0;
}

var tenIsEven = isEven(10);
var elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);



function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10));

function isOdd(num) {
  return num % 2 !== 0;
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));