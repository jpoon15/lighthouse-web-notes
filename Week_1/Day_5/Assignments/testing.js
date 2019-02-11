function round(number) {
  return Math.round(number * 100) / 100;
}

function stdev(arr) {
  var n = arr.length;
  var sumArr = arr.reduce(function(a, b) { return a + b; }, 0);
  var avgNum = sumArr / n;
  var count = 0;

  for (i = 0; i < n; i++) {
    var x = Math.pow((arr[i] - avgNum), 2);
    count += x;
  }
  var result = Math.sqrt(count / n);
  return round(result);
}