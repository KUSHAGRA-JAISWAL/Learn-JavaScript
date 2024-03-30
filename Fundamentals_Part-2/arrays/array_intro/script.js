/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-30
* @copyright Copyright (c) 2024
*/

/* Arrays Introduction in JavaScript. */

/**
 * Arrays are used to store multiple values in a single variable.
 * An array is a special variable, which can hold more than one value at a time.
 */

const friend1 = 'HRV';
const friend2 = 'KUSH';
const friend3 = 'MOHAN';

// array declaration type 1
const friends = ['HRV', 'KUSH', 'MOHAN'];
// this is an array of strings.

console.log(friends);
// this will print the array of friends.

// array declaration type 2
const year = new Array(1991, 1984, 2008, 2020);
// this is an array of numbers.

console.log(friends[0]);
// this will print the first element of the array.
 
console.log(friends[2]);

console.log(friends.length);
// this will print the length of the array.

console.log(friends[friends.length - 1]);
// this will print the last element of the array.

friends[2] = 'GAURAV';
// this will change the value of the element at index 2.

console.log(friends);

const fristName = 'KUSHAGRA';
const kush = [fristName, 'JAISWAL', 2024 - 2002, 'student', friends];
// this is an array of mixed data types.

console.log(kush);

// Exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const years = [1991, 1984, 2008, 2020, 1995];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// this is how we can directly store the values in the array.

console.log(ages);

