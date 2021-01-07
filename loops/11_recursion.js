// RECURSION
// EXAMPLES AND PRACTICE FOR RECURSION

// 1. Make an example of a recursive function that doubles a number. Use an if statement so that there is a stopping condition.

// function double(num) {
//   console.log(num);
//   if (num < 50) {
//     double(num * 2);
//   }
//   return num;
// }
// double(5);

// Example of recursive function adding to a string.

function longString(str) {
  console.log(str);
  if (str.length < 100) {
    longString((str += " I'm the renegade master "));
  }
  return str;
}

longString('Back once again');

/*
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5);
*/

// Notes:
// Recursion are functions that call themselves
// Recursion is basically another way to create loops in JS
