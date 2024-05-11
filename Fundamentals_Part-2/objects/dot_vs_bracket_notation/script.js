/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-04-01
* @copyright Copyright (c) 2024
*/

/* Dot Notation VS Bracket Notation in JavaScript. */

/**
 * Dot Notation:
 * - Dot notation is used to access the properties of an object.
 * - It is the most common way to access the properties of an object.
 * - It is easier to read and write.
 * - It is faster to write.
 * - It is not possible to access the properties of an object using dot notation if the property name is a reserved keyword.
 * 
 * Bracket Notation:
 * - Bracket notation is used to access the properties of an object.
 * - It is used when the property name is a reserved keyword.
 * - It is used when the property name is a variable.
 * - It is used when the property name is a string.
 * - It is slower to write.
 * - It is slower to execute.
 */

const kushObject = {
    firstName: 'Kushagra',
    lastName: 'Jaiswal',
    age: 2024 - 2002,
    job: 'student',
    friends: ['HRV', 'MOHAN', 'GAURAV', 'FARAZ']
};

console.log(kushObject.firstName);
// Dot Notation, output: Kushagra

console.log(kushObject['firstName']);
// Bracket Notation, output: Kushagra

const nameKey = 'Name';
console.log(kushObject['first' + nameKey]);
console.log(kushObject['last' + nameKey]);
// here we can use bracket notation to access the properties of an object using a variable.

const interestedIn = prompt('What do you want to know about Kushagra? Choose between firstName, lastName, age, job, and friends');
// here prompt is used to take input from the user.

if(kushObject[interestedIn]) {
     console.log(kushObject[interestedIn]);
    // here we can use bracket notation to access the properties of an object using a prompt.
}
else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
    
}

// add iteam to object
kushObject.location = 'India';
kushObject['insta'] = 'kushagra_jaiswal_kush';

console.log(kushObject);

//challenge

console.log(`${kushObject['first' + nameKey]} has ${kushObject.friends.length} friends, and his best friend is called ${kushObject.friends[0]}`);
// we have dynamically printed the statement.
