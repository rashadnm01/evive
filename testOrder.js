const {
  Meal: Meal,
  Breakfast: Breakfast,
  Lunch: Lunch,
  Dinner: Dinner,
} = require("./Meals");

const meal1 = new Breakfast([1, 2, 3]);
const meal2 = new Breakfast([2, 3, 1]);
const meal3 = new Breakfast([1, 2, 3, 3, 3]);
const meal4 = new Breakfast([1]);
const meal5 = new Lunch([1, 2, 3]);
const meal6 = new Lunch([1, 2]);
const meal7 = new Lunch([1, 1, 2, 3]);
const meal8 = new Lunch([1, 2, 2]);
const meal9 = new Lunch([]);
const meal10 = new Dinner([1, 2, 3, 4]);
const meal11 = new Dinner([1, 2, 3]);

console.log(meal1.print());
console.log(meal2.print());
console.log(meal3.print());
console.log(meal4.print());
console.log(meal5.print());
console.log(meal6.print());
console.log(meal7.print());
console.log(meal8.print());
console.log(meal9.print());
console.log(meal10.print());
console.log(meal11.print());
