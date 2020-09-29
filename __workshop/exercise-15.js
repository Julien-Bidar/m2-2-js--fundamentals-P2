// Exercise 15
//
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.
//
// Hint: consider using .filter(), .indexOf() and .lastIndexOf()
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
let pushedArray = []
function filterNonUnique(arr) {
  arr.filter( element => {
    if(arr.indexOf(element) === arr.lastIndexOf(element)){
      pushedArray.push(element);
    }
  });
  return pushedArray;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = filterNonUnique;
