// Make a jukebox program that randomly selects a genre and a song.
// Use an object with nested arrays to practice accessing those.
// Make the arrays different lengths to test that I'm getting correct .length

let songs = {
  motown  : [
    "Ain't Too Proud to Beg",
    "You Can't Hurry Love",
    'What Becomes of the Broken Hearted',
    "Can't Help Myself",
    'This Old Heart of Mine'
  ],
  pop60s  : [
    "I'm a Believer",
    'Brown Eyed Girl',
    'Under the Boardwalk',
    'Sweet Caroline',
    'The Twist',
    'Stand By Me'
  ],
  pop50s  : [
    'Rock Around the Clock',
    'Why Do Fools Fall In Love',
    "Rockin' Robin",
    'Johnny B. Goode'
  ],
  beatles : [
    'Yesterday',
    'In My Life',
    'Hey Jude'
  ]
};

let genre;

let genreArray = [];

for (let key in songs) {
  genreArray.push(key);
}

function getGenre() {
  let randomEl = Math.floor(Math.random() * genreArray.length);
  if (randomEl === 0) {
    return (genre = genreArray[0]);
  } else if (randomEl === 1) {
    return (genre = genreArray[1]);
  } else if (randomEl === 2) {
    return (genre = genreArray[2]);
  } else {
    return (genre = genreArray[3]);
  }
}

getGenre();

function getSong() {
  let randomEl = Math.floor(Math.random() * songs[genre].length);
  return songs[genre][randomEl];
}

console.log(getSong());
