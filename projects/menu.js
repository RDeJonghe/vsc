//MENU PROJECT FROM CODECADEMY


// is it good practice to use same name for getter and setter methods? Only difference is putting
// in data for an argument right?
// Ask about scope pollution also?

// calling getter and setter methods varies!!! I made a mistake with this
// for setter methods set it equal with = sign, not putting value in parens
// I'm using setter methods wrong, to call method:
// menu.mains = 'put in data here' NOT menu.mains('put in data here')
// get courses method is not really needed for this to work, it looks like you can use it to show
// info but that it's not really needed




const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) { // setter methods here set it entirely not just adding a new item
    this._courses.appetizers = appetizers;
  },
  set mains(mains) { // in example he uses same word in parens, why isn't this scope pollution? reusing?
    this._courses.mains = mains;
  },
  set desserts(desserts) { // setter methods don't seem to work, i have trouble calling them.
    this._courses.desserts = desserts;
  },
  get courses() {  // is this necessary? Is it used anywhere else? Or just a getter method to see info?
    return {
      appetizers : this._courses.appetizers,
      mains : this._courses.mains,
      desserts : this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) { // this pushes a new object into the existing array
    const dish = { // neeed to call it with menu.add... because it is inside the variable
      name : dishName,
      price : dishPrice
    }
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName] // how this relates to the return I don't understand
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]; // will return appetizers[0], appetizers[2] randomly when appetizers is passed in
    // so it needs 'appetizers', 'mains', 'desserts' to be passed in to work. Then it generates random index
    // and picks one of them
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price
    return `your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the total price is ${totalPrice}.`
  }
}

menu.addDishToCourse('appetizers', 'salad', 4.99);
menu.addDishToCourse('appetizers', 'wings', 6.99);
menu.addDishToCourse('appetizers', 'fries', 4.99);

menu.addDishToCourse('mains', 'pad thai', 12.99);
menu.addDishToCourse('mains', 'massaman curry', 13.99);
menu.addDishToCourse('mains', 'shrimp fried rice', 9.99);

menu.addDishToCourse('desserts', 'ice cream', 4.99);
menu.addDishToCourse('desserts', 'cake', 5.99);
menu.addDishToCourse('desserts', 'pie', 5.99);



const meal = menu.generateRandomMeal();
console.log(meal);

menu.addDishToCourse('appetizers', 'potato skins', 5.50);

console.log(menu.getRandomDishFromCourse('mains'));









