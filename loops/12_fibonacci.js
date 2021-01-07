// Example of fibonacci recursion with function from loops chapter of Intro to JS book.

function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(2)); //1
console.log(fibonacci(3)); //2
console.log(fibonacci(4)); //3
console.log(fibonacci(5)); //5
console.log(fibonacci(6)); //8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21 so fib(6) + fib(7)
console.log(fibonacci(9)); // 34 so fib(8) + fib(7)
