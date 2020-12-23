// FOR EACH
// EXAMPLES AND PRACTICE WITH FOR EACH
// THIS IS USED WITH ARRAYS!!! IT IS A METHOD FOR ARRAYS
// NEEDS A FUNCTION WITH IT!!!

/*
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});
*/
// above example also refactored as:
/*
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));
*/

// To use forEach, you need a callback function that you pass to forEach as an argument
// For each needs a function!!!!
// A callback function is a function that you pass to another function as an argument
// The called function invokes the callback function when it runs.
// The forEach method invokes its callback once for each element, passing it the element's value as argument. forEach always returns undefined.
/*
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor', 'Sam'];

let upperNames = [];

names.forEach(function(element) {
  upperNames.push(element.toUpperCase());
});

console.log(upperNames);
*/

// .forEach() is a method - so it's a function. So forEach is a function that calls a function
// you make. That inner function runs once for each element on an array.

// can also use arrow syntax with .forEach()
/*
let array = [1, 2, 3];
array.forEach(num => console.log(num + 2));
*/



let gnr = ['Axl', 'Slash', 'Duff', 'Steven'];

gnr.forEach(function (member) {
  console.log(member);
})

// note in above example, your calling gnr.forEach, so you don't have to actually call a function seperately on another line.

// CAN USE REGULAR FUNCTION SYNTAX OR ARROW SYNTAX

// CAN THIS BE USED ON NESTED ARRAYS? OR ARRAYS WITHIN AN OBJECT?


let animals = ['tiger', 'lion', 'bear'];

animals.forEach(type => console.log(`${type} is dangerouS`));


let band = [
  {vocal : 'Axl'},
  {guitar: 'Slash'},
  {bass: 'Duff'},
  {drums: 'Steven'}
];

band.forEach(function(mem) {
  console.log(mem);
})

let zoo = {
  zone1 : 'Mammals',
  zone2 : 'Reptiles',
  zone3 : 'Birds'
};

// POSSIBLE TO CONVERT OBJECT TO AN ARRAY AND USE FOR EACH

let zooKeys = Object.keys(zoo);
console.log(zooKeys);

zooKeys.forEach(function(key) {
  console.log(zoo[key]);
})

// Example from book on converting an object to use forEach()
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


let nestArr = [[2, 4, 6], [5, 7, 9], [10, 11, 12]];

nestArr.forEach(function(element) {
  console.log(element);
})

nestArr[0].forEach(element => console.log(element));
nestArr[0].forEach(element => console.log(element + 1));
nestArr[1].forEach(element => console.log(element));



            

