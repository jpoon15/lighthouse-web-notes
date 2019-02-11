console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

/*
range = start and end
multiples = multiples of 2, 5 and 2*5
words = multiples of 2 - Batty; 5 - Beacon, both - BattyBeacon

*/

function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    var number = multiples[0] * multiples[1];
    var result;

    switch (true) {
      case (i % number === 0):
      console.log(words.join(""))
      break;

      case (i % multiples[0] === 0):
      console.log(words[0]);
      break;

      case (i % multiples[1] === 0):
      console.log(words[1]);
      break;

      default:
      console.log(i);
      break;
    }
  }
}

