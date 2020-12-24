// .reduce() Another way to iterate over arrays
// can use .reduce() to build .forEach(), .map() and .filter so it's complex
// can also build other iterative methods with this
// accumulator - a part of reduce,


// example from book of reduce
let arr = [2, 3, 5, 7]
arr.reduce((accumulator, element) => accumulator + element, 0)
//= 17

arr.reduce((accumulator, element) => accumulator * element, 1)
//= 210


// string example from book with reduce. Note the accumulator is set to an empty string.
let strings = ['a', 'b', 'c', 'd'];
console.log(strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase()
}, ''));