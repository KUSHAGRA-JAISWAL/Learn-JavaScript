/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-18
* @copyright Copyright (c) 2024
*/

/* List of Data Types in javaScript. */

let javaScriptIsFun = true;
// true is a boolean value.

console.log(javaScriptIsFun);
// true is printed on the console.

console.log(typeof true);
// typeof is a operator that is used to check the type of the value.

console.log(typeof 45);

console.log(typeof "Kushagra");

console.log(typeof false);

javaScriptIsFun = "HURRAY!";
// we have done dynamic typing here.

console.log(typeof javaScriptIsFun);
// now the type of javaScriptIsFun is string.

let year;
// here year is undefined.

console.log(year);
// undefined is printed on the console.

console.log(typeof year);
// type of year is undefined.

year = 2024;

console.log(typeof year);
// type of year is now number.

console.log(typeof null);
// type of null is object.
// this is a bug in javaScript.
// null is not an object but a primitive data type.
// this is a bug that is never fixed because it will break the web.
// so, we have to live with it.
// this is a bug from the first version of javaScript.