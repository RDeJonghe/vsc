// Sleep Calculator Example from Javascript

/*
getSleepHours = day => {
    switch (day) {
        case 'Monday' :
            return 8;
            break;
        case 'Tuesday' :
            return 7.5;
            break;
        case 'Wednesday' :
            return 8;
            break;
        case 'Thursday' :
            return 7;
            break;
        case 'Friday' :
            return 9;
            break;
        case 'Saturday' :
            return 8;
            break
        case 'Sunday' :
            return 6;
            break;
    }
}

const getActualSleepHours = () => 
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');

console.log(`actual sleep hours are: ${getActualSleepHours()}`);

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

console.log(`Ideal sleep hours are: ${getIdealSleepHours()}`);

const sleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    return console.log(actualSleepHours - idealSleepHours);
}

sleepDebt();
*/


//Trying to remake sleep debt calculator

let monH = 8
let tueH = 8
let wedH = 8
let thrH = 8
let friH = 8
let satH = 8
let sunH = 10.5

const getActualSleepHours = () => {
    return monH + tueH + wedH + thrH + friH + satH + sunH;
}

console.log(getActualSleepHours());

let idealHours = 8

const getIdealSleepHours = () => {
    return idealHours * 7;
}

console.log(getIdealSleepHours());

const sleepDebt = () => {
    return getActualSleepHours() - getIdealSleepHours();
}

const targetHours = () => {
    if (sleepDebt() < 0) {
        return console.log(`I missed my target by ${sleepDebt()} hours.`);
    }
    else if (sleepDebt() === 0) {
        return console.log('I hit the target.');
    }
    else if (sleepDebt() > 0) {
        return console.log(`I exceeded the target by ${sleepDebt()} hours.`);
    }
}

targetHours();







