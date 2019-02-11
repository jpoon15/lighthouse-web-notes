var fs = require("fs");

// Create a readable stream (existing file with stuff inside)
var readerStream = fs.createReadStream('streams-input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('piping-the-streams-output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");