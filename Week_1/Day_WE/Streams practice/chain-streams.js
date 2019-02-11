var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('streams-input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('stream-input.txt.gz'));

console.log("File Compressed.");