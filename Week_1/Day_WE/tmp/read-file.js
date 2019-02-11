var fs = require("fs");

var filePath = process.argv[2];
var fileData = "Testing asynchronous file write.\n";

fs.copyFile('input.txt', filePath, 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  console.log("File Copied!")
});

fs.readFile(filePath, 'utf-8', function (err, data) {
   console.log("Asynchronous read: " + data);
});
//cop the file



