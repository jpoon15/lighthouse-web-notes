/*
var calculateChange = function(total, cash) {
 var changeType = [
  {name: "twentyDollars",  value: 2000},
  {name: "tenDollars",     value: 1000},
  {name: "fiveDollars",    value: 500},
  {name: "twoDollars",     value: 200},
  {name: "oneDollar",      value: 100},
  {name: "Quarter",        value: 25},
  {name: "Dime",           value: 10},
  {name: "Nickel",         value: 5},
  {name: "Penny",          value: 1}
  ]

 var change = cash - total;
 var result = [];
 var i = change

*/


var calculateChange = function(total, cash) {
   var change = (cash - total);
   var cashTrack = {twentyDollar:0, tenDollar:0, fiveDollar:0, twoDollar:0, oneDollar:0, quarter:0, dime:0, nickel:0, penny:0 };

  var i = change;

  while (i > 0) {
    if (i - 2000 >= 0) {
      cashTrack.twentyDollar += 1;
      i -= 2000;
    }
    else if (i - 1000 >= 0) {
      cashTrack.tenDollar += 1;
      i -= 1000;
    }
    else if (i - 500 >= 0) {
      cashTrack.fiveDollar += 1;
      i -= 500;
    }
    else if (i - 200 >= 0) {
      cashTrack.twoDollar += 1;
      i -= 200;
    }
    else if (i - 100 >= 0) {
      cashTrack.oneDollar += 1;
      i -= 100;
    }
    else if (i - 25 >= 0) {
      cashTrack.quarter += 1;
      i -= 25;
    }
    else if (i - 10 >= 0) {
      cashTrack.dime += 1;
      i -= 10;
    }
    else if (i - 5 >= 0) {
      cashTrack.nickel += 1;
      i -= 5;
    }
    else if (i - 1 >= 0) {
      cashTrack.penny += 1;
      i -= 1;
    }
    else if (i - 0.9 >= 0) {
      cashTrack.penny += 1;
      i -= 0.9;
    }
    else {
      break;
    }
   }
    if (cashTrack.twentyDollar === 0){
      delete cashTrack.twentyDollar;
    }
    if (cashTrack.tenDollar === 0){
      delete cashTrack.tenDollar;
    }
    if (cashTrack.fiveDollar === 0){
      delete cashTrack.fiveDollar;
    }
    if (cashTrack.twoDollar === 0){
      delete cashTrack.twoDollar;
    }
    if (cashTrack.oneDollar === 0){
      delete cashTrack.oneDollar;
    }
    if (cashTrack.quarter === 0){
      delete cashTrack.quarter;
    }
    if (cashTrack.dime === 0){
      delete cashTrack.dime;
    }
    if (cashTrack.nickel === 0){
      delete cashTrack.nickel;
    }
    if (cashTrack.penny === 0){
     delete cashTrack.penny;
    }
   return cashTrack;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));