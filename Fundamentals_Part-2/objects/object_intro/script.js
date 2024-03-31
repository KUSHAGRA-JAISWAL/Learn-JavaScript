/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-31
* @copyright Copyright (c) 2024
*/

/* Introduction to Objects in JavaScript. */

/**
 * Objects are used to store collections of data and more complex entities.
 * Objects use key-value pairs to store data.
 * Objects can hold multiple data types.
 * Objects can hold other objects.
 * Objects are mutable.
 * Objects are created using curly braces {}.
 * The keys are strings, but the quotes are optional if the keys are a valid identifier.
 * The values are separated from the keys using a colon.
 * The key-value pairs are separated by commas.
 * Objects have methods, which are functions stored as object values.
 */

const kushArray = [
    'Kushagra',
    'Jaiswal',
    2024 - 2002,
    'student',
    ['HRV', 'MOHAN', 'GAURAV']
];
// above is the kushArray which is a array of kushagra's details.
// but it is not a good way to store the data of kushagra.
// if we have to access the data of kushagra then we have to remember the index of the data.

// so we can use the object to store the data of kushagra.

const kushObject = {
    firstName: 'Kushagra',
    lastName: 'Jaiswal',
    age: 2024 - 2002,
    job: 'student',
    friends: ['HRV', 'MOHAN', 'GAURAV']
};

console.log(kushArray);
console.log(kushObject);