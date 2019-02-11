var talkingCalendar = function(date) {
monthArray = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dateOutput = new Date(date); //creating date object with date data
var year = dateOutput.getFullYear(); //get year
var month = monthArray[dateOutput.getMonth(date)]; //get months in words
var day = dateOutput.getDate(); //get day

var i = day % 10;

if (i === 1 && day !== 11) {
  return month + " " + day + "st, " + year;
} else if (i === 2 && day !== 12) {
  return month + " " + day + "nd, " + year;
} else if (i === 3 && day !== 13) {
  return month + " " + day + "rd, " + year;
} else {
  return month + " " + day + "th, " + year;
}
};


console.log(talkingCalendar("2017/12/01")); //December 2nd, 2017
console.log(talkingCalendar("2007/11/23"));
console.log(talkingCalendar("1987/08/24"));


// new Date method: year, month, day, hr, min, sec
