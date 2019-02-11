var args = process.argv.splice(2);
var char = "";
var result = "";
for (var i = 0; i < args.length; i++) {
  char += args[i];
}
console.log(char)

//work backwards, take character and pull to string;

/* node reverse.js hello goodbye
olleh
eybdoog */
