/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-25
* @copyright Copyright (c) 2024
*/

/* The Conditional (Ternary) Operator in JavaScript. */

// The Conditional (Ternary) Operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
// followed by a colon (:), and finally the expression to execute if the condition is falsy.

const age = 24;
const drink = age >= 18 ? 'I like to drink wine' : 'I like to have water';
console.log(drink);
// The above code is equivalent to the following if-else statement.

console.log(`I like to ${age >= 18 ? 'drink wine' : 'have water'}`);
// The above code is equivalent to the following if-else statement.