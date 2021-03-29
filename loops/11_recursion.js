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



// Example of recursion from exercises:

// Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

function reverseNumber(numP, resultArrayP = []) {
  if (numP !== 0) {
    let remainder = numP % 10;
    resultArrayP.push(remainder);
    numP = (numP - remainder) / 10;
    return reverseNumber(numP, resultArrayP);
  } else {
    return Number(resultArrayP.join(''));
  }
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1
