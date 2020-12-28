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



// 1. USE forEach() TO ITERATE OVER AN ARRAY OF CITIES, CONSOLE.LOG EACH CITY, USE BOTH REG AND ARROW SYNTAX

let cities = ['Mexico, D.F.', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Tuxtla Gutierreza'];
let uppCities = []; 

cities.forEach((el) => {
  uppCities.push(el.toUpperCase());

})

console.log(uppCities);


// answer reg syntax:
/*
cities.forEach(function(element) {
  console.log(element);
})
*/

// answer arrow syntax
/*
cities.forEach(element => console.log(element));
*/

// 2. USE THE SAME LIST OF CITIES AND ITERATE TO SAVE AN UPPERCASE VERSION TO A VARIABLE, CONSOLE LOG THE NEW ARRAY
// hint, set variable to empty array, use .push, careful with element



// Answer
/*
let uppCities = [];

cities.forEach(function(element) {
  uppCities.push(element.toUpperCase());
})

console.log(uppCities);
*/



// 3. use forEach() to get one level deep, (don't think you can go 2 levels deep, may need nested for loop)

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




// answer
/*
nums.forEach(element => console.log(element));
*/





// 4. Questions below USE FOR EACH ON OBJECTS WITHIN AN ARRAY

let band = [
  {
    name : 'Axl',
    instrument: 'vocals',
    drug : 'Cocaine'
  },
  {
    name : 'Slash',
    instrument : 'guitar',
    drug: 'Whiskey'
  },
  {
    name: 'Duff',
    instrument : 'bass',
    drug: 'Heroin'
  },
  {
    name: 'Steven',
    instrument: 'drums',
    drug : 'Pills'
  }
];

// 4a. Use forEach() to show each object

// Answer
// band.forEach(element => console.log(element));

// 4b. Use forEach() to print name plays instrument and does drug


// Answer:
/*
band.forEach(element => console.log(`${element.name} plays ${element.instrument} and does ${element.drug}`));
*/





// 5a. USE FOR EACH ON OBJECT, to print keys. hint use static method Object.keys(), set this to a variable.
// this will print the keys.

let zoo =  {
zone1 : 'Mammals',
zone2 : 'Reptiles',
zone3 : 'Birds'
};

//Answer
/*
let zooArray = Object.keys(zoo);
zooArray.forEach(key => console.log(key));
*/

// 5b. USE FOR EACH ON AN OBJECT, this time print the values. Hint use Object.values(), set to a variable

// Answer
/*
let zooB = Object.values(zoo);
zooB.forEach(function(value) {
  console.log(value);
})
*/

// 5c. USE FOR EACH ON AN OBJECT, this time print the properties in an array, use Object.entries to set key - value pair
// in a new array

// Answer
/*
let zooC = Object.entries(zoo);
zooC.forEach(prop => console.log(prop));
*/


// Convert to an array with Object.keys() static method (hint: need to declare this to a variable)
// Then use .forEach() to iterate over the array printing out the value of each key in wars
// careful with what you're calling the method with, and using [] for index

// QUESTION: Can you call .forEach() twice? Like call it again to get inside of a nested array??????

let wars = {
  '1700s' : ['Revolutionary'],
  '1800s' : [1812, 'Civil War', 1898],
  '1900s' : ['WW1', 'WW2', 'Vietnam'],
  '2000s' : ['Afganistan', 'Iraq']
};

// 6a. Print out arrays with the with the groups of wars


// Answer:
/*
let warsArr = Object.values(wars);
warsArr.forEach(element => console.log(element));
*/


// 6b. Print out arrays with time periods



// 6c. .push 'Merica in the array and print




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



            

