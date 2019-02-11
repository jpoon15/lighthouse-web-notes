
class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  set sizes(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
  }

  getSize() {
    return this.size;
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}


/////////EXAMPLE


// DRIVER CODE
const pizza = new Pizza();
// pizza.setSize('s');
// pizza.getSize();
// pizza.getPrice();
console.log("org price", pizza.price)
pizza.addTopping("pepperoni")
// pizza.getPrice();
console.log("price $:", pizza.price);
pizza.sizes = 'm'
console.log("size:", pizza.getSize());