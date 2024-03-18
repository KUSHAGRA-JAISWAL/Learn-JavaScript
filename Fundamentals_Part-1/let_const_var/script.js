/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-18
* @copyright Copyright (c) 2024
*/

/* Concept of Let, Const and Var in JavaScript. */

// let is used to declare a variable that can be changed later.

let age = 30;
console.log(age);

age = 31;
console.log(age);
// here we can change the value of age variable from 30 to 31.

// const is used to declare a variable that cannot be changed later.

const birthYear = 1991;
console.log(birthYear);
// birthYear = 1990;

// birthYear = 1990;
// console.log(birthYear);

// here we cannot change the value of birthYear variable from 1991 to 1990.
// it will give an error (Uncaught TypeError: Assignment to constant variable.)

//const job;
// here we cannot declare a const variable without initializing it.
// it will give an error (Uncaught SyntaxError: Missing initializer in const declaration)

// var is used to declare a variable that can be changed later.
// var is the old way of declaring a variable.

var work = 'programmer';
console.log(work);

work = 'teacher';
console.log(work);
// here we can change the value of job variable from programmer to teacher.

firstName = 'Kushagra';
console.log(firstName);
// here we can declare a variable without using let, const or var.
// it is not recommended to declare a variable without using let, const or var.
