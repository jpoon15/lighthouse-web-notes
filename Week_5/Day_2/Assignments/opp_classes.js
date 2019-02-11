/* The class pattern allows us to DRY up our code
by defining the default state and behaviour
for all pizzas in one place instead.

*/

class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
/////////EXAMPLE

let pizza = new Pizza('large', 'thin');
console.log("pizza", pizza)

/*
let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese"]
}
*/

pizza.addTopping("mushrooms");
console.log("pizza", pizza)

/*
let pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese", "mushroom"]
}
*/

// Class helps define default state and behaviour in one place
//Equivalent to:


let pizza1 = new Pizza("small", "thick");
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log("pizza1.topping", pizza1); // ["cheese", "mushrooms", "peppers", "30"]


// const pizza1 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }


let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log("pizza2.toppings", pizza2.toppings); // ["cheese", "more cheese"]


// const pizza2 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }