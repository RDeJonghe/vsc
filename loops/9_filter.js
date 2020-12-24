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

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums = nums.filter(element => !(element % 2)); // need not operator to get to even numbers
let oddNums = nums.filter(element => element % 2);

console.log(nums);
console.log(evenNums);
console.log(oddNums);


let moreNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let largeNums = moreNums.filter(element => element > 50);

console.log(largeNums);

// do an example with strings, return all with a string length greater than a certain number

let xmasThings = ['Santa', 'reindeer', 'stockings', 'tree', 'ornaments', 'elves', 'snow'];

let newArr = xmasThings.filter(element => element.length > 6);
console.log(newArr);


// use .filter() to show exam scores higher than 80

const EXAM_SCORES = [67, 87, 78, 95 ,68, 93, 85];



