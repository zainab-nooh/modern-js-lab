// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):
// Your code here:
////////////////
const nums = [13, 87, 2, 89, 12, 4, 90, 63]
const numsCollection = nums.map((num)=>{
    return num*2
})
console.log('Exercise 1:',numsCollection)
// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract
//    the first and second values and place them into variables. Name the
//    variable that corresponds to the first value `firstIngredient`. Name the
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):
// Your code here:
//////////
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTop, secondTop] = pizzaToppings
console.log('Exercise 2:',firstTop);
console.log('Exercise 2:',secondTop);
// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):
// Your code here:
//////////
const car = {
  make: 'Audi',
  model: 'Q5',
};
const { make, model } = car
console.log('Exercise 3:',make);
console.log('Exercise 3:',model);
// ! Exercise 4:
// a. Duplicate the provided `morePizzaToppings` array using the spread
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
//
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):
// Your code here:
/////////
const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings = [...morePizzaToppings]
console.log('Exercise 4:',uncontroversialPizzaToppings);
// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):
// Your code here:
///////////////
const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};
const myCar ={...anotherCar}
myCar.make = 'Range Rover'
myCar.model = 'Discovery'
console.log('Exercise 5:',myCar)
// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like
//    'username', 'age', or 'email') to it.
//
// b. Create an object named `userProfile`.
//
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:
///////
//variable PropertyName includes Ali
const propertyName= 'Ali'
//Object 'userProfile' -> added var in object + dynamic key
const userProfile={[propertyName]:0}
//Print object
console.log('Exercise 6:',userProfile)
// Exercise 7: Import and Export
// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
//
// b. Give `noun` a default value of "cat" and `adjective` a default value of
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but
//    should substitute the appropriate parameters when it is supplied with
//    arguments.
//
// Your code here:
////////////////
//1
function animal(noun='cat', adjective='orange') {
    console.log(`The ${noun} is ${adjective}.`)
}
animal('Exercise 8: ')
animal(undefined,'golden')
// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):
// Your code here:
////////////
const pizza = 'tasty'
let pizzaTaste = pizza==='tasty'?  'yum' : 'yuck'
console.log('Exercise 9:',pizzaTaste)
// ! Exercise 10:
// ! 10.1: Set language
// a. Construct a single line of code that assigns a default value using the
//    logical OR operator. This line should match the logic of the following
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// b. Create a variable called `lang`.
//
// c. Assign `lang` the value of localLangConfig or 'en' as a default if
//    `localLangConfig is falsy.
//
// d. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):
// Simulated language configuration (change this variable to test)
//code
//////////
const localLangConfig = null // Change to 'es', 'fr', etc., or leave it `null`.
const lang= localLangConfig || 'en'
console.log('Exercise 10:',lang)
// ! 10.2: Set website theme
// Intro: In this exercise, you'll construct a single line of code that assigns
//        a default value to a variable named `theme` using the logical OR
//        operator. This line should match the logic of the following statement:
//
//        "theme is equal to savedUserTheme or the default value of light."
//
// a. Create a variable called `theme`.
//
// b. Assign `theme` the value of `savedUserTheme` or 'light' as a default.
//
// c. Log the value of `theme` to the console.
//
// Your code here (`savedUserTheme` is provided to get you started):
// Simulated user theme preference (change this variable to test)
//code
/////////////
const savedUserTheme = null; // Change to 'dark', etc., or leave it `null`.
const theme= savedUserTheme || 'light'
console.log('Exercise 10:',theme)
// ! Exercise 11:
// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):
// Your code here:
//////////
const adventurer = {
  name: 'Alice',
}
let cat = adventurer.cat?.name;
console.log('Exercise 11:',cat);









