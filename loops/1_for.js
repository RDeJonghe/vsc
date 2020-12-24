// for loops (standard loop with 'i')

// for loop - has 3 expressions: 1. initialization(set iterator variable); 2. stopping condition; 
// 3. iteration statement (update iterator variable on each loop)

// 1. make a counter with for loop (hint set the variable counter)




// 2. make a reverse counter with a for loop



// 3. loop over an array of cities, saying you want to visit each





// 4. in this example see how you can actually console the index before exam scores. Shows index order
// and exam score.

const EXAM_SCORES = [67, 87, 78, 95 ,68, 93, 85];

for(let i = 0; i < EXAM_SCORES.length; i ++) {
  console.log([i], EXAM_SCORES[i]);
}


// example from udemy course LOOP OVER AN ARRAY WITH OBJECTS INSIDE, GET TO EACH OBJECT

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

// 5. for udemy course example, loop and say Person's name scored a their grade. Hint dot notation.
// since the key names all mach you can loop and get to each key
// don't forget [i] stuff




/* Answer
for (let i = 0; i < MY_STUDENTS.length; i++) {
  console.log(`${MY_STUDENTS[i].firstName} scored a ${MY_STUDENTS[i].grade}.`);
}
*/

//6. Do the same thing but save variables inside the loop for student name and grade then you can print this
// without using template literals and .notation, can just use variables and concatenation to print the sentence.
// ALSO MAKE THIS A BACKWARDS LOOP hint let i has to do with length.


/* Answers:

for(let i = (MY_STUDENTS.length - 1); i >= 0; i--) {
  let student = MY_STUDENTS[i].firstName;
  let grade = MY_STUDENTS[i].grade;
  console.log(student + ' scored a ' + grade);
}

for (let i = MY_STUDENTS.length -1; i >=0; i--) {
  let student = MY_STUDENTS[i]; // look you can create a variable in the loop, then use this in
  // the template literal instead of typing out entire MY_STUDENTS[i],
  console.log(`${i}: Backwards loop ${student.firstName} scored a ${student.grade}.`);
}
*/


// 7. Loop over and average all of the above test scores.






/* Answer
let total = 0; // variable has to be made outside of loop. If it's in the loop it would be reassigned to 0
for(let i = 0; i < MY_STUDENTS.length; i++) {
  total+= MY_STUDENTS[i].grade
  console.log(total);
}
let avg = total/MY_STUDENTS.length;
console.log(avg);
*/



// 8. Can also loop through strings. Loop backwards over the word 'stressed' so it spells 'desserts'

const WORD = 'stressed';



/* Answer:
const word = 'stressed';
for(let i = word.length -1; i >=0; i--) {
  console.log(i, word[i]);
}
*/

// 9. Do a similar thing, but save each letter each time through the loop to a new variable. console.log it in the loop
// so you can see each letter added

let reversedWord = '';


/*
// Answer
let reversedWord = '';
for(let i = word.length -1; i >=0; i--) {
  reversedWord += word[i];
  console.log(reversedWord);
}
*/


// 10. USE A STANDARD FOR LOOP TO LOOP OVER A SIMPLE ARRAY
const SONGS = ['Welcome to the jungle', 'Paradise City', 'Sweet child of mine']


// C. USE A STANDARD FOR LOOP TO LOOP OVER MORE COMPLEX ARRAY
// not exactly sure how to go deeper and loop and just print out animals only not type of animal
// can get to all, hard to loop and just get to some and not others, can use += 2 instead of ++
// to try to get to some, or change the starting index
// might need to set a variable 'row' inside of the loop


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



// Loop over nums, get it so you can print each number, not just print each inner array
// Hint : need to set a 'row' variable. What you console is the row[j] so row and inner index
let nums = [
  [
    1, 3, 5, 7, 9
  ],
  [
    2, 4, 6, 8, 10
  ],
  [
    11, 13, 15, 17, 19
  ]
];



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


