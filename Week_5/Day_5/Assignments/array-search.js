function search(array, item) {
  let min = 0; // 1
  let max = array.length - 1; // 1

  while (true) { // lg n
    const endIndex = min + max; // lg n
    const middleDecimal = endIndex/2.0; // lg n
    const middleIndex = Math.floor(middleDecimal); // lg n

    const currentItem = array[middleIndex]; // lg n

    if (currentItem === item) { // lg n
      return middleIndex;
    } else if (currentItem < item) { // lg n
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1; // lg n
    }

    if (min > max) { // lg n
      return null; // 1
    }
  }


search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);


/*
total of 3 + (9 * log 10) operations,
which is 3 + (9 * 4) or 39 operations.
So in this case, it's going to have a running time of 39.
*/