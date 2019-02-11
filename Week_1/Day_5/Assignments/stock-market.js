var stockMarket = [45, 24, 35, 31, 40, 38, 11];

function pairArray() {
  var pairedArray = [];
  for (i = 0; i < stockMarket.length; i++) {
    pairedArray.push(i);
  }
}

console.log(pairedArray);