/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-18
* @copyright Copyright (c) 2024
*/

/* List of Operators in JavaScript. */

// 1. Arithmetic Operators
// we can use +, -, *, /, **, %, ++, -- operators in arithmetic operators.

const now = 2024;
const ageKushagra = now - 2000;
const ageHrv = now - 1998;

console.log(ageKushagra, ageHrv);

console.log(ageKushagra * 2, ageKushagra / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Kushagra';
const lastName = 'Jaiswal';

console.log(firstName + ' ' + lastName);
// + operator is used for concatenation.

// 2. Typeof Operator
// It is used to find the type of the variable.

console.log(typeof ageKushagra);
console.log(typeof firstName);
console.log(typeof true);
console.log(typeof 34);

// 3. Assignment Operators
// It is used to assign the value to the variable.

let x = 15 + 10; // 25
console.log(x);

x += 10; // x = x + 10 = 35
console.log(x);

x *= 4; // x = x * 4 = 140
console.log(x);

x++; // x = x + 1 = 141
console.log(x);

x--; // x = x - 1 = 140
console.log(x);

// 4. Comparison Operators
// It is used to compare the value of the variable.

console.log(ageKushagra > ageHrv);
// if the age of Kushagra is greater than the age of Hrv then it will return true otherwise false.
// >, <, >=, <=, ===, !==

