/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-22
* @copyright Copyright (c) 2024
*/

/* Equality Operator in JavaScript(=== vs ==). */

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
// 18 === 18 -> true
// === is strict equality operator because it does not perform type coercion.
// It means that the values must be of the same type to be strictly equal.

if (age == 18) console.log('You just became an adult :D (loose)');
// 18 == 18 -> true
// == is loose equality operator because it performs type coercion.
// It means that the values do not need to be of the same type to be equal.

console.log('18' == 18); // true
console.log('18' === 18); // false

const favourite = Number(prompt("What's your favourite number?"));
// we are using Number() function to convert the string to number.
// prompt() function always returns a string and takes the input from the user.

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //23 ===23 true 
  console.log('Cool! 23 is an amazing number!');
}
else if (favourite === 7) {
  console.log('7 is also a cool number');
}
else if (favourite === 9) {
  console.log('9 is also a cool number');
}
else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');
// !== is strict inequality operator.