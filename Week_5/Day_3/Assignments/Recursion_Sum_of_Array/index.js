
function sumItems(array) {
  let sum = 0

  array.forEach((item) => {
    if (Array.isArray(item)) {
      //if there is a nested array
      //add result from nested array into sums
      sum += sumItems(item)
    } else {
      //if not an array, just add
      sum += item
    }
  });
  return sum;
}


module.exports = sumItems;