let sum = 0

function sumItems(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      console.log("item", item)
      sumItems(item)
    } else {
      console.log("loop", sum += item);
    }
  })
}
sumItems([[[5], [[[4]]], [[3], 2]], 1, []])