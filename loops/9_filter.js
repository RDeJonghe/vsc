// .filter() another iterating method for arrays, like .forEach() and .map()
// .filter() doesn't mutate the caller
// .filter() will return everything with a truthy value
// Can do these with arrow syntax, but having difficulty with reg syntax, just like .map()

// Example from book:
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
numbers.filter(num => num > 4)
*/
//=[ 5, 6, 7, 8, 9, 10 ]

//> numbers
//= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]

// DO THE EXAMPLE FROM THE BOOK, USE .FILTER TO RETURN ALL NUMBERS THAT ARE GREATER THAN A CERTAIN NUMBER
// ALSO CAN DO EXAMPLE WHERE YOU RETURN ALL EVEN NUMBERS... good example because if it's "0" it's falsy,
// Have to use ! I think

let nums = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
];

// Answers:
// let evenNums = nums.filter((element) => !(element % 2)); // need not operator to get to even numbers
// let oddNums = nums.filter((element) => element % 2);

// Do an example filtering nums greater than 50
let moreNums = [
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100
];

// Answer:
// let largeNums = moreNums.filter((element) => element > 50);

// console.log(largeNums);

// do an example with strings, return all with a string length greater than a certain number

let xmasThings = [
  'Santa',
  'reindeer',
  'stockings',
  'tree',
  'ornaments',
  'elves',
  'snow'
];

// Answer:
// let newArr = xmasThings.filter((element) => element.length > 6);
// console.log(newArr);

// use .filter() to show exam scores higher than 80

const EXAM_SCORES = [
  67,
  87,
  78,
  95,
  68,
  93,
  85
];

let lowScores = EXAM_SCORES.filter(function(el) {
  return el < 80;
});
console.log(lowScores);

// Example of exercise from book. Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function. HINT: You put two returns. A return within another return.

let things = [
  1,
  'a',
  '1',
  3,
  NaN,
  3.1415,
  -4,
  null,
  false
];

// answer:
/*
function findIntegers(array) {
  return array.filter(function(el) {
    return Number.isInteger(el);
  });
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
*/
