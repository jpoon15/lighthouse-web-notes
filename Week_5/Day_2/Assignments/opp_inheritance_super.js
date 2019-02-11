class Person {
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  bio() {
    return (`My name is ${this.name}, my email is ${this.email} and here's my quirky fact: ${this.quirkyFact}`);
  }
}


class Student extends Person {

  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber) ${super.bio()}`
  }

  enroll(cohort) {
    this.cohort = cohort;
  }

  enrolledin() {
     console.log(`I'm currently enrolled for the ${this.cohort} cohort`);
  }
}

class Mentor extends Person {

  logShift() {
    console.log(`${this.name} is currently ${this.onShift ? "" : "not "}on shift`);
  }

  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}


let student1 = new Student("Jenny", "I'm afraid of butterflies", "sample@email.com");
console.log("student.bio :", student1.bio());
student1.enroll("Sept 24");
student1.enrolledin();



let mentor1 = new Mentor("Menta", "I love burgers", "sample@email.com");
console.log("mentor.bio: ", mentor1.bio())

mentor1.logShift();
mentor1.goOnShift();
mentor1.logShift();

