console.log('Hello World');

/*
let guess = 9

if (guess >= 1 && guess <= 10) {
    console.log('you chose a number between 1 and 10');
}
else {
    console.log('You didn\'t choose a number between 1 and 10');
}

let age = 41;
let free = 'You get in for free';
let pay = 'That\'s $10';

if (age <= 6 || age >= 65) {
    console.log(`${free}`);
}
else {
    console.log(`${pay}`);
}
*/

/*
let password = 'Chickengal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log('Valid Password')
}
else {
    console.log('Invalid Password');
}

/*
console.log(1 <= 4 && 'a' === 'a' && 10 < 2);

// Can Check Truthy and Falsey
let mystery = 0;

if(mystery) {
    console.log('Truthy');
}

else{
    console.log('Falsey');
}

// Nesting Conditionals, example with password
// .indexOf will look at the string and return a number for where in the string
// The character you are searching for is. Will show first instance of that character
// I think. If the CHARACTER DOES NOT EXIST IT WILL RETURN -1. That's how we cna
// check to see that a character does not exist. So the ' ' space === -1, it does
// exist

let password = '8hkehd kdhe';

if (password.length >= 6){
    if (password.indexOf(' ') === -1) {
        console.log('Valid password');
    }
    else {
        console.log('Password is long enough but has a space');
    }
}
else {
    console.log('Password is too short.');
}



// Performance Review
// 3 - superstar, 2 - meets expectations, 1 - needs improvement
// anything else - wtf?

let rating = 1.5;

if (rating === 3) {
    console.log('You are a superstar!');
}
else if (rating === 2) {
    console.log('meets expectations');
}

else if (rating === 1) {
    console.log('needs improvement');
}

else {console.log('wtf?');}

// High score example

let highScore = 1500
let userScore = 1620

if (userScore >= highScore) {console.log(`Congratulations your score of ${userScore} is the new high score`);
highScore = userScore
}

else {console.log(`The high score is: ${highScore}. Your score is: ${userScore}.`);
}

console.log(highScore);

/*Check Odd and Even With Modulo

let num = 401

if (num % 2 === 0) {
    console.log('This is an even number');
}
else {
    console.log('This is an odd number');
}
*/
