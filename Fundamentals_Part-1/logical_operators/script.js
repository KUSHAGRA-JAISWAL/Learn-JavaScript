/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-23
* @copyright Copyright (c) 2024
*/

/* Boolean Logic & Logical Operators (AND, OR, NOT) in JavaScript. */

// AND, OR, NOT 
// AND, OR, NOT are the three basic logical operators in JavaScript.

// AND Operator (&&) if both the operands are true, then the condition becomes true.
// OR Operator (||) if any one of the operands is true, then the condition becomes true.
// NOT Operator (!) if the operand is true, then the condition becomes false.

const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision); // AND, output is true
console.log(hasDriversLicence || hasGoodVision); // OR, output is true
console.log(!hasDriversLicence); // NOT, output is false

const isTired = false; // c

if(hasDriversLicence && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
}
 else {    
    console.log('Someone else should drive...');
}