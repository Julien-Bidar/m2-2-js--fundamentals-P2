// Exercise 10
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns true if every element of list is of length at least 5.
// Otherwise, it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function allLong(list) {
  let filtered = list.filter(element => {
    if(element.length > 4){
      return element;
    }
  });
  if(list.length === filtered.length){
    return true;
  } else {
    return false;
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = allLong;
