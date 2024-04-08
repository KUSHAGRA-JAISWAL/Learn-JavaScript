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