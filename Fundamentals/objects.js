// Exercise 1 - creating an object with properties
var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
};

console.log(pizza);


// Exercise 2 - accessing object properties

var food = {
  types: 'only pizza'
};

console.log(food.types);


// Functions
function eat (food) {
  return food + ' tasted really good.';
}

console.log(eat('bananas'))


// Function arguements
function math (firstArg, secondArg, thirdArg) {
  return secondArg * thirdArg + firstArg;
}

console.log(math(53, 61, 67));


/*Scope

EXAMPLE:

var a = 4;    // a is a global variable, it can be accessed by the functions below

     function foo() {
         var b = a * 3;    // b cannot be accessed outside foo function, but can be accessed by functions
                         // defined inside foo

         function bar(c) {
         var b = 2;  // another `b` variable is created inside bar function scope
                     // the changes to this new `b` variable don't affect the old `b` variable
         console.log( a, b, c );
         }

         bar(b * 4);
     }

     foo(); // 4, 2, 48
*/

var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
             console.log("a: "+a+", b: "+b+", c: "+c);

             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
              })();
        })();
    })();
