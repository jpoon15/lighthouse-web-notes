class Vampire {

  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire)
    vampire.creator = this;
  }

  get totalDescendents() {
    let totalVampire = 0 //counter

    //loop through offsprings
    for (let offspring of this.offspring) {
      console.log(totalVampire += offspring.totalDescendents + 1);
    }
    return totalVampire;
    }


}

rootVampire = new Vampire("root");

offspring1 = new Vampire("a");
offspring2 = new Vampire("b");
offspring3 = new Vampire("c");
offspring4 = new Vampire("d");
offspring5 = new Vampire("e");
offspring6 = new Vampire("f");
offspring7 = new Vampire("g");
offspring8 = new Vampire("h");

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);


rootVampire.totalDescendents
