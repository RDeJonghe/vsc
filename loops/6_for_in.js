// for... in loop. This loops over keys of object. Try to understand [] in this syntax.
  
  const jeopardyWinnings = {
    regularPlay : 20000,
    finalRound: 5000,
    challenge: 10000,
  }

// 1. Loop through just the keys in jeopardy winnings and print these

/*
for(let key in jeopardyWinnings) {
  console.log(key);
}
*/

// 2. Loop through just the values in jeopardy winnings and print these

/*
for(let key in jeopardyWinnings) {
  console.log(jeopardyWinnings[key]);
}
*/

// 3. Loop through and show round and winnings (on two lines)

/*
for(let key in jeopardyWinnings) {
  console.log(key);
  console.log(jeopardyWinnings[key]);
}
*/

// 4. Add all Jeopardy winnings together for a total (35k)


// Answer
/*
let total = 0;
for(let key in jeopardyWinnings) {
  total += jeopardyWinnings[key];
}
console.log(total);
*/

 
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

// 5a. Use dot notation and for in to console.log the keys of the singer object

/*
for(let key in gnr.band.singer) {
  console.log(key);
}
*/

// 5b. Use dot notation and for in to console.log the values of the singer object



/*
for(let key in gnr.band.singer) {
  console.log(gnr.band.singer[key]);
}
*/

// 5. Use a for... in loop to say the name of each person and their favorite drug.



// Answer
/*
  for(let k in gnr.band) {
    console.log(`${gnr.band[k].name}'s favorite drug is ${gnr.band[k].drug}`);
  }
*/
  


const chargers = {
  down : '1st and goal',
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
    if(this.down === '1st and goal') {
      return `coach says ${this.coaches.assistant.strategy}`;
    }
    else{
      return 'trick play';
    }
  } 
}

// 6. Use for in to say each players name and their favorite play
  
// Answer
/*
for(let key in chargers.players) {
  console.log(key);
  console.log(`${chargers.players[key].name}'s favorite play is ${chargers.players[key].favPlay}`);
}
*/
  
// NOTES:

// FOR... IN WITH OBJECTS
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
  
  // FOR IN loops over the keys... use the square brackets to get to the value.
