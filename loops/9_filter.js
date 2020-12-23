// .filter() another iterating method for arrays, like .forEach() and .map()
// .filter() doesn't mutate the caller

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
numbers.filter(num => num > 4)
//=[ 5, 6, 7, 8, 9, 10 ]

//> numbers
//= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]