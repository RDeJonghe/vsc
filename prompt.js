let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));

/*
let first = prompt('What is your first name?');
let last = prompt('What is your last name?')
console.log(`Hello, ${first} ${last}!`);
*/