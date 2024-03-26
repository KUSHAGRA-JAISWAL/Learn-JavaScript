/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-26
* @copyright Copyright (c) 2024
*/

/* Functions Introduction in JavaScript. */

/*
* Functions are a block of code that can be reused multiple times.
* Functions are defined using the function keyword.
* Functions can take parameters and return values.
* Functions can be called multiple times.
* Functions can be stored in variables.
*/

// Function Declaration.
function logger() {
    console.log("My name is Kushagra Jaiswal.");
}

// Calling / running / invoking the function.
logger();
logger();
logger();

// Function with parameters.
function fruitProcessor(banana, pomogranate){
    // here banana and pomogranate are called parameters.
    // console.log(banana, pomogranate);
    const juice = `Juice with ${banana} bananas and ${pomogranate} pomogranates.`;
    return juice;
    // return statement is used to return the value from the function.
}

fruitProcessor(5, 0);
// here 5 and 0 are called arguments.
// returned statement is not stored in any variable so it will not be displayed.

const appleJuice = fruitProcessor(0, 5);
console.log(appleJuice);
// now the returned statement is stored in a variable so it will be displayed.
console.log(fruitProcessor(2, 3));
// we shoud not need to store the function calling inside a variable to display the returned statement.
