// While loop - used for when we don't know how many times the loop should run (think of example
// of eating... you don't know how many bites, you eat while hungry)
// variable outside of syntax

// 1. do a while loop with numbers, then do the while loop example with cards (can also use break
// in card example with an if statement)


// Answer
/*
let cards = ['Heart', 'Diamond', 'Club', 'Spade'];
let deal;

while(deal !== 'Heart') {
  deal = cards[Math.floor(Math.random() * 4)];
  console.log(deal);
};
*/

// 2. do same example but use an if statement and break if card is 'joker', just an example deck
// will have as many jokers as other suits. Have same probability of getting joker as any other suit



// Answer
/*
let cards = ['Heart', 'Diamond', 'Club', 'Spade', 'Joker'];
let deal;

while(deal !== 'Diamond') {
  deal = cards[Math.floor(Math.random() * 5)];
  console.log(deal);
  if(deal === 'Joker') {
    break;
  }
}
*/




// WHILE LOOPS NOTES FROM UDEMY COURSE
// while loops syntax simpler, more flexible
// good for when you don't know how many times it will run
// while loops can be understood like this:
//    while(some condition is true) {
//    in the loop update or attempt to make that condition false }


// 3. Set a target number, and then set up a random number generator, use a while loop to generate until they match
// Number has to be between 1 & 10. Don't know how many times it will take to match so while loop is good.




// Answer
/*
const TARGET = 6;
let randomNum;


while(randomNum !== TARGET) {
  randomNum = Math.ceil(Math.random() * 9);
  console.log('Secret number is ' + TARGET + '. Random number is ' + randomNum + '.');
}
*/

