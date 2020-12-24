// for loops (standard loop with 'i')

// for loop - has 3 expressions: 1. initialization(set iterator variable); 2. stopping condition; 
// 3. iteration statement (update iterator variable on each loop)

// 1. make a counter with for loop (hint set the variable counter)


// Answer
/*
for(let counter = 0; counter <= 10; counter ++) {
  console.log(counter);
}
*/

// 2. make a reverse counter with a for loop


// Answer
/*
for(let counter = 10; counter > -1; counter -= 2) {
  console.log(counter);
}
*/

// 3. loop over an array of cities, saying you want to visit each

const CITIES = ['Rio de Janeiro', 'Sao Paulo', 'Fortaleza', 'Belem', 'Curitiba', 'Porto Alegre'];

// Answer
/*
for(let i = 0; i < CITIES.length; i++) {
  console.log(CITIES[i].toUpperCase() + ' is a city I want to visit');
}
*/




// 4. in this example see how you can actually console the index before exam scores. Shows index order
// and exam score. Find the average for all exam scores also.

const EXAM_SCORES = [67, 87, 78, 95 ,68, 93, 85];

// answer
/*
let total = 0;
for(let i = 0; i < EXAM_SCORES.length; i++) {
  console.log(i, EXAM_SCORES[i]);
  total += EXAM_SCORES[i];
}
console.log(`total of all exam scores is : ${total}`);
let numOfExams = EXAM_SCORES.length;
console.log(`Number of exams is ${numOfExams}`);
let avg = total / numOfExams;
console.log(`Average score is ${avg}`);
*/

// Answer


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
};
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


//answer
/*
for(let i = 0; i < SONGS.length; i++) {
  console.log(SONGS[i]);
}
*/


// 11. USE A STANDARD FOR LOOP TO LOOP OVER MORE COMPLEX ARRAY
// Questions underneath array

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

// 11a. loop over array and print out all contents individually hint: use 'row'




// Answer
/*
for(let i = 0; i < zoo.length; i ++) {
  let row = zoo[i];
  for(let j = 0; j < row.length; j++) {
    console.log(row[j].toUpperCase() + ' the zoo is fun');
  }
};
*/


// 11b. loop over and print out just animal type, not individual animals. hint: have to i++ to hit on even
// Make sure to print each animal type, not the array, get in to the element




// answer
/*
for(let i = 0; i < zoo.length; i+= 2) {
  let row = zoo[i];
  for(let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
*/


// 11c. loop over and print out just the indivdual animals, not the class. Hint set i to something different than normal
// and increment different than normal. Also need a row



// Answer:
/*
for(let i = 1; i < zoo.length; i += 2){
  let row = zoo[i];
  for(let j = 0; j < row.length; j++) {
    console.log(row[j] + ' is an animal in the zoo');
  }
};
*/


// 12. Loop over nums, get it so you can print each number, not just print each inner array
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


// Answer
for(let i = 0; i < nums.length; i++) {
  let row = nums[i];
  for(let j = 0; j < row.length; j++){
    console.log(row[j] + ' is a number');
  }
};



// 13. PRACTICE USING LOOPS TO ITERATE THROUGH MIXED ARRAYS AND OBJECTS - ARRAY WITH OBJECTS, OBJECT WITH ARRAY, ETC.

// Good long example of how to loop through code that has objects and arrays. Questions below.
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

// 13a. Make a loop and print out 'Player name is # years old'. Hint: don't need to nest loops, use dot notation,
// don't forget [i] when printing.

// Answer:
/*
for(let i = 0; i < team._players.length; i++) {
  console.log(`${team._players[i].firstName} ${team.players[i].lastName} is ${team._players[i].age} years old`);
}
*/

// 13b. Loop through the _games key and show all the elments in that array (which happen to be objects) So print these objects.
// Do this regularly and then also do it by setting a row

// answer:
/*
for(let i = 0; i < team._games.length; i++) {
  console.log(team._games[i]);
}
*/

// answer with row:
/*
for(let i = 0; i < team._games.length; i++) {
  let row = team._games[i];
  console.log(i, row);
};
*/




