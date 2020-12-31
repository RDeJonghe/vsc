// Regex - Regular Expression practice

// A regex looks like a string written between a pair of forward-slash characters instead of quotes, e.g., /bob/

// JavaScript uses RegExp objects to store regex: note the spelling and case. Like other objects, RegExp objects can invoke methods. The method test, for instance, returns a boolean value based on whether a string argument matches the regex

// Examples with .test()

let team = 'Tigers';

console.log(/t/.test(team));
console.log(/T/.test(team));
console.log(/ers/.test(team));

if (/Tig/.test(team)) {
  console.log('Has "Tig" in it');
}
else {
  console.log('Doesnt have "Tig" in it');
}


// Examples with .match()
//  the match method for strings comes in handy. This method takes a regex as the argument and returns an array that describes the match.

console.log("bobcat".match(/x/));         // No match
console.log("bobcat".match(/[bct]/g));    // Global match
console.log("bobcat".match(/b((o)b)/));   // Singular match with groups

let hockeyTeam = 'Sabres';

console.log(hockeyTeam.match(/[aet]/g));

let regArr = hockeyTeam.match(/(a(b)re)/);
console.log(regArr);
console.log(regArr.index);
console.log(regArr.input);



