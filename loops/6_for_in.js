// for... in loop

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
  
  // for in loop examples
  
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
  for(let key in chargers.players) {
    console.log(key);
    console.log(`${chargers.players[key].name}'s favorite play is ${chargers.players[key].favPlay}`);
  }
  */  


  // B. FOR...IN USE TO LOOP OVER OBJECT. USE THIS OBJECT


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

console.log(chargers.goTo);


// PRACTICE USING LOOPS TO ITERATE THROUGH MIXED ARRAYS AND OBJECTS - ARRAY WITH OBJECTS, OBJECT WITH ARRAY, ETC.