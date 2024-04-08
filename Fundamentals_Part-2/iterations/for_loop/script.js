/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-04-08
* @copyright Copyright (c) 2024
*/

/* The For Loop in JavaScript. */

/**
 * The for loop has the following syntax:
 * for (initialization; condition; final-expression) {
 *  // code to be executed
 * }
 * 
 * The initialization statement is executed one time before the execution of the code block.
 * The condition is evaluated before each execution of the code block.
 * The final-expression is executed after the code block has been executed.
 */

// suppose you are lifting weights in a gym 10 times.

// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');

// Using for loop

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}