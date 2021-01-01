// team project from codecademy object lesson

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

team.addPlayer('Cole', 'Beasley', 30);

console.log(team.players);

team.addGame('Jets', 21, 17);

console.log(team.games);
console.log(team._games);

// Loop through array to show elements that are objects
/*
for(let element of team._players) {
  console.log(element);
}
*/


// Loop through those objects in array
// need i since index is important, it's in an array
// when index isn't important can use for...in
for(let i = 0; i < team._players.length; i++) {
  console.log(team._players[i]);
}







