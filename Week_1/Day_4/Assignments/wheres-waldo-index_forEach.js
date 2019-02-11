//forEach method
//forEach(function(element, index, array))
function findWaldo(arr, found) {
  arr.forEach(function(word, i) { //redefine element as word
    if (word === "Waldo") {
      found(i);
      }
  })
};

// for loop
// function findWaldo(arr, found) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);
//     }
//   }
// }

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);