// GET AND SET (GETTERS AND SETTERS)

//GETTERS & SETTERS
// Getters and setters are methods on an object!
// get can be used return properties of an object
// get can be used with if/else conditional so you can show different things
// getters can perform action on data when calling it
// can use "this" with getters
// when calling get you don't actually say 'get', just use dot notation
// getters and setters cannot have same name as the function key name, (this is why underscore is also used)
// setters reassign the values of properties
// can use if/else to check to make sure the data type that is being entered to be set is correct (number, string)
// would do it like this: if (typeof newAge === 'number')
// setter methods you set up with parameters (what is entered in)
// to call a setter method you don't actually say 'set', just person.age = 41
// generally don't need parens () to call getters and setters
// I tried to do a get with the function keyword, doesn't seem to work, may need concise syntax with get

// How do getters differ from other object methods/functions

// make getters and setters and call these

// make regular get
// make get with if/else conditional

const PRODUCTS = {
  suppliers: {
    apple : {
      name: 'iphone',
      price: 1000,
      color: 'black',
      status: 'in stock',
      _quantity: 45,
      _sale: '10 percent'
    },
    samsung : {
      name: 'galaxy',
      price: 700,
      color: 'blue',
      status: 'in stock',
      _quantity: 100,
      _sale: '10 percent'
    }
  },
  get prices() {
    const priceArr = [
      this.suppliers.apple.price,
      this.suppliers.samsung.price
    ];
    return priceArr;
  },
  get brands() {
    return Object.keys(this.suppliers);
  },
  get samData () {
    return Object.values(this.suppliers.samsung);
  },
  reply: function () {
    return console.log('Hello World');
  },
  get quantity() {
    if(this.suppliers.apple.status === 'in stock' && this.suppliers.samsung.status === 'in stock') {
      return console.log(`Apple quanitity is ${this.suppliers.apple._quantity} and Samsung quantity is ${this.suppliers.samsung._quantity}.`);
    }
    else if(this.suppliers.apple.status === 'out of stock' && this.suppliers.samsung.status === 'in stock') {
      return console.log(`Apple is ${this.suppliers.apple.status} and Samsung quantity is ${this.suppliers.samsung._quantity}.`);
    }
    else if(this.suppliers.apple.status === 'in stock' && this.suppliers.samsung.status === 'out of stock') {
      return console.log(`Apple quantity is ${this.suppliers.apple._quantity} and Samsung is ${this.suppliers.samsung.status}.`);
    }
    else{
      return console.log('Totally out of stock');
    }
  },
  set sale(percent) {
    if(typeof percent === 'string') {
      this.suppliers.apple._sale = percent;
      this.suppliers.samsung._sale = percent;
    }
    else {
      console.log('Please type in a percent off');
    }
  } 
}









//EXAMPLE
/*
const chargers = {
  _down : '1st and goal',
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
  },
  get goTo() {
    if(this._down === '1st and goal') {
      return `coach says ${this.coaches.assistant.strategy}`;
    }
    else{
      return 'trick play';
    }
  },
  set down(info) {
   
    return this._down = info;

  }
}
*/

// See this example of how to call a getter.
// You can't use parens like in second console.log. So it's not like calling some things with .notation
// where you use parens. Don't call getters and setters with parens, error message says not a function
// Note how you can call the first option with brackets and a keyword, looks like different sytnax

/*
let tempObj = {
  _num: 22,
  get num() {
      return this._num;
  }
};

console.log(tempObj['num']);
console.log(tempObj.num());
*/

// note this example from codecademy, can add without really having a setter method
// you could put in a setter method for this, but gotta ask why
let bikes = {
  schwinn: 'blue',
  trek: 'black'
}

bikes['specialized'] = 'red';
bikes.huffy = 'silver';
console.log(bikes);



const team = {
  _players : [
    {
    firstName : 'Josh',
    lastName : 'Allen',
    age : 24
  },
  {
    firstName : 'Devin',
    lastName : 'Singletary',
    age : 23
  },
  {
    firstName : 'Stefon',
    lastName : 'Diggs',
    age : 27
  }
],
  _games : [
    {
      opponent : 'Steelers',
      teamPoints: 24,
      opponentPoints : 15
    },
    {
      opponent : 'Rams',
      teamPoints: 35,
      opponentPoints : 30
    },
    {
      opponent : 'Patriots',
      teamPoints: 24,
      opponentPoints : 20
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(first, last, edad) {
    const player = {
      firstName : first,
      lastName : last,
      age : edad
    }
    return team._players.push(player);
  },
  addGame(name, ourPoints, theirPoints) {
    const newGame = {
      opponent: name,
      teamPoints: ourPoints,
      opponentPoints: theirPoints
    }
    return team._games.push(newGame);
  }
}
