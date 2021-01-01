// Nested If Statements
// My example Scholarship awards
// Can be solved with more simple code (first example) or with nested if statements (second example)
// If a student has a GPA >= 3.7 and a SAT >= 1400 or ACT >= 33 they get $10,000
// If GPA >= 3.3 and SAT >= 1100 or ACT >= 29 they get $5,000
// If GPA is >= 3.0 and SAT >= 900 or ACT >= 26 they get $1,000
// Otherwise no award


let gpa = 3.45;
let sat = 1140;
let act;
let elite = 'You are awarded the elite scholarship of $10,000';
let academic = 'You are awarded the academic scholarship of $5,000';
let basic = 'You are awarded the basic scholarship of $1,000';
let noAward = 'You are not awarded a scholarship';

// example 1 cleaner solution
/*
if (gpa >= 3.7 && (sat >= 1400 || act >= 33)) {
    console.log(`${elite}`);
}
else if (gpa >= 3.3 && (sat >= 1100 || act >= 29)) {
    console.log(`${academic}`);
}
else if (gpa >= 3.0 && (sat >= 900 || act >= 26)) {
    console.log(`${basic}`);
}
else {
    console.log(`${noAward}`)
};
*/

// example 2 nested if statements

if (gpa >= 3.7) {
    if (sat >= 1400 || act >= 33) {
        console.log(`${elite}`);
    }
    else if (sat >= 1100 || act >= 29) {
        console.log(`${academic}`);
    }
    else if (sat >= 900 || act >= 26) {
        console.log(`${basic}`);
    }
    else {
        console.log(`${noAward}`);
    }
}
else if (gpa >= 3.3) {
    if (sat >= 1100 || act >= 29) {
        console.log(`${academic}`);
    }
    else if (sat >= 900 || act >= 26) {
        console.log(`${basic}`);
    }
    else {
        console.log(`${noAward}`);
    }
}
else if (gpa >= 3.0) {
    if (sat >= 900 || act >= 26) {
        console.log(`${basic}`);
    }
    else{
        console.log(`${noAward}`);
    }
}
else {
    console.log(`${noAward}`);
}
