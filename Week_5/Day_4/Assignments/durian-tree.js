class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  //Add employee to subordinate array of its boss and sets its boss
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  //Returns the number of subordinates an employee has
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  //Return the number of people in between an employee and the CEO
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
//Returns true if two employees share the same boss
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {

    let employees = []; // array to hold employeee that makes over specific amount

    if (this.salary > amount) {
      employees.push(this); // push into array if meet conditions
    }

    for (const subordinate of this.subordinates) {
      //Call this method on all of the current employee's subordinates
      //and combine their results with the current results.

      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }

  get totalEmployees() {
    let totalEmployees = 0;

    if ((this.subordinates).length === 0 || this.subordinates.length > 0) {
      totalEmployees += 1
    }
      for (const subordinate of this.subordinates) {
        console.log(totalEmployees += subordinate.totalEmployees)

      }
    return totalEmployees
  }

}

const ada      = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);
const simone   = new Employee("Simone", "Staff", 100000)
const ali      = new Employee("Ali", "Staff", 100000)
const florida  = new Employee("Florida", "Staff", 100000)
const david    = new Employee("David", "Staff", 100000)
const brian    = new Employee("Brian", "Staff", 100000)
const karla    = new Employee("Karla", "Staff", 100000)

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

let wealthyEmployees = ada.employeesThatMakeOver(418401);
// console.log("Wealthy Employees", wealthyEmployees)

// console.log("craig.boss:", craig.boss);
// console.log("craig.subs:", craig.numberOfSubordinates);
// console.log("craig.numofppltoCEO", craig.numberOfPeopleToCEO);
console.log("ada.TotalEmployee", ada.totalEmployees);
// console.log("craig", craig)
// console.log("ali", ali)
// console.log("ali", ali.totalEmployees)
console.log("craig.TotalEmployee", craig.totalEmployees);
console.log("phil.totalEmployees", phil.totalEmployees)