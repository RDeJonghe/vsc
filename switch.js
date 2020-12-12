// switch examples
// second example shows how you can use 'break' by excluding it

let day = 7;

switch (day) {
    case 1 :
        console.log('Monday');
        break;
    case 2 :
        console.log('Tuesday');
        break;
    case 3 :
        console.log('Wednesday');
        break;
    case 4 :
        console.log('Thursday');
        break;
    case 5 :
        console.log('Friday');
        break;
    case 6 :
        console.log('Saturday');
        break;
    default :
        console.log('Sunday')
        break;
}

let emoji = 'angry face';

switch (emoji) {
    case 'sad face' :
    case 'happy face' :
        console.log('yellow');
        break;
    case 'angry face' :
    case 'heart' :
        console.log('red');
        break;
    case 'eggplant' :
        console.log('purple');
        break;
}
