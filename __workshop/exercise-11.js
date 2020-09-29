// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  let sum = 0
  let average = grades.map(element => {
    sum += element ;
  });
  let result = sum/grades.length;
  return Math.round(result);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
