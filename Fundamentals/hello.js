function sayHelloToConsole(name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

function returnSayHello(name) {
  return "Hello, " + name;
}
var greeting = returnSayHello('John');
console.log(greeting);