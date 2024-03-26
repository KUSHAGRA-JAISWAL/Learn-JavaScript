/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-26
* @copyright Copyright (c) 2024
*/

/* Activating Strict Mode in JavaScript. */

"use strict";
// This is how we activate strict mode in JavaScript. 
// We write "use strict" at the top of the file or at the top of the function.

let hasDriversLicense = false;
const passTest = true;

/* 
if (passTest) hasDriverLicense = true; 
*/
// This will not throw an error in normal mode but in strict mode it will throw an error.
// This is because we have not declared the variable hasDriverLicense and 
// we are trying to assign a value to it.

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

/* 
const interface = "Audio";
const private = 534; 
*/
// These are reserved keywords in JavaScript.
// We cannot use them as variable names in JavaScript.