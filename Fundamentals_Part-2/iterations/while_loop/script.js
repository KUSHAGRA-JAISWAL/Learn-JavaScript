/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-04-11
* @copyright Copyright (c) 2024
*/

/* While Loop in Loops in JavaScript. */

/**
 * While loop is used when we don't know the number of iterations.
 * It is used when we don't know the number of iterations.
 */

console.log('Result of for loop');

for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weight repetition ${rep}`);
}

console.log('Result of while loop');

let rep = 1;
while(rep <= 10){
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}