# Node API demo

We built an API client today in class. In a random poll, we selected the [CoinCap API](https://github.com/CoinCapDev/CoinCap.io) which serves up JSON data about cryptocurrencies.

We reviewed the documentation and then wrote ourselves some pseudocode:

node crypto.js

I need to make a request to the right endpoint
When that request returns a response, it's an array
Take the first five elements of the array
For each object in the new array:
  - Output the long name
  - Output the short name
  - Output the price

Then we started writing the code, and we brought in the [request](https://www.npmjs.com/package/request) NPM module for doing so.

Here is the first version we wrote:
```javascript
var request = require('request');

var url = 'http://coincap.io/front';

request(url, function(err, response, body) {
    var allData = JSON.parse(body);
    var coinData = allData.slice(0, 5); //Get the first 5 entries

    coinData.forEach(function(coin) {
        console.log("COIN:  " + coin.long + " (" + coin.short + ")");
        console.log("PRICE: $" + coin.price.toFixed(2));
    });
});
```
We then added functionality after doing a little bit of refactoring, and this was our pseudocode:

node crypto.js <short>

I need to make a request to the /page/:coin
When that request returns a response, it's an object.

From that object:
  - Output the display name
  - Output the short name
  - Output the USD price
  - Output the supply

And the FINAL version of the code we ended up with is [here](https://gist.github.com/donburks/1410952a6e1fa598789501e54fa813ef).

I would still take it further and take advantage of the request config object, and pass the URL and json: true in the config, so that request auto-parses my JSON for me. I would also improve my error handling to make it a true HTTP client and have the handleResponse function check the status code, but as we saw in the DevTools, this API just gives us 200 OK for nearly everything.