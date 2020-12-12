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
console.log(zoo[5][2]);



// access elements in nested array







