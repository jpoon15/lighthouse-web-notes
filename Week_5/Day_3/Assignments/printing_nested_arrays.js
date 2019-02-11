//RECURSIVE
function printItems(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}


//ITERATION
//more complicated and code not as easy to understand
//in this scenario, recursive is a better option
function printItems(array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
}

// const array = ["😎", ["💩", "🤗"], "😼", "😂"];
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];


printItems(array);


/*
Main Problem:

printItems(["😎", ["💩", "🤗"], "😼", "😂"])

Sub Problem:

printItems(["💩", "🤗"])

The recursive case is when item is an array. We call the function again with that array.
The base case is when the item is not an array. We just log it out.
*/