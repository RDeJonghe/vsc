// functions project - an estimate calculator for construction
// calcluate price based on dimensions of a room, factoring in the product and date
// to see if there is a sale
// avg price to install carpeting is 3.50 - 11.00 per square foot


/*

let catalog = [
  {
    name : 'regular carpet',
    catPrice : 6.75,
    catNum : 101
  },
  {
    name : 'cheap carpet',
    catPrice : 3.50,
    catNum : 102
  },
  {
    name : 'expensive carpet',
    catPrice : 11.00,
    catNum : 103
  }
];

function checkMonth (month) {
  let lowerMonth = month.toLowerCase();
  switch (lowerMonth) {
    case 'january' :
      return 0;
      break;
    case 'february' :
      return 1;
      break;
    case 'march' :
      return 2;
      break;
    case 'april' :
      return 3;
      break;
    case 'may' :
      return 4;
      break;
    case 'june' :
      return 5;
      break;
    case 'july' :
      return 6;
      break;
    case 'august' :
      return 7;
      break;
    case 'september' :
      return 8;
      break;
    case 'october' :
      return 9;
      break;
    case 'november' :
      return 10;
      break;
    case 'december' :
      return 11;
      break;
    default : console.log('Please enter a month.')
  }
}


function priceCalc (length, width, currentMonth, prodNum) {
  let dim = length * width;
  let estimate;
  let date = checkMonth(currentMonth);
  let monthlyRate;
  let price;


  if ((date >= 0 && date <= 2) || date === 11) {
    monthlyRate = .75;
  }
  else if (date === 3 || date === 4) {
    monthlyRate = .95
  }
  else if (date >= 5 && date <= 8) {
    monthlyRate = 1.10;
  }
  else {
    monthlyRate = 1;
  }
  

  if (prodNum === catalog[0].catNum) {
    price = catalog[0].catPrice;
  }
  else if (prodNum === catalog[1].catNum) {
    price = catalog[1].catPrice;
  }
  else if (prodNum === catalog[2].catNum) {
    price = catalog[2].catPrice;
  }

  estimate = dim * price * monthlyRate;
  console.log(estimate);
}

priceCalc(10, 30, 'April', 103);

*/



// Can do same thing comparing to the indexes of a calendar, instead of switch statement




let catalog = [
  {
    name : 'regular carpet',
    catPrice : 6.75,
    catNum : 101
  },
  {
    name : 'cheap carpet',
    catPrice : 3.50,
    catNum : 102
  },
  {
    name : 'expensive carpet',
    catPrice : 11.00,
    catNum : 103
  }
];

let calendar = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];




function priceCalc (length, width, currentMonth, prodNum) {
  let dim = length * width;
  let estimate;
  let lowerMonth = currentMonth.toLowerCase();
  let monthlyRate;
  let price;
  let date;

  if (lowerMonth === calendar[0] || lowerMonth === calendar[1]) { // works like this also, can expand.
    console.log('works like this')
  }


  if ((date >= 0 && date <= 2) || date === 11) {
    monthlyRate = .75;
  }
  else if (date === 3 || date === 4) {
    monthlyRate = .95
  }
  else if (date >= 5 && date <= 8) {
    monthlyRate = 1.10;
  }
  else {
    monthlyRate = 1;
  }
  

  if (prodNum === catalog[0].catNum) {
    price = catalog[0].catPrice;
  }
  else if (prodNum === catalog[1].catNum) {
    price = catalog[1].catPrice;
  }
  else if (prodNum === catalog[2].catNum) {
    price = catalog[2].catPrice;
  }

  estimate = dim * price * monthlyRate;
  console.log(estimate);
}

priceCalc(10, 30, 'January', 103);




















