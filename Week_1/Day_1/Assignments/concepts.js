/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);
function joinList(element) {
  var result = "";
  for (var i = 0; i < element.length; i++) {
    if (i == element.length - 1) {
      result += element[i]
    } else {
    result += element[i] + ", ";
    }
  } return result;
}

// Write your code here...

console.log("Today I learned about " + concepts + ".");

/*
var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
 // a custom function written by you (you must define it too!)
var concepts = "";
for (var i = 0; i < conceptList.length; i++) {
  if (i = conceptList.length) {
    concepts += conceptList
  } else {
concepts += conceptList[i] + " ,";
}
};
*/