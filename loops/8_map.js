// .map() similar to .forEach() 
// .map() use when you want to create a new array based on the array you are calling
//  map transforms an array's elements and returns a new array with the transformed values.
// for .map() use a variable, set a variable equal to something.map()

// example from book shows how you can create a new array with the square of a number from original array
let numbers = [1, 2, 3, 4]
let squares = numbers.map(num => num * num);
//= [ 1, 4, 9, 16 ]

// Do example from book, use .map() to create a new variable that is an array with the square of numbers
// I can do this with arrow functions, difficulty with reg syntax

let nums = [6, 8, 10];

let squared = nums.map(element => element * element);

console.log(nums);
console.log(squared);

// Use .map() to upper case a new array
// I can do this with arrow function, difficulty with regular syntax

let cities = ['Madrid', 'Barcelona', 'Sevilla', 'Toledo', 'Segovia'];
let uppCities = cities.map(element => element.toUpperCase());


console.log(cities);
console.log(uppCities);

