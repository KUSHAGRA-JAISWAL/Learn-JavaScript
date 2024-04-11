/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-04-08
* @copyright Copyright (c) 2024
*/

/* Looping Arrays, Breaking and Countinuing in JavaScript. */

// kush array
const kushArray = [
    'Kushagra',
    'Jaiswal',
    2024 - 2000,
    'Student',
    ['Kush', 'Kushu', 'Kushagra'],
    true
]

const types = [];

// using for loop
for(let i = 0; i < kushArray.length; i++){
    // (.length) is used to get the length of the array.
    console.log(kushArray[i], typeof kushArray[i]);
    // typeof is used to get the type of the element.

    // filling an array
   // types[i] = typeof kushArray[i];
   types.push(typeof kushArray[i]); // more cleaner way to fill an array.
    
}

console.log(types);

// we have to calculate the ages based on the given yreas and store them in a new array.
const years = [1991, 2007, 1969, 2024];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2024 - years[i]);
}

console.log(ages);

console.log('--- ONLY STRINGS ---');

for(let i = 0; i < kushArray.length; i++){
    if(typeof kushArray[i] !== 'string') continue;
    // continue is used to skip the current iteration and move to the next iteration.

    console.log(kushArray[i], typeof kushArray[i]);
}

console.log('--- BREAK IF NUMBER ---');

for(let i = 0; i < kushArray.length; i++){
    if(typeof kushArray[i] === 'number') break;
    // break is used to break the loop if the condition is true.

    console.log(kushArray[i], typeof kushArray[i]);
}