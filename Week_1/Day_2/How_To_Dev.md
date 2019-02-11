#How To Dev

##Mindsets

##Craft Mindset

Skill is built from
- Information
- Context
- Practice

##Design Mindset

- Evaluate the situation
- Come up with a solution
- Implement (or attempt to implement) a solution
- Evaluate our efforts (non-judgmental acceptance)
- GOTO step 1

##Convergence & Divergence

- Convergence is: I want to build a birdhouse. What do I do * Start with a fuzzy idea * Find ways to get more specific * You end up with a very specific design and plan of action * Execute

- Divergence is: I have bricks. * Build a series of escalating houses for escalating animals. * Build a fence. * Build a castle. * Hipster paperweight * Art project * Smash a window * Counterweight on a small trebuchet that throws bricks at windows. * Okay, people keep wanting me to take the bricks and build something. I should probably learn how to lay bricks.

##Dev Process

- Requirements
- Plan
- Execute
- Debug
- Refactor
- Requirements

node sum.js 10 25 -> 35
node sum.js 10 15 -> 25
node sum.js 0 15 -> 15
node sum.js -5 15 -> 10
node sum.js -5 asdf -> asdf is not a number
node sum.js -5 -> missing an argument
node sum.js -5 10 13 -> too many arguments
Plan

get command line args
yell at people if there is less than two numbers
yell at people if there is more than two numbers
yell at people if there is non-numeric data
convert two number inputs to numbers
add them up
console.log them.
Execute
```javascript
// get command line args
const numberArguments = process.argv.slice(2);
// yell at people if there is less than two numbers
if(numberArguments.length < 2){
  console.log('Not Enough Numbers');
} else if(numberArguments.length > 2){
  // yell at people if there is more than two numbers

  console.log('Too Many Numbers');
} else {
  console.log(numberArguments[0] + numberArguments[1]);
}

// node.js adding-numbers 1 2
// 12
Debug

// get command line args
var numberArguments = process.argv.slice(2);
// yell at people if there is less than two numbers
if(numberArguments.length < 2){
  console.log('Not Enough Numbers');
} else if(numberArguments.length > 2){
  // yell at people if there is more than two numbers

  console.log('Too Many Numbers');
} else {
  var firstNumberArgument = numberArguments[0];
  var firstNumberArgumentConvertedToNumber = Number(firstNumberArgument);
  var secondNumberArgument = numberArguments[1];
  var secondNumberArgumentConvertedToNumber = Number(secondNumberArgument);
  var totalOfFirstNumberArgumentConvertedToNumberAndSecondNumberArgumentConvertedToNumber = firstNumberArgumentConvertedToNumber + secondNumberArgumentConvertedToNumber;
  console.log(totalOfFirstNumberArgumentConvertedToNumberAndSecondNumberArgumentConvertedToNumber);
  // console.log('firstNumberArgument', firstNumberArgument, typeof firstNumberArgument);
  // console.log('firstNumberArgumentConvertedToNumber', firstNumberArgumentConvertedToNumber, typeof firstNumberArgumentConvertedToNumber);
  // console.log(numberArguments[0] + numberArguments[1]);
}

// yell at people if there is non-numeric data
// convert two number inputs to numbers
// add them up
// console.log them.
Refactor

General Code Cleanup

// get command line args
var numberArguments = process.argv.slice(2);
// yell at people if there is less than two numbers
if(numberArguments.length < 2){
  console.log('Not Enough Numbers');
} else if(numberArguments.length > 2){
  // yell at people if there is more than two numbers

  console.log('Too Many Numbers');
} else {
  // convert two number inputs to numbers
  var firstArg = Number(numberArguments[0]);
  var secondArg = Number(numberArguments[1]);

  // yell at people if there is non-numeric data
  if(isNaN(firstArg) || isNaN(secondArg)){
    console.log('You have non-numeric input.  You do know what numbers look like, right?  They did cover that at whatever educational institute you attended, yeah?');
  } else {
    // add them up
    // console.log them.
    console.log(firstArg + secondArg);
  }
}


Turn Logic into a function

function addNumbersFromCommandLine(numberArguments){
  // yell at people if there is less than two numbers
  if(numberArguments.length < 2){
    return 'Not Enough Numbers';
  } else if(numberArguments.length > 2){
    // yell at people if there is more than two numbers

    return 'Too Many Numbers';
  } else {
    // convert two number inputs to numbers
    var firstArg = Number(numberArguments[0]);
    var secondArg = Number(numberArguments[1]);

    // yell at people if there is non-numeric data
    if(isNaN(firstArg) || isNaN(secondArg)){
      return 'You have non-numeric input.  You do know what numbers look like, right?  They did cover that at whatever educational institute you attended, yeah?';
    } else {
      // add them up
      // console.log them.
      return firstArg + secondArg;
    }
  }
}

// From Command Line Input
console.log(addNumbersFromCommandLine(process.argv.slice(2)));

// Test Cases
console.log("['1']", addNumbersFromCommandLine(['1']));
console.log("[]", addNumbersFromCommandLine([]));
console.log("['1', '2', '3']", addNumbersFromCommandLine(['1', '2', '3']));
console.log("['1', '2']", addNumbersFromCommandLine(['1', '2']));
console.log("['1', '-5.5']", addNumbersFromCommandLine(['1', '-5.5']));
console.log("['1', 'asdf']", addNumbersFromCommandLine(['1', 'asdf']));
Gist
```
Joel Shinness

