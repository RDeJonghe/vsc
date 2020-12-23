// While loop - used for when we don't know how many times the loop should run (think of example
// of eating... you don't know how many bites, you eat while hungry)
// variable outside of syntax

// 5. do a while loop with numbers, then do the while loop example with cards (can also use break
// in card example with an if statement)





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



// D. WHILE USE A WHILE LOOP TO ITERATE OVER DRAW OF A CARD DECK,
// While loops are good for when you don't know how many times... like draw of a card deck

// const CARDS = ['heart', 'diamond', 'club', 'spade'];


// break keyword allows you to stop the loop even if it still evaluates to true
// use the break keyword with an if statement for an example
// can also do example with cards, break if joker