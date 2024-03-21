/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-21
* @copyright Copyright (c) 2024
*/

/* if / else Statements in JavaScript. */

// if else statements are used to make decisions in the code.
// if else statements are used to execute a block of code if a condition is true, 
// and another block of code if the condition is false.

const age = 17;

if(age >= 18){
    console.log('kush can start driving license 🚗');  
}
else{
    const yearsLeft = 18 - age;
    console.log(`kush is too young. wait another ${yearsLeft} years:)`);
}

const birthYear = 2021;
let century;
// we declare century variable outside the if/else block because we want to use it outside the block.

if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;
}
console.log(century);  