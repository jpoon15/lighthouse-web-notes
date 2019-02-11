var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
//sort()
//need to defines a function for action
//you need identify two parameters if you're comparing
students.sort(function(a,b){
  var x = a.name;
  var y = b.name;
  if (x < y) {
    return -1
  } else if (x > y) {
    return 1
  } else if (x == y) {
    var m = a.age;
    var n = b.age;
    if (m < y) {
      return -1
    } else {
      return 1
    }
  }
  // return x < y ? -1 : x > y ? 1 : 0;
});

console.log(students);