// Objects practice

// 1. Make an object literal with multiple key-value pairs and console.log the values
// using dot notation and brackets. Can console.log multiple things to show multiple values

/*
let staff = {
  personal: [
    {
      name: 'Mike',
      age: 23,
      citizen: 'Thai'
    },
    {
      name: 'Yvan',
      age: 31,
      citizen: 'France'
    },
    {
      name: 'Diego',
      age: 39,
      citizen: 'Mexico'
    }
  ],
  jobs: [
    {
      name: 'Mike',
      job: 'Safety Manger'
    },
    {
      name : 'Yvan',
      job: 'Accountant'
    },
    {
      name: 'Diego',
      job: 'Banker'
    }
  ]
}

console.log(staff.personal);
*/

// look at another way of formatting
/*
let spaceship = {
  passengers: [
      {
        name : 'Joe',
        age : 40,
        ocupation : 'Teacher'
      },
      {
        name : 'Sally',
        age : 40,
        ocupation : 'Dentist'
      },
      {
        name : 'Judy',
        age : 20,
        ocupation : 'Student'
      },
  crew : [
    {
      name: 'Mike',
      job: 'Captain'
    }
  ]
  ]
}
console.log(spaceship.passengers[0].name);
*/

/*
console.log(`${staff.jobs[2]['job']} and his name is ${staff.jobs[2].name} and his citizenship is ${staff.personal[2].citizen}`);

let ob = {
  day: 'Friday',
  'wake up': 'a little late',
  study: 'yes',
  laundry: 'maybe'
}

console.log(ob.day, ob['wake up'], ob.study);
*/



// 2. Property Assignment - arrays are mutable. a. Change an existing key-value with a new value
// b. Add a totally new key-value pair. c. delete a key-value pair


// 3. Methods - when data stored on object is a function, that is called a method.
// Make methods with key-value pairs: key is method name, value is anonymous function
// function can be made regularly or with ES6 syntax omit colon and function keyword
// call method with dot notation, method name and ()
// Make a simple method that console.logs a message. Then call that method
// Do this with regular syntax and concise syntax









// Example from codecademy

/*
let spaceship = {
  passengers: [
      {
        name : 'Joe',
        age : 40,
        ocupation : 'Teacher'
      },
      {
        name : 'Sally',
        age : 40,
        ocupation : 'Dentist'
      },
      {
        name : 'Judy',
        age : 20,
        ocupation : 'Student'
      }
  ],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

console.log(spaceship.passengers[0][1].name);
*/

// 4. Write an object, and also a variable that sets a value equal to a key in the object.
// then with bracket notation you can use the variable name - it's value will match with
// the key and it will return the value pair of the object
// Cool example from udemy course. You can pass in a variable in the bracket notation and
// the variable value will be used to look for a match of the key in the Object
// also look at how you can search example to show how JS works, not that you would
//want to do this
/*
const PALLETE = {
  red: 'E5763',
  white: 'E4958',
  blue: 'E9834',
  redCost: 10,
  blueCost: 15
}

PALLETE.yellow = 'E6348';
PALLETE['random color'] = 'E4827';
PALLETE.blue = 'LD3827';
PALLETE.redCost += 2;
PALLETE['blueCost']++;
delete PALLETE.red;
console.log(PALLETE);
console.log(PALLETE.redCost);
console.log(PALLETE.blueCost);

//let mysteryColor = 'blue';

//console.log(PALLETE[mysteryColor]);
//console.log(PALLETE['wh' + 'it' + 'e']);
*/


// Nested Objects, can nest objects in an object, or arrays in an object also
/*
const STUDENT = {
  firstName: 'Jack',
  lastName: 'Jackson',
  strengths : ['Music', 'Art'],
  exams : {
    midterm : 91,
    final : 97
  }
}

let avg = (STUDENT.exams.midterm + STUDENT.exams.final) / 2;

console.log(avg);
console.log(STUDENT.firstName);
console.log(STUDENT.strengths[0]);

*/
// Objects in an array. Common because you get top level order plus objects
/*
const SHOPPING_CART = [
  {
    product: 'Monopoly',
    price: 11.99,
    quantity: 1
  },
  {
    product: 'Jenga',
    price: 9.99,
    quantity: 2
  },
  {
    product: 'Mouse Trap',
    price: 15.00,
    quantity: 1
  }
]

console.log(SHOPPING_CART[1].product);
*/


// Example of reference types and how they can refer to the same thing in memory
// Notice how both are updated, it's becasue they point to the same spot in memory

/*
const SIZE = {
  small: 45,
  medium: 55
};

const SIZE2 = SIZE;
SIZE2.large = 65;

console.log(SIZE2);
console.log(SIZE);

// Example of reference types, equality between arrays and equality between objects,
// it's storing a reference to it so it doesn't come out as equal (even though contents
// can be equal)

let nums = [1, 2, 3];
let nums2 = [1, 2, 3];

let nums3 = nums;

console.log(nums === nums2); // both evaluate to false these compare the reference #
console.log(nums == nums2);

// So JS makes a reference # for each and compares the number in these cases above,
// the numbers are different so not equal

// this one will evaluate to true because they are set to the same reference # 

console.log(nums === nums3);
*/



// Example of checking an object what works and doesn't because of reference types
/*
const USER = {
  userName: 'Mike967',
  email: 'mikey2000@testmail.com',
  notifications: []
}

  // This doesn't work: if(user.notifications === []) it's a reference type doesn't hold the
  // values. note in console [] === [] is FALSE!

  // This works:
if(USER.notifications.length === 0) {
  console.log('No new notifications');
}

  //This can also work since [] empty is a falsey value, carefuL with Not operator
if(!USER.notifications.length) {
  console.log('NO NEW NOTIFICATIONS');
}
*/


// Pass by reference example. A function can modify the contents and add, don't have to 
// add first to the object. In this example see how it can add the disabled property
// in a function and then shows up in console.log
/*
    let spaceship = {
      'Fuel Type' : 'Turbo Fuel',
      homePlanet : 'Earth'
    };

    // Write your code below

    function greenEnergy(obj) {
      obj['Fuel Type'] = 'avocado oil';
    }

    function remotelyDisable(obj2) {
      obj2.disabled = true;
    }

    greenEnergy(spaceship);
    remotelyDisable(spaceship);

    console.log(spaceship);
*/


// for... in loop (wants an object, only will work with object well - techincally you can
// use with an array but not a lot of good reason to.) Arrays are kind like objects, it's just they
// have index numbers that work like keys, they don't have key names. Order of loop in for... in
// isn't always the same, that's why it doesn't work well with arrays where order is most important
// in the syntax it looks like you have to set a variable, can name it as 'prop' or something
// for property, some people name it 'key' or 'k'. It looks like since properties aren't ordered
// like in keys this variable is just a stand in for 'every key', it's kinda like
// for 'every key' in 'the object that you picked'
// also looks like you have to use bracket notation and not dot notation, examples when
// console.log won't work with dot notation

// for loop examples
/*
const jeopardyWinnings = {
  regularPlay : 20000,
  finalRound: 5000,
  challenge: 10000,
}

// this will just show the keys
for(let prop in jeopardyWinnings) {
  console.log(prop);
}
// doesn't really matter what you name it, both work
for(let key in jeopardyWinnings) {
  console.log(key);
}
//this will show just the values
for(let key2 in jeopardyWinnings) {
  console.log(jeopardyWinnings[key2])
}
// this will console.log all info, showing each key pair (on two lines though)
for(let key3 in jeopardyWinnings) {
  console.log(key3);
  console.log(jeopardyWinnings[key3]);
}

// this will add them all together, so it works like a loop and can do things
let total = 0;
for(let key4 in jeopardyWinnings) {
  total += jeopardyWinnings[key4];
}
console.log(`Total jeopardy winnings are ${total}`);
*/

/*

const gnr = {
  band: {
    singer: {
      name: 'Axl',
      drug: 'Whiskey'
    },
    'lead guitar': {
      name: 'Slash',
      drug: 'Cocaine'
    },
    bass: {
      name: 'Duff',
      drug: 'Heroin'
    },
    drums: {
      name: 'Steven',
      drug: 'Weed'
    }
  }
}

for(let k in gnr.band) {
  console.log(`${gnr.band[k].name}'s favorite drug is ${gnr.band[k].drug}`);
}

*/

/*
const chargers = {
  players : {
    qb : {
      name : 'Philip Rivers',
      number : 17,
      favPlay : 'Post',
    },
    rb1 : {
      name : 'LaDanian Tomlinson',
      number : 21,
      favPlay : 'Sweep'
    },
    rb2 : {
      name : 'Darren Sproles',
      number : 32,
      favPlay : 'Screen'
    },
    wr : {
      name : 'Vincent Jackson',
      number : 83,
      favPlay : 'Stop and Go'
    }
  },
  coaches : {
    head : {
      name : 'Marty Schottenheimer',
      strategy : 'Martyball'
    },
    assistant : {
      name : 'Joe Jones',
      strategy : 'Give the ball to L.T.'
    }
  },
  favPlay21: function () {
    return this.players.rb1.favPlay;
  },
  favPlay17() {
    return this.players.qb.favPlay;
  }
}

console.log(chargers.favPlay21());
console.log(chargers.favPlay17());
*/


/*
for(let key in chargers.players) {
  console.log(key);
  console.log(`${chargers.players[key].name}'s favorite play is ${chargers.players[key].favPlay}`);
}
*/  





// this - used to access object properties, only used with objects
// when using this - DON'T USE WITH ARROW FUNCTIONS, DOESN'T WORK HAS TO DO WITH SCOPE

/*
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet();

const COUGAR = {
  dietType: 'flesh',
  makeSound() {
    console.log('rawr');
  },
  diet() {
    console.log(COUGAR.dietType);
  }
}
COUGAR.diet();
*/



// FACTORY FUNCTIONS
/*
const carFactory = (brand, model, color, aura) => {
  return {
    name : brand,
    type : model,
    color : color,
    style : aura,
    fast() {
      return 'This car goes fast'
    } 
  }
}

const firstCar = carFactory('Buick', 'Century', 'Silver', 'Reliable');
const currentCar = carFactory('Ford', 'Escape', 'Silver', 'Typical SUV');

console.log(firstCar.color, firstCar.style);
console.log(firstCar.fast());

console.log(currentCar.name, currentCar.type);
console.log(currentCar.fast());
*/

// DESTRUCTURING AND PROPERTY VALUE SHORTHAND
// is used when making factory functions, is more concise and saves repetition
// instead of having to type in the entire key value pair, you just type in the parameters,
// so the name of the parameters is the name of all of the keys, when used the values align with the keys
// Rememeber factory functions don't contain any values themselves they just make values
// Have to set a variable equal to the factory function and pass in parameters
// Remember have to return an object inside the factory function
// PRACTICE: Make a factory function using destructuring and put some values in and log those values




// DESTRUCTURED ASSIGNMENT WITH OBJECTS AND VARIABLES
// used to extract key value paris from objects and save to a variable. In cases like these, the variable
// can use the key name and the variable is equal to the value
// you can use normal syntax to set the variable equal to this or use this "destructured assignment"
// shorter syntax, put key in {} curly braces and set it = to name of object

const LT_STATS = {
  yards: 1700,
  tds: 31,
  num: 21
}


console.log(Object.entries(LT_STATS));


// MAKE AN OBJECT THAT ACTS LIKE AN ARRAY AND IS ITERABLE WITH ARRAY SYNTAX. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement.

// Note: Our array-like object isn't a perfect mimic of a regular JavaScript array, however. In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.




// ANSWER 
/*
let myArray = {
  0 : 'Ryan',
  1 : 'De Jonghe',
  2 : 41,
  length : 3

};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
console.log(myArray[0]);
*/

