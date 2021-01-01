//Magic 8 Ball, second time with switch statements
//This example has some switch and if statements that are not
//working like I understand they would

let userName = 'Ryan';

if (userName) {
    console.log(`Hello ${userName}!`);
}
else {
    console.log('Hello!');
}



switch(userName) {
    case userName : 
        (console.log(`Hello ${userName}!`));
        break;
    default : (console.log('Hello!'));
}

userName ? (console.log(`Hello ${userName}!`)) :
    (console.log('Hello!'));

/*

let userQuestion = 'What info does the 8 Ball have for me?';

/*userName ? (console.log(`${userName} asks: ${userQuestion}"`)) :
    (console.log(`${userQuestion}`)); */

// Switch Case statement instead of above ternary operater
// Why doesn't this return the truthy value? It returns the default
// even though the variable is a string

/*
switch (userName) {
    case true :
        console.log(`${userName} asks: ${userQuestion}`);
        break;
    default : console.log(`${userQuestion}`);
}

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
    case 0 :
        eightBall = 'It is certain';
        break;
    case 1 :
        eightBall = 'It is decidedly so';
        break;
    case 2 :
        eightBall = 'Reply hazy try again';
        break;
    case 3 :
        eightBall = 'Cannot predict now';
        break;
    case 4 :
        eightBall = 'Do not count on it';
        break;
    case 5 :
        eightBall = 'My sources say no';
        break;
    case 6 :
        eightBall = 'Outlook not so good';
    default : eightBall = 'Signs point to yes';
}

console.log(eightBall);

*/


//Magic 8 Ball Project from Codecademy Conditionals lesson

//Using if statements

/*

let userName = 'Renegade Master'

userName ? (console.log(`Hello ${userName}!`)) : 
    (console.log('Hello!'));

let userQuestion = 'What does the Magic 8 Ball Say?';

userName ? (console.log(`${userName} asks: "${userQuestion}"`)) :
    (console.log(`${userQuestion}`));

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
    eightBall = 'It is certain';
}
else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
}
else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
}
else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
}
else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
}
else if (randomNumber === 5) {
    eightBall = 'My sources say no';
}
else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
}
else {
    eightBall = 'Signs point to yes';
}

console.log(`The 8 Ball says: "${eightBall}"`);


//Same exercise using Switch instead of If

let userName = 'Renegade Master';

userName ? (console.log(`Hello ${userName}!`)) :
    (console.log(`Hello!`));

let userQuestion = 'What is the answer of the Magic 8 Ball?'

userName ? (console.log(`${userName} asks "${userQuestion}"`)) :
    (console.log(`${userQuestion}`));

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 0 :
        eightBall = 'It is certain';
        break;
    case 1 :
        eightBall = 'It is decidedly so';
        break;
    case 2 :
        eightBall = 'Reply hazy try again';
        break;
    case 3 :
        eightBall = 'Cannot predict now';
        break;
    case 4 :
        eightBall = 'Do not count on it';
        break;
    case 5 :
        eightBall = 'My sources say no';
        break;
    case 6 :
        eightBall = 'Outlook not so good';
        break;
    default : eightBall = 'Signs point to yes';
}

console.log(eightBall);
*/