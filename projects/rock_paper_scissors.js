// Rock, Paper, Scissors exercise from codecademy
/*
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Invalid choice: choose rock, paper or scissors.');
    }
}
console.log(getUserChoice('paper'));


// this can be done as if/else or swtich
//if else


const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    }
    else if (randomNum === 1) {
        return 'paper';
    }
    else if (randomNum === 2) {
        return 'scissors'
    }
}

console.log(getComputerChoice());

        //switch

        /*
        const getComputerChoice = () => {
            const randomNum = Math.floor(Math.random() * 3);
            switch (randomNum) {
                case 0 :
                    return 'rock';
                    break;
                case 1 :
                    return 'paper';
                    break;
                default :
                    return 'scissors';
                    break;
            }
        }
*/
/*
determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Wins';
        }
        else {
            return 'User Wins!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Wins';
        }
        else {
            return 'User Wins!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Wins';
        }
        else {
            return 'User Wins!';
        }
    }
}

const playGame = () => {
    let userChoice = getUserChoice('paper');
    console.log(`The user chooses ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`The computer chooses ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
*/



// Rock, Paper, Scissors: Me trying to design it from scratch where I always win.
// Got this to work, I always win.


/*
const randomNum = Math.floor(Math.random() * 3);

getComputerChoice = () => {

    if (randomNum === 0) {
        return 'rock';
    }
    else if (randomNum === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
    
}


const computerChoice = `The computer chooses ${getComputerChoice()}.`

console.log(computerChoice);

getUserChoice = () => {
    if (randomNum === 0) {
        return 'paper';
    }
    else if (randomNum === 1) {
        return 'scissors';
    }
    else if (randomNum === 2) {
        return 'rock';
    }
}

const userChoice = `The user chooses ${getUserChoice()}.`

console.log(userChoice);

determineWinner = () => {
    if (getComputerChoice() === 'rock' && getUserChoice() === 'paper') {
        return 'Paper beats rock.';
    }
    else if (getComputerChoice() === 'paper' && getUserChoice() === 'scissors') {
        return 'Scissors beats paper.';
    }
    else {
        return 'Rock beats scissors.';
    }
}

console.log(`${determineWinner()} Looks like the user won!`);
*/



// Not working. Example of trying to build rock, paper, scissors from scratch. Needs Work.


function getComputerChoice() {
    const randomNum = Math.floor(Math.random() *3);
    

    if (randomNum === 0) {
        return 'rock';
    }
    else if (randomNum === 1) {
        return 'paper';
    }
    else if (randomNum === 2) {
        return 'scissors';
    }
}



console.log(getComputerChoice());


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Invalid choice: choose rock, paper or scissors.');
    }
}




function determineWinner() {
    
    switch (userChoice) {
        case userChoice === 'rock' && computerChoice === 'scissors' :
            return console.log('user wins!');
            break;
        case userChoice === 'rock' && computerChoice === 'paper' :
            return console.log('computer wins!');
            break;
        case userChoice === 'paper' && computerChoice === 'rock' :
            return console.log('USER WINS!');
            break;
        case userChoice === 'paper' && computerChoice === 'scissors' :
            return console.log('COMPUTER WINS!');
            break;
        case userChoice === 'scissors' && computerChoice === 'paper' :
            return console.log('User Wins!');
            break;
        case userChoice === 'scissors' && computerChoice === 'rock' :
            return console.log('Computer Wins!');
            break;
        default : 'Please enter rock, paper or scissors.'
    }

}

function playGame () {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();


/* NOT working properly, tried switch statement above

function determineWinner(userChoice) {
    userChoice.toLowerCase();
    if (userChoice === getComputerChoice()) {
        return 'The game is a tie.'
    }
    else if (userChoice === 'rock') {
        if (getComputerChoice() === 'scissors') {
            return 'user wins!';
        }
        else if (getComputerChoice() === 'paper') {
            return 'computer wins!';
        }
    }
    else if (userChoice === 'paper') {
        if (getComputerChoice() === 'rock') {
            return 'USER WINS!';
        }
        else if (getComputerChoice() === 'scissors') {
            return 'COMPUTER WINS!';
        }
    }
    else if (userChoice === 'scissors') {
        if (getComputerChoice() === 'paper') {
            return 'User Wins!';
        }
        else if (getComputerChoice() === 'rock') {
            return 'Computer Wins!';
        }
    }
    else {
        return 'Please type rock, paper or scissors.'
    }
}

console.log(determineWinner('scissors'));

*/












