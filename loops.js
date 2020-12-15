// PRACTICE LOOPS

// for loop - has 3 expressions: 1. initialization(set iterator variable); 2. stopping condition; 
// 3. iteration statement (update iterator variable on each loop)

// 1. make a counter with for loop




// 2. make a reverse counter with a for loop



// 3. loop over an array of cities, saying you want to visit each




// Nested Loops - when a loop is running inside another loop. Good use for this is to
// compare elements in two arrays
// 4. Do a nested loop comparing numbers and another nested loop comparing strings, .push() to an array




// While loop - used for when we don't know how many times the loop should run (think of example
// of eating... you don't know how many bites, you eat while hungry)
// variable outside of syntax

// 5. do a while loop with numbers, then do the while loop example with cards (can also use break
// in card example with an if statement)




// DO... WHILE statements - used when you want code to run at least once and then loop based
// on a condition after the initial run
// variable outside of syntax, syntax has reversed order for () and {}
// Do.. While is different from While. Do... While will run at least once even if it evaluates
// to false

// 6. Make a do... while example, and also show how it will run even if it evaluates to false






// break keyword allows you to stop the loop even if it still evaluates to true
// use the break keyword with an if statement for an example
// can also do example with cards, break if joker



// in this example see how you can actually console the index before exam scores? Shows index order
/*
const EXAM_SCORES = [67, 87, 78, 95 ,68, 93, 85];

for (i = 0; i < EXAM_SCORES.length; i++) {
  console.log(i, EXAM_SCORES[i]);
}
*/


// example from udemy course
/*
const MY_STUDENTS = [
  {
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  }
];

for (let i = 0; i < MY_STUDENTS.length; i++) {
  console.log(`${MY_STUDENTS[i].firstName} scored a ${MY_STUDENTS[i].grade}.`);
}
for (let i = MY_STUDENTS.length -1; i >=0; i--) {
  let student = MY_STUDENTS[i]; // look you can create a variable in the loop, then use this in
  // the template literal instead of typing out entire MY_STUDENTS[i],
  console.log(`${i}: Backwards loop ${student.firstName} scored a ${student.grade}.`);
}

// how to loop over and average all of the above test scores
let total = 0; // variable has to be made outside of loop. If it's in the loop it would be reassigned to 0
for(let i = 0; i < MY_STUDENTS.length; i++) {
  total+= MY_STUDENTS[i].grade
  console.log(total);
}
let avg = total/MY_STUDENTS.length;
console.log(avg);
*/

// can also loop backwards... see below string loop example, this backwards loop can also be used on arrays

// can also loop through strings
/*
const word = 'stressed';
for(let i = word.length -1; i >=0; i--) {
  console.log(i, word[i]);
}
// another way of printing it out, adding a letter each time, using above example
let reversedWord = '';
for(let i = word.length -1; i >=0; i--) {
  reversedWord += word[i];
  console.log(reversedWord);
}
*/


// CAN ALSO NEST LOOPS

// this shows nested loops just how they work visually
/*
for(let i = 1; i <=10; i++) {
  console.log('Outter Loop', i)
  for(let j = 10; j >= 0; j -= 2) {
    console.log('   Inner Loop', j);
  } 
}
*/

// example of why you would use a nested loop
// need to loop twice, outter loop over 4 arrays, inner loop over the scores
/*
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2]
];


// same as below example just condensed without console logging.
let totalScore = 0;
for(let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for(let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log(totalScore);
*/



/*
let totalScore = 0;
for(let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  console.log(row);
  for(let j = 0; j < row.length; j++) {
    console.log(row[j]);
    totalScore += row[j];
    console.log(`this is adding total score: ${totalScore}`);
  }
}
*/

// WHILE LOOPS FROM UDEMY COURSE
// while loops syntax simpler, more flexible
// good for when you don't know how many times it will run
// while loops can be understood like this:
//    while(some condition is true) {
//    in the loop update or attempt to make that condition false }

//example for guessing a set number randomly, don't know how many guesses it will take so while loop is good

/*
const target = Math.ceil(Math.random() * 10);
let guess = Math.ceil(Math.random() * 10)

console.log(`this is target, unchanged: ${target}`);
while(guess !== target) {
  console.log(`target number: ${target}, guess: ${guess}`)
  guess = Math.ceil(Math.random() * 10)
}
console.log(`Congrats you guessed ${guess}`)
*/

// NOTE: break in loops, if break is in a nested loop, only the nested loop will break, outter loop will continue


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


// FOR... IN WITH OBJECTS
// for... in loop (wants an object, only will work with object well - techincally you can
  // use with an array but not a lot of good reason to.) Arrays are kind like objects, it's just they
  // have index numbers that work like keys, they don't have key names. Order of loop in for... in
  // isn't always the same, that's why it doesn't work well with arrays where order is most important
  // in the syntax it looks like you have to set a variable, can name it as 'prop' or something
  // for property, some people name it 'key' or 'k'. It looks like since properties aren't ordered
  // like in keys this variable is just a stand in for 'every key', it's kinda like
  // for 'every key' in 'the object that you picked'
  // also looks like you have to use bracket notation and not dot notation, examples when
  // console.log won't work with dot notation
  
  // for loop examples
  
  /*
  const jeopardyWinnings = {
    regularPlay : 20000,
    finalRound: 5000,
    challenge: 10000,
  }
  
  // this will just show the keys
  for(let prop in jeopardyWinnings) {
    console.log(prop);
  }
  // doesn't really matter what you name it, both work
  for(let key in jeopardyWinnings) {
    console.log(key);
  }
  //this will show just the values
  for(let key2 in jeopardyWinnings) {
    console.log(jeopardyWinnings[key2])
  }
  // this will console.log all info, showing each key pair (on two lines though)
  for(let key3 in jeopardyWinnings) {
    console.log(key3);
    console.log(jeopardyWinnings[key3]);
  }
  
  // this will add them all together, so it works like a loop and can do things
  let total = 0;
  for(let key4 in jeopardyWinnings) {
    total += jeopardyWinnings[key4];
  }
  console.log(`Total jeopardy winnings are ${total}`);
  */
  
  /*
  
  const gnr = {
    band: {
      singer: {
        name: 'Axl',
        drug: 'Whiskey'
      },
      'lead guitar': {
        name: 'Slash',
        drug: 'Cocaine'
      },
      bass: {
        name: 'Duff',
        drug: 'Heroin'
      },
      drums: {
        name: 'Steven',
        drug: 'Weed'
      }
    }
  }
  
  for(let k in gnr.band) {
    console.log(`${gnr.band[k].name}'s favorite drug is ${gnr.band[k].drug}`);
  }
  
  */
  




  /*
  for(let key in chargers.players) {
    console.log(key);
    console.log(`${chargers.players[key].name}'s favorite play is ${chargers.players[key].favPlay}`);
  }
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

// B. FOR...IN USE TO LOOP OVER OBJECT. USE THIS OBJECT


const chargers = {
  down : '1st and goal',
  players : {
    qb : {
      name : 'Philip Rivers',
      number : 17,
      favPlay : 'Post',
    },
    rb1 : {
      name : 'LaDanian Tomlinson',
      number : 21,
      favPlay : 'Sweep'
    },
    rb2 : {
      name : 'Darren Sproles',
      number : 32,
      favPlay : 'Screen'
    },
    wr : {
      name : 'Vincent Jackson',
      number : 83,
      favPlay : 'Stop and Go'
    }
  },
  coaches : {
    head : {
      name : 'Marty Schottenheimer',
      strategy : 'Martyball'
    },
    assistant : {
      name : 'Joe Jones',
      strategy : 'Give the ball to L.T.'
    }
  },
  favPlay21: function () {
    return this.players.rb1.favPlay;
  },
  favPlay17() {
    return this.players.qb.favPlay;
  },
  get goTo() {
    if(this.down === '1st and goal') {
      return `coach says ${this.coaches.assistant.strategy}`;
    }
    else{
      return 'trick play';
    }
  } 
}

console.log(chargers.goTo);


// C. USE A STANDARD FOR LOOP TO LOOP OVER A SIMPLE ARRAY
//const SONGS = ['Welcome to the jungle', 'Paradise City', 'Sweet child of mine']

// C. USE A STANDARD FOR LOOP TO LOOP OVER MORE COMPLEX ARRAY
// not exactly sure how to go deeper and loop and just print out animals only not type of animal
// can get to all, hard to loop and just get to some and not others, can use += 2 instead of ++
// to try to get to some, or change the starting index

/*
const zoo = [
  ['mammals'], [
    'tigers',
    'gorillas',
    'zebras'
  ],
  ['amphibians'], [
    'frogs'
  ],
  ['reptiles'], [
    'snakes'
  ],
  ['fish'], [
    'sharks',
    'bass',
    'trout'
  ]
];

for(let i = 0; i < zoo.length; i++){
  let row = zoo[i];
  
  for(let j = 0; j < row.length; j++) {
  console.log(row[j].toUpperCase());
  }
}
*/


// D. WHILE USE A WHILE LOOP TO ITERATE OVER DRAW OF A CARD DECK,
// While loops are good for when you don't know how many times... like draw of a card deck

// const CARDS = ['heart', 'diamond', 'club', 'spade'];




// E. USE A DO...WHILE LOOP TO RUN AT LEAST ONCE EVEN THOUGH IT IS FALSE,
// Do while has backwards syntax with {}







// PRACTICE USING LOOPS TO ITERATE THROUGH MIXED ARRAYS AND OBJECTS - ARRAY WITH OBJECTS, OBJECT WITH ARRAY, ETC.











// Good long example of how to loop through code that has objects and arrays
// see example at bottom, when order is important [i] is needed

const team = {
  _players : [
    {
    firstName : 'Josh',
    lastName : 'Allen',
    age : 24
  },
  {
    firstName : 'Devin',
    lastName : 'Singletary',
    age : 23
  },
  {
    firstName : 'Stefon',
    lastName : 'Diggs',
    age : 27
  }
],
  _games : [
    {
      opponent : 'Steelers',
      teamPoints: 24,
      opponentPoints : 15
    },
    {
      opponent : 'Rams',
      teamPoints: 35,
      opponentPoints : 30
    },
    {
      opponent : 'Patriots',
      teamPoints: 24,
      opponentPoints : 20
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(first, last, edad) {
    const player = {
      firstName : first,
      lastName : last,
      age : edad
    }
    return team._players.push(player);
  },
  addGame(name, ourPoints, theirPoints) {
    const newGame = {
      opponent: name,
      teamPoints: ourPoints,
      opponentPoints: theirPoints
    }
    return team._games.push(newGame);
  }
}


// Loop through array to show elements that are objects
/*
for(let element of team._players) {
  console.log(element);
}
*/


// Loop through those objects in array
// need i since index is important, it's in an array
// when index isn't important can use for...in
for(let i = 0; i < team._players.length; i++) {
  console.log(team._players[i]);
}


