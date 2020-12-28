// RECURSION
// EXAMPLES AND PRACTICE FOR RECURSION

// 1. Make an example of a recursive function that doubles a number. Use an if statement so that there is a stopping condition.





function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5);


// Notes:
// Recursion are functions that call themselves
// Recursion is basically another way to create loops in JS
