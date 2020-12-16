// functions practice
// functions allow us to write reusable, modular code
// with them we define a "chunk" of code that we can use at a later time
// have to always define the function and the run it later (except when it's a built in method/function
// like .toUpperCase())


// 1. Write a function declaration without parameters using the function keyword and call the function.
// Sometimes you don't need to use return, without return it will console, but says undefined.
// If you return it won't say undefined.
// Write a function w/o parameters where you ++ a number



// 2. Write a function declaration with parameters. Write a function where you add the two parameters.



// 3. Write a function declaration with a default parameter. Function can multiply parameter.
// Can do this also with 2 default parameters.



// 4. Write a function using return and that also uses an if statement. Check the different returns.
// Can do a function where the parameter is age that you enter, function checks age and consoles a different
// result
/*
function club (age) {
  if(age >= 21) {
    return 'IN';
    
  }
  else if(age >= 18) {
    return 'IN if a hot chick';
   
  }
  else if(age < 18) {
    return 'Not IN';
  
  }
  else {
    return 'what is your age?';
  }
}

console.log(club()); */




// 5. Write an example using a helper function (when you use return value of a function
// inside of another function).
// For now practice with the codecademy example of celsius conversion to fahrenheit
// multiply by 9/5 and add 32


// 6. Write a function expression that has an anonymous function (this can be stored in a variable
// to refer to it. Write it with arguments - to call it use the variable and arguments)
// Can do an example where you take a balance and add paycheck to it. Anonymous function inside
// a variable. To call it write the variable() with the arguments


// 7. Write a function expression (anonymous with variable) using arrow syntax
// Can do price of a product, enter in product name and will return name and price
// For these need to use const and the name before arrow syntax (check to see if you always
// use const or sometimes use let)





// 8. Write concise body arrow functions with 0, 1 and 2+ parameters. Write a single line
// block with implicit return.
// For 2 parameters can do dimension, for 1 parameter can do a pricing calculation
// can also think about doing currency calculations
// for a project do an estimation calculator for say roofing or flooring, width * height plus 
// another parameter for choosing a product, if statement to go through all the pricing options
// in codecademy all examples with concise arrow functions use const, so they also seem anonymous


          
// 9. using functions show how global and local scope works. Show how you can 
// console.log global scoped variables outside, but can't console.log local scoped
// variables outside


//work with this, see if you chnage something in a function it might change it outside,
// so distinction between inside and outside is important. Maybe because of pass by refernece
// maybe functions change value despite of global/local scope




// from Udemy course
// Dice Roll Function

/*
function rollDie () {
  let roll = Math.ceil(Math.random() * 6);
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for(let i = 0; i < numRolls; i++) { // since i starts at 0 it is < numRolls
    rollDie();                        // can also make it i = 1 and <= numRolls
  }
}

throwDice(6);
*/

// Note: with functions if a parameter is left blank when you call the function JS gives it a value
// of undefined.

/*
function add(x, y) {
  let result = x + y;
  return result
}

console.log(add(3,2));
*/

// Can only return 1 thing from a function, only be one value (you can have multiple return statements
// though when using if/else, but only one value is hit on and returned). Return statements end function execution

// note for Boolean methods a standard naming convention uses "is" so for example function isPurple
// you use "is" because it checks if it's true or not.

// This is a boolean expression, this is shorter than an if/else statement and checks the same thing
// This will check for true or false
/*
function isPurple(color) {
  return color.toLowerCase() === 'purple' || color.toLowerCase() === 'lilac';
}

//console.log(isPurple('blue'));

// can also use a function to loop over an array

function containsPurple(arr) {
  for(let element of arr) {
    if(element === 'purple' || element === 'magenta') {
      return true;
    }// if there were an else after if, it would hit on the first run through and go to false, so return
    // moved below
  }
  return false; // note where this return is, it's outside of the loop so it can loop through all elements
}

console.log(containsPurple(['blue', 'pink', 'purple']))
*/


// Example from Udemy course
// Write a isValidPasswordFunction
// accepts 2 arguments: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met return true
// otherwise return false

// in this example he "reverses logic", easier syntax to check if any one of the things is false
// did this instead of using && and checking if everything is true or nesting a bunch of if statements

// note he uses multiple if statements instead of doing if/else
// note checks for indexOf ' ' the space character. Checks if it = -1. If a space is not 
// in the password it will evaluate to -1, that's what we want. So we check to see if it doesn't = that
// with this it could also be done with setting variables and checking the variables

function isValidPassword(password, username) {
  if(password.length < 8) {
    return false;
  }
  if(password.indexOf(' ') !== -1) {
    return false;
  }
  /*
  if(password.indexOf(username) !== -1) { // can use indexOf with multiple characters
    return false;
  }
  */
  if(password.includes(username)) { // this also works
    return false;
  }

 return true;
}

// can also write like this with or statements, but still checking False instead of true
function isValid(password, username) {
  if(
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.includes(username)
  ) {
  return false;
  }
  return true;
}

// can also write with variables
/*
function Valid(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.includes(username);
  if(tooShort || hasSpace || tooSimilar) return false; // note {} not needed after if in this case
  return true;
}
*/

// can also switch this with not ! operator
function valid(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.includes(username);
  if(!tooShort && !hasSpace && !tooSimilar) return true; // note && is needed
  return false;
}
