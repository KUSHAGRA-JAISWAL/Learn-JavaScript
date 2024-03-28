/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-28
* @copyright Copyright (c) 2024
*/

/* Arrow Functions in JavaScript. */

/**
 * Arrow functions are a new way to write functions in JavaScript.
 * Arrow functions are also called as anonymous functions.
 * Arrow functions are more concise and easier to read.
 * Arrow functions do not have their own this keyword.
 * Arrow functions are one liner functions.
 */

// Normal function
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
console.log(calcAge1(1999));

// Arrow function
const calcAge2 = birthYear => 2024 - birthYear;
console.log(calcAge2(1999));

// lets make a returnment calculation function using arrow function
const yearsLeftForRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsLeftForRetirement(1999, 'HRV'));
console.log(yearsLeftForRetirement(2000, 'Kush'));