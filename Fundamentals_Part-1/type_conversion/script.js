/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-21
* @copyright Copyright (c) 2024
*/

/* Type Conversion and Type Coercion in JavaScript. */

// Type Conversion: Converting a value from one data type to another.
const year = '2024';
console.log(year + 12);
// Output: 202412, because year is a string and 12 is a number. So, 12 is concatenated to 2024.

console.log(Number(year)); 
// Output: 2024, because we converted the string to a number.
// Number is a function that converts the input to a number.

console.log(Number(year) + 12);
// Output: 2036, because we converted the string to a number and then added 12 to it.

console.log(Number('Kushagra'));
// Output: NaN, because the string is not a number.
// NaN stands for Not a Number.

console.log(typeof NaN);
// Output: number, because NaN is a numeric data type but and invalid number.

console.log(String(20), 20);
// Output: 20 20, because we converted the number to a string.
// String is a function that converts the input to a string.

// Type Coercion: JavaScript converts one data type to another automatically.
console.log('I am ' + 20 + ' years old.');
// Output: I am 20 years old., because JavaScript converted the number to a string.

console.log('20' - '10' - 5);
// Output: 5, because JavaScript converted the strings to numbers and then subtracted them.

console.log('20' + '10' - 5);
// Output: 2015, because JavaScript converted the strings to numbers and then concatenated them.
