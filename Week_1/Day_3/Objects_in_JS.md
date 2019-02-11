# Objects in JS

## Objects

- Key-value pairs (dictionairies, hashes, hashmaps)
- Lists of Properties
- Associative arrays (Named indexes instead of numeric ones)
"Data, and the methods to act on that data" - according to Don

```javascript
"This is a string".length "This is a string".toLowerCase()
```

### Looking up data in an object

- . - Property lookup operator
- [] - Property lookup, but evaluated

### The dreaded this

In JavaScript, this is a keyword that can be used ONLY inside of functions, and it is defined when the function is run. JavaScript will automatically set it to be a reference to the object that called the function.

But Don, you might ask, how do I know which object called the function?

We use a trick called left of the dot to figure this out. We had an example in our lecture today of an object called me which had a function called sayHi. The code for sayHi was:

```javascript
sayHi: function() { console.log(this.name + " says, 'Hi!'"); }
```

See the this in there? Well, if I call me.sayHi() then what is left of the dot is me. Therefore, inside of the function, this is going to refer to the me object, and will be able to get the name property (if it is set, otherwise it's undefined).

We also talked about the difference between imperative and declarative programming.

### Imperative

Telling the computer HOW to do what you want it to do.
```javascript
for(var i = 0; i < 10; i++) {
  console.log(i);
}
```

### Declarative

Telling the computer WHAT to do
```javascript

var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

list.forEach(function(i) {
  console.log(i);
});
```

Last, but not least, we talked about LSD.

### LSD

- Logic
- Syntax
- Data

+ Logic - If I was doing this task as a human, are these the steps I would use to solve this problem?

+ Syntax - Did I use the correct language that the computer understands for the logical steps?

+ Data - Do I have access to the data I need, in the format I expect?

Here is the console output of what we did in class today: https://gist.github.com/donburks/0f6943ca69557257ecf9493289ff7b92