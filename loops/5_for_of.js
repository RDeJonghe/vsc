// for... of loop


// FOR... OF LOOPS FROM UDEMY COURSE
// new to JS. syntax is somewhat simple for(variable of iterable) {statement}
// can use to loop over arrays and other iterables
// the variable created will just represent every element in the array
// works like the for loop, but you don't need to set "i" and mess with index, so this is simpler
// name variable something that represents elements, don't use "i" since we're not using index
/*
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (let elementsOfSubreddits of subreddits) {
  console.log(elementsOfSubreddits);
}

// can use FOR OF to iterate over strings
for(let char of 'Back once again') {
  console.log(char.toUpperCase());
}

let disney = ['Mickey', 'Minnie', 'Goofy', 'Daisy', 'Daffy'];
for(let cartoon of disney) {
  console.log(cartoon);
}
*/


// Examples comapring for loops with for... of loops (good example for nested loops)
// Magic Square is a game where all numbers in row, column, diagonal have to add up to 15
// Here for... of is good to use.

/*
const MAGIC_SQUARE = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

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


// EXAMPLE FROM UDEMY COURSE: for... of can also be used with objects
// with objects, for can't be used since there are no indexes with objects
/*
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
*/

/*

for(let movie of Object.keys(MOVIE_REVIEWS)) {
  console.log(movie, MOVIE_REVIEWS[movie]);
}
*/
// for average review score, can do like this. Need to make it array to get .length
/*
const OBJECT_VALUES_ARRAY = Object.values(MOVIE_REVIEWS); // this makes movie reviews an array
let sum = 0;
let avg = 0;

for(let num of Object.values(MOVIE_REVIEWS)) {
  sum += num;
  console.log(sum);
  avg = sum / OBJECT_VALUES_ARRAY.length;
  console.log(avg);
}
*/

// for average review score his syntax. Said this could also be done with a for loop using index
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


// A. FOR...OF USE TO LOOP THROUGH AN ARRAY AND ALSO A STRING. LOOP THROUGH SIMPLE ARRAY AND SIMPLE STRING
// Practice syntax with simple example
//const SONGS = [['Appetite for destruction'], ['Welcome to the jungle', 'Paradise City', 'Sweet child of mine']]


// FOR...OF Loop through more complex example
// Need practice looping through arrays like this to show imbedded options, may need to nest, may need
// to use for with [i], not sure how to go deeper
/*
const zoo = [
  'mammals', [
    'tigers',
    'gorillas',
    'zebras'
  ],
  'amphibians', [
    'frogs'
  ],
  'reptiles', [
    'snakes'
  ],
  'fish', [
    'sharks',
    'bass',
    'trout'
  ]
];
*/


// PRACTICE USING LOOPS TO ITERATE THROUGH MIXED ARRAYS AND OBJECTS - ARRAY WITH OBJECTS, OBJECT WITH ARRAY, ETC.


// for... of can also be used with
  // objects as long as a method is used (since objects aren't iterable)
  // object.keys()
  // object.values()
  // object.entries()
  // these methods are all iterable

