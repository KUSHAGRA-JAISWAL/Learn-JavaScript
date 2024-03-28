/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-28
* @copyright Copyright (c) 2024
*/

/* Function Decleration Vs Function Expression in JavaScript. */

// Function Decleration
// In function decleration we write the name of the function and then the parameters
// in the paranthesis and then the function body.

console.log(calcAge1(1999));
// calling the function before the function is defined in the code.
// This will work fine because of function hoisting.

// Function Decleration
function calcAge1(birthYear){
    return 2024 - birthYear;
}
// console.log(calcAge1(1999)); // This will work fine.

// Function Expression
// In function expression we store the function in a variable and function is without name.

// console.log(calcAge2(1999));
//  this will not work because of function expression.

const calcAge2 = function(birthYear){
    return 2024 - birthYear;
}
console.log(calcAge2(1999));

/* 
* The main difference between function decleration and function expression is that:
* function decleration can be called before the function is defined in the code.
* But function expression can't be called before the function is defined in the code.
*/