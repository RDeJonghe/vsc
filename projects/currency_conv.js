// example of functions and if/else for currency conversion calculator
// Takes USD and converts to Baht
// conversion fee depends on amount converted


function conversion(num) {
    return num * 30.28;
}
function toConvert(usd) {
    if (usd >= 1000) {
        return console.log(conversion(usd) - 30);
    }
    else if (usd >= 100) {
        return console.log(conversion(usd) - 60);
    }
    else if (usd >= 10) {
        return console.log(conversion(usd) - 90);
    }
    else {
        return console.log('$10 is the minimum conversion, please enter in a number greater than 10.');
    }
}

toConvert(20);


// Another similar example USD to Thai Baht, fee taken out after conversion

/*

const convert = function(usd) {
    let conversion = usd * 30.28;
    let fee = conversion * .05;
    let total = conversion - fee;
    return total;
}

console.log(convert(100));

*/

// thrid example USD to Thai Baht, fee taken out of USD before conversion
/*

const convert = function(usd) {
    let fee
    if (usd >= 1000) {
        fee = usd * .04;
    }
    else if (usd >= 100) {
        fee = usd * .05;
    }
    else {
        fee = usd * .06;
    }
    let conversion = (usd - fee) * 30.28;
    return conversion;
}

console.log(convert(100));

*/
// same as above using switch statements

/*
const convert = function(usd) {
    let fee;
    switch (usd) {
        case usd >= 1000 :
            fee = usd * .04;
            break;
        case usd >= 100 : 
            fee = usd * .05;
            break;
        default :
            fee = usd * .06;
            break;       
    }
    let conversion = (usd - fee) * 30.28;
    return conversion;
}

console.log(convert(2000))
*/

// Conversion example with arrow function syntax CAD to USD

const cadConv = (cad) => {
    let total = cad * .76;
    return total;
}
console.log(cadConv(500));

// Can also be done as a single line block with implicit return

const yenConv = yen => yen * .0096;
console.log(yenConv(20000));

// can also do arrow function with no paramaters, just include empty parens
let depreciation = 9000 * .01
const monthlyCosts = () => {
    let total = 525 + 125 + 60 + 250 + depreciation;
    return total;
}
console.log(monthlyCosts());

// can refactor ternary statemnts to single line block in a function. Have implicit return, no parens needed

let weather;
const goOutside = weather => weather === 'Sunny' ? 'Go outside' : 'Stay inside';

console.log(goOutside('Sunny'));




