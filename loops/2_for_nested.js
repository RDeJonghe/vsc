// Nested Loops - when a loop is running inside another loop. Good use for this is to
// compare elements in two arrays
// 4. Do a nested loop comparing numbers and another nested loop comparing strings, .push() to an array






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