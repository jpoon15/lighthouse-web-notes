class Pizza {
  constructor() {
    this._toppings = [];
  }

  addTopping(topping) {
    if (this._toppings.indexOf(topping) > -1) {
      console.log("this topping already exists")
      return false;
    }
    this._toppings.push(topping);
      console.log("ingredient added")
    return true;
  }
}

let pizza = new Pizza()

pizza.addTopping("cheese");
pizza.addTopping("mushrooms");
pizza.addTopping("mushrooms");
pizza._toppings.push("pineapple");


console.log(pizza)