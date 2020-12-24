// FOR EACH
// EXAMPLES AND PRACTICE WITH FOR EACH
// THIS IS USED WITH ARRAYS!!! IT IS A METHOD FOR ARRAYS
// NEEDS A FUNCTION WITH IT!!!

// To use forEach, you need a callback function that you pass to forEach as an argument
// For each needs a function!!!!
// A callback function is a function that you pass to another function as an argument
// The called function invokes the callback function when it runs.
// The forEach method invokes its callback once for each element, passing it the element's value as argument. forEach always returns undefined.


// .forEach() is a method - so it's a function. So forEach is a function that calls a function
// you make. That inner function runs once for each element on an array.

// can also use arrow syntax with .forEach()
// example below, can perform different operations with this
/*
let array = [1, 2, 3];
array.forEach(num => console.log(num + 2));
*/

// note in above example, your calling gnr.forEach, so you don't have to actually call a function seperately on another line.

// CAN USE REGULAR FUNCTION SYNTAX OR ARROW SYNTAX

// USE forEach() TO ITERATE OVER AN ARRAY OF CITIES, CONSOLE.LOG EACH CITY, USE BOTH REG AND ARROW SYNTAX

let cities = ['Mexico, D.F.', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Tuxtla Gutierreza'];

// USE THE SAME LIST OF CITIES AND ITERATE TO SAVE AN UPPERCASE VERSION TO A VARIABLE, CONSOLE LOG THE NEW ARRAY


// NESTED ARRAYS:
// use forEach() to get one level deep,
// to get 2 levels deep use a nested for loop hint: you have to set a 'row' variable

let nums = [
  [
    1, 3, 5, 7, 9, [1.5, 3.5]
  ],
  [
    2, 4, 6, 8, 10, [2.5, 4.5]
  ],
  [
    11, 13, 15, 17, 19, [11.5, 13.5]
  ]
];
// 1 level deep with for each
nums.forEach(element => console.log(element));

// 2 levels deep
/*
for(let i = 0; i < nums.length; i++) {
  let row = nums[i]
  for(let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
*/
// 3 Levels deep
/*
for(let i = 0; i < nums.length; i++) {
  let row = nums[i];
  for(let j = 0; j < row.length; j++) {
    let row2 = row[j];
    for(let k = 0; k < row2.length; k++) {
      console.log(row2[k]);
    }
  }
}
*/





// USE FOR EACH ON OBJECTS WITHIN AN ARRAY

let band = [
  {vocal : 'Axl'},
  {guitar: 'Slash'},
  {bass: 'Duff'},
  {drums: 'Steven'}
];




// Example from book on converting an object to use forEach()
/*
    let person = {
      name: 'Bob',
      age: 30,
      height: '6 ft'
    };

    let personKeys = Object.keys(person);
    console.log(personKeys);          // => ['name', 'age', 'height']
    personKeys.forEach(key => {
      console.log(person[key])
    });
*/


// USE FOR EACH ON OBJECT, CONVERT TO ARRAY FIRST

let zoo =  {
zone1 : 'Mammals',
zone2 : 'Reptiles',
zone3 : 'Birds'
};


// Convert to an array with Object.keys() static method (hint: need to declare this to a variable)
// Then use .forEach() to iterate over the array printing out the value of each key in wars
// careful with what you're calling the method with, and using [] for index

let wars = {
  '1700s' : ['Revolutionary'],
  '1800s' : [1812, 'Civil War', 1898],
  '1900s' : ['WW1', 'WW2', 'Vietnam'],
  '2000s' : ['Afganistan', 'Iraq']
};







            

