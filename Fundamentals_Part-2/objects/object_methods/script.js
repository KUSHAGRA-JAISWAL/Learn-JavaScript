/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-04-01
* @copyright Copyright (c) 2024
*/

/* Object Methods in JavaScript. */

/**
 * Object Methods are functions that are stored as object properties.
 */

const kushObject = {
    firstName: 'Kushagra',
    lastName: 'Jaiswal',
    birthYear: 2002,
    job: 'student',
    friends: ['HRV', 'MOHAN', 'GAURAV'],
    hasDriverLicense: true,

    // calcAge: function (birthYear){
    //     return 2024 - birthYear;
    // }
    // here we have function inside the object.

    // calcAge: function (){
    //     return 2024 - this.birthYear;
    //     // this keyword is used to access the object properties.
    // }

    calcAge: function (){
        this.age = 2024 - this.birthYear;
        return this.age;
        // here we are storing the age in the object itself.
    },

    // challange
    getSummary: function (){
        return `${kushObject.firstName} is a ${kushObject.age}-years old ${kushObject.job}, and he has ${kushObject.hasDriverLicense ? 'a' : 'no' } driving license.`;
    }
};

// console.log(kushObject.calcAge(kushObject.birthYear)); // 22

console.log(kushObject.calcAge());
// here we are calling the function inside the object.

console.log(kushObject.age);
console.log(kushObject.age);
console.log(kushObject.age);

// challange
console.log(kushObject.getSummary());

