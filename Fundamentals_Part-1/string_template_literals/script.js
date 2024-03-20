/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-19
* @copyright Copyright (c) 2024
*/

/* String and Template Literals in JavaScript. */

const firstName = 'Kushagra';
const lastName = 'Jaiswal';
const birthYear = 2001;
const currentYear = 2024;
const job = 'Student';

// string literals
const kush = "I'm " + firstName + ' ' + lastName + ', a ' + (currentYear - birthYear) + 
            ' years old ' + job + '!';
// this is the old way of writing strings in JavaScript.
// it is hard to read and write.

console.log(kush);

// template literals
const kushNew = `I'm ${firstName} ${lastName}, a ${currentYear - birthYear} years old ${job}!`; 
// this is the new way of writing strings in JavaScript.

console.log(kushNew);

console.log(`Just 
a regular 
string...`); 
// we can use backticks to write regular strings as well.
// using backticks we dont need to use escape characters like \n, \t, etc.