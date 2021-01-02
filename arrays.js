// Practice for array methods and properties
// eventually figure out how to use some of these moving backward with neg. numbers

// array literals are arrays made with []

let seinfeld = [
  'Jerry',
  'Elaine',
  'Kramer',
  'George',
  'Newman',
  'J. Peterman',
  'Frank Costanza',
  'David Puddy',
  'Uncle Leo'
];

let curbYourEnthusiasm = [
  'Larry',
  'Jeff',
  'Funkhouser',
  'Susan',
  'Leon',
  'Cheryl'
];

// .length looks like 1 of 2 properties for arrays. shows how many elements in an array

// Array.isArray - note need Array first and capitalization, says true or false if it is array

// .concat() - takes multiple arrays and merges into one, doesn't change existing arrays, have
// to make new one

// .includes() - checks to see if the array has the value and then returns true or false

// .indexOf() - checks and returns index of element in an array

// .join() - takes all the elements of an array and turns it into a string, can include what the
// seperator is. Does not mutate original string.

// .pop() - mutates the array and removes last element. Good idea to save removed element in variable

// .push() - mutates the array and adds to end

// .reverse() - mutates array, reverses order

// .shift() - mutates array, removes first item

// .unshift() - mutates array, adds a new item in for first element at front

// .slice() - does not mutate array, returns part of array you specify, first # inclusive, second
// # exclusive based on index

// .sort() - sorts ascending, but not always how you expect. For numbers 30 comes before 4. Read
// there are other complex things you can do to change sort. Simple practice for now.

// .splice() - splice is only an array method, can't be used on strings (slice is for both)
// splice can be used to remove and add elements in an array. Spliced is destructive/mutates

// access array elements with bracket notation []

// REMEMBER WHEN AN ARRAY IS MODIFIED WITHIN  A FUNCTION AND ITS SCOPE THE CHANGE IS MAINTAINED
//OUTSIDE THE FUNCTION. This is called passed-by-reference. Give example

// make a nested array

let zoo = [
  'amphibians',
  [
    'frogs',
    'toads'
  ],
  'mammals',
  [
    'tigers',
    'lions',
    [
      'big lion',
      'small lion'
    ],
    'bears'
  ],
  'fish',
  [
    'shark',
    'trout',
    'bass'
  ]
];
// console.log(zoo[5][2]);

// access elements in nested array

// MAKE AN ARRAY THAT HAS OBJECT BRACES AND PROPERTIES. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement.

// Note: Our array-like object isn't a perfect mimic of a regular JavaScript array, however. In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.

// ANSWER:
/*
let myArray = {
  0 : 'Ryan',
  1 : 'De Jonghe',
  2 : 41,
  length : 3

};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
console.log(myArray[0]);
*/

let myArray = [
  1,
  3,
  6,
  11,
  4,
  2,
  4,
  9,
  17,
  16,
  0
];

let newArray = myArray.map(function(el) {
  if (el % 2 === 0) {
    return 'EVEN';
  } else {
    return 'ODD';
  }
});
let duplArray = [];
for (let el of myArray) {
  if (el % 2 === 0) {
    duplArray.push('even');
  } else {
    duplArray.push('odd');
  }
}

console.log(newArray);
console.log(duplArray);
