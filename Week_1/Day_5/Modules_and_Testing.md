#Modules and Testing

###Separating out code
```javascript

var students = [
  {id: 1, name: 'Miche'},
  {id: 2, name: 'Layne'},
  {id: 3, name: 'Bassem'}
]

function findStudentById(id){
  for(var student of students){
    if(student.id === id){
      return student;
    }
  }
  return undefined;
}
var students = [
  {id: 1, name: 'Miche'},
  {id: 2, name: 'Layne'},
  {id: 3, name: 'Bassem'}
]


function findElementByTestFn(items, testFn){
  for(var item of items){
    if(testFn(item)){
      return item;
    }
  }
  return undefined;
}

function findStudentById(id){
  return findElementByTestFn(students, function(student){
    return student.id === id;
  });
}
```
###require && module.exports


Require and module.exports are mechanisms in Node for sharing code across files.

[Gist](https://mandrillapp.com/track/click/30244704/gist.github.com?p=eyJzIjoiR1ptSHJpZVdFSTR1aEhLcDZGMFlyQk1wdTNzIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dpc3QuZ2l0aHViLmNvbVxcXC9Kb2VsQ29kZXNcXFwvMzU3OTc1M2ExZGQ2YmE0M2YzN2NlNDc3NzZlMGVlMjdcIixcImlkXCI6XCI1YjA0YmVmYTUyMGQ0ZmVmYjY5Y2E4YmExYmZlYWEwMFwiLFwidXJsX2lkc1wiOltcImY0ZTBlZTYyOWEwNjAwYmIzYTViZmMxYmZkYjczYmM4MGQ3MWEwZmRcIl19In0)

###npm && package.json

NPM is a command line utility and an online repository for managing projects and dependencies in Node. We can use npm init -y to create a package.json, which will list all the project dependencies. When you clone or otherwise download a project that has a package.json you can use npm install to get all the dependencies.

[Chalk demo without package.json](https://mandrillapp.com/track/click/30244704/gist.github.com?p=eyJzIjoiSUJ6SUtmQm9BOEZRRkRSMFJfQ1M3ZmJLQjlvIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dpc3QuZ2l0aHViLmNvbVxcXC9Kb2VsQ29kZXNcXFwvOTAyNzkzMjg1MjE1MjlmYjY3ZWZhZTNlMjFlYjQ0YjBcIixcImlkXCI6XCI1YjA0YmVmYTUyMGQ0ZmVmYjY5Y2E4YmExYmZlYWEwMFwiLFwidXJsX2lkc1wiOltcIjFmZTAyODA3YTY5OWM4MDIyMDFlOTIwODNhOGE5NmMxY2M1MDQ0ZjdcIl19In0)
[Chalk demo with package.json](https://mandrillapp.com/track/click/30244704/gist.github.com?p=eyJzIjoiQ3gtS3kzbXZXWlhqemhzRzlvb0NJSVk1TzQ0IiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dpc3QuZ2l0aHViLmNvbVxcXC9Kb2VsQ29kZXNcXFwvNmU4ZDUzNzUzMTA3ZWM5M2JmMzQ1NmY3MDRmYzdhOGFcIixcImlkXCI6XCI1YjA0YmVmYTUyMGQ0ZmVmYjY5Y2E4YmExYmZlYWEwMFwiLFwidXJsX2lkc1wiOltcIjg5YzkwYWI3YjhlN2E4N2I3NjNlMGIzMDQxNjI1OTNjNjg2NDgwNjJcIl19In0)

###Testing with Mocha

[Testing Demo](https://mandrillapp.com/track/click/30244704/gist.github.com?p=eyJzIjoiSDh5OERTTHY3WFFuMVlZS2tuWmN6dkdOaTlBIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dpc3QuZ2l0aHViLmNvbVxcXC9Kb2VsQ29kZXNcXFwvZjE2NTQ0YTcwYTg2MDUzNWNiYWE1ZjYxZGNiZTA5YmVcIixcImlkXCI6XCI1YjA0YmVmYTUyMGQ0ZmVmYjY5Y2E4YmExYmZlYWEwMFwiLFwidXJsX2lkc1wiOltcImE1ODg0MzUzYTU5NjVlNTU5MGZhZjQ3ZjIwYTEzMjNhZjQ2NDFkZWRcIl19In0)

Joel Shinness

