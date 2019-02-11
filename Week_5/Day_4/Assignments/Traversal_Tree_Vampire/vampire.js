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

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberofVampire = 0
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberofVampire++;
    }
    return numberofVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal);

  }
  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    //base
    if(name === this.name) {
      return this;
    }
    //traversal through offspring to find name
    for (let vampire of this.offspring) {
      let searchVampire = vampire.vampireWithName(name)

      if (searchVampire) {
        return searchVampire;
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalVampire = 0 //counter

    //loop through offsprings
    for (let offspring of this.offspring) {
      totalVampire += offspring.totalDescendents + 1;
    }
    return totalVampire;
    }


  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialVampire = [];

    if (this.yearConverted > 1980) {
      millenialVampire.push(this);
    }
    for (let offspring of this.offspring) {
      //concat all arrays into the result array
      millenialVampire = millenialVampire.concat(offspring.allMillennialVampires);
    }

    return millenialVampire;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

