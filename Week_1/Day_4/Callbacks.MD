#Callbacks

A scheduled response to an event

Always represented as a function

```javascript
function doStuffWithNumbers(x, y, callback) {
  var result = callback(x, y);

  return result;
}

doStuffWithNumbers(4, 8, function(a, b) {
  return a * b;
});
```

We then did some examples using the declarative functions JS provides on arrays. We re-implemented forEach, map, and find.

The code for those is [here](https://mandrillapp.com/track/click/30244704/gist.github.com?p=eyJzIjoiQlVETHBaWDBkRTlTaXBCcHM1cDEzNkRGYTNFIiwidiI6MSwicCI6IntcInVcIjozMDI0NDcwNCxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2dpc3QuZ2l0aHViLmNvbVxcXC9iOGI0MjBlNTQ5MWQyYWQyYTAyOTc4MDNhZjA5N2MyMVwiLFwiaWRcIjpcIjk4MGZjM2E2OTk4YTQ5ZjZiNjg4OTU5YzVhYTBkMTcyXCIsXCJ1cmxfaWRzXCI6W1wiNTVhNDBlM2ExNWFmYzk4ODc1NmQ1ZjdiZmVkYjdiNDk5YmY2ZmEyN1wiXX0ifQ).

We also talked about some philosophy behind using functions.

```javascript
//Function declaration
function a() {
  console.log("a");
}

b(); //This will fail

//Function expression
var b = function() {
  console.log("b");
};

var c = "cat";

a()
b()
c(); //Whomp whomp, not a function
Side effects

//Side effects
function a() {
  return "a";
}

var result = a();
console.log(result);
```

Always better to have your function do the work and return the results. Logging is a side-effect.


