//main function
var wrapLog = function (callback, name) {
  if (name == "volume") {
    return function(x, y, z) {
      console.log(name + "(" + x + ", " + y + ", " + z + ") => " + callback(x, y, z))
    }
  } else {
    return function(x, y) {
      console.log(name + "(" + x + ", " + y + ") => " + callback(x, y))
    }
  }
};

//callbacks for Area
var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6


//callbacks for Volume
var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24