var repeatNumbers = function(data) {
  var outputString = "";

/* Since this is an array within an array, you must create a loop
for outer array*/

  for (var i = 0; i < data.length; i++) {

/*define the inner array values*/
    var repeatNum = data[i][0];
    var repeatQuant = data [i][1];

/* Now create loop for the inner array using defined values*/
    for (var j = 0; j < repeatQuant; j++) {
      outputString += repeatNum;
    } if (j = 1 && i < data.length - 1) {
        outputString += ", ";
      }
  } return outputString
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


/*if statement:
If on last index of inner array and you are second last array of
the outer array, put in a common between repeated numbers. Once
you reach last index of outer array (i = data.length) - stop.
j = 1 ; last position OF array element
data.length - 1; function will not run on the LAST array element of the data*/