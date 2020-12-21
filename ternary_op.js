// Ternary Operator
// Ternary means 3 since there are three parts: the condition you check ? what happens if true : what happens if false

let num = 2;

num === 7 ? (console.log('Lucky!')) : (console.log('Bad'));

//Can use ternary operator to assign a value to a variable
/*
let status = 'offline'

let color;

status === 'online' ? color = 'green' : color = 'red';

console.log(color);
*/


// same thing done like this

let status = 'online'

let color = status === 'online' ? 'green' : 'red';

console.log(color);


// Look at alternative way of writing a ternary operator. Sets up variable to the result of it
// let isOk = (foo || bar) ? true : false;


// example of using a ternary operator to return values:
//return foo() ? 'bar' : qux();
// above is more concise than this. Both do the same thing.
/*
if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/
