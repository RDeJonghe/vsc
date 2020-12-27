// for... of loop




// 1. Use for... of to console.log and upper case subreddits

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];


// Answer
/*
for (let elementsOfSubreddits of subreddits) {
  console.log(elementsOfSubreddits);
}
*/

// 2. use FOR OF to iterate over strings. Hint, put the string in the syntax



// Answer
/*
for(let char of 'Back once again') {
  console.log(char.toUpperCase());
}
*/





// Examples comapring for loops with for... of loops (good example for nested loops)
// Magic Square is a game where all numbers in row, column, diagonal have to add up to 15
// Here for... of is good to use.

// 3. Use for... of to sum and print all the rows of the array. Need a nested loop. Also do this with a regular nested for loop.

const MAGIC_SQUARE = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];



// Answers
/*
for(let i = 0; i < MAGIC_SQUARE.length; i++) {
  let row = MAGIC_SQUARE[i]
  let sum = 0; // sum is inside so each time through the loop it resets to zero and the next row can sum
  for(let j = 0; j < row.length; j++) {
  sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}
*/

// above code is is simpler with for... of loop
/*
for(let row of MAGIC_SQUARE) {
  let sum = 0;
  for(let num of row) {
    sum += num;
  }
  console.log(`${row} row totalled to ${sum}`);
}
*/





// EXAMPLE FROM UDEMY COURSE: for... of can also be used with objects. Need object static methods

const MOVIE_REVIEWS = {
  Arrival : 9.5,
  Alien : 9,
  Amelie : 8,
  'In Bruges' : 9,
  Amadeus : 10,
  'Kill Bill' : 8,
  'Little Miss Sunshine' : 8.5,
  'Coraline' : 7.5
}

// 4. Use for... of to print key, value and also pair. Hint: keys, values, entries

// Answers:
/*
for(let el of Object.keys(MOVIE_REVIEWS)) {
  console.log(el);
}

for(let el of Object.values(MOVIE_REVIEWS)) {
  console.log(el);
}

for(let el of Object.entries(MOVIE_REVIEWS)) {
  console.log(el);
}
*/

// 5. Find average review score. Hint to get .length need to make a variable set to array. 8.6875 is answer. Can also do with regular for loop.


// Answers
// Answer A
/*
let reviewArr = Object.values(MOVIE_REVIEWS);
let sum = 0;
for(let el of Object.values(MOVIE_REVIEWS)) {
  sum += el;
}
console.log(sum);
let avg = sum / reviewArr.length;
console.log(avg)
*/


// Answer B. for average review score his syntax. Said this could also be done with a for loop using index
/*
const RATINGS = Object.values(MOVIE_REVIEWS);
let total = 0;

for(let r of RATINGS) {
  total += r;
}
let average = total/RATINGS.length;
console.log(total);
console.log(average);
*/

// trying it with a for loop

/*
const RATING = Object.values(MOVIE_REVIEWS);
let added = 0;
let divided =0;

for(let i = 0; i < RATING.length; i++) {
  added += RATING[i];
  console.log(RATING[i]);
  console.log(added);
  divided = added / RATING.length;
}
console.log(`${divided} is the average rating`);
*/



// 6. Use for... of to practice syntax with simple example
const SONGS = ['Appetite for destruction', 'Welcome to the jungle', 'Paradise City', 'Sweet child of mine'];




// 7. FOR...OF Loop through more complex example. Make a nested for... of loop to print all the elments of array. Hint: use row.

const zoo = [
  [
  'mammals'
  ],
  [
    'tigers',
    'gorillas',
    'zebras'
  ],
  [
  'amphibians'
  ],
  [
    'frogs'
  ],
  [
  'reptiles'
  ],
  [
    'snakes'
  ],
  [
  'fish'
  ],
  [
    'sharks',
    'bass',
    'trout'
  ]
];



// Answer:
/*
for(let el of zoo) {
  let row = el;
  for(let el2 of row) {
    console.log(el2);
  }
}
*/





// for... of can also be used with
  // objects as long as a method is used (since objects aren't iterable)
  // object.keys()
  // object.values()
  // object.entries()
  // these methods are all iterable



// NOTES: FOR... OF LOOPS FROM UDEMY COURSE
// new to JS. syntax is somewhat simple for(variable of iterable) {statement}
// can use to loop over arrays and other iterables
// the variable created will just represent every element in the array
// works like the for loop, but you don't need to set "i" and mess with index, so this is simpler
// name variable something that represents elements, don't use "i" since we're not using index
// Sometimes for... of is not better. Here is an example where for... of doesn't work as well, use for
// index is important in this example
/*
const WORDS1 = ['mail', 'milk', 'bath', 'black'];
const WORDS2 = ['box', 'shake', 'tub', 'berry'];
// whole point is to print out mail and box, milk and shake, etc. In this case we need to know index.
// so if index is needed, regular for loop is what to use

for(let i = 0; i < WORDS1.length; i++) {
  console.log(WORDS1[i], WORDS2[i]);
  console.log(`${WORDS1[i]}${WORDS2[i]}`);
}
*/