/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-22
* @copyright Copyright (c) 2024
*/

/* Truthy and Falsy Values in JavaScript. */

// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Kushagra')); // true
console.log(Boolean({})); // true, this is an empty object
console.log(Boolean('')); // false

// example of truthy and falsy values
const cash = 0;
if(cash){
    console.log('You have money');
}
else{
    console.log('You have no money');
}

let height;
if(height){
    console.log('Height is defined');
}
else{
    console.log('Height is not defined');
}