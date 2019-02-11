// function sumToOne(n) {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     console.log(sum += i);
//   }
//   return sum;
// }

// console.log(sumToOne(4));

///////// Recursive
//Base Case: n = 1
//Pattern: sumToOne(n) = n + sumToOne(n-1)


function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));