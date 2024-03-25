/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-25
* @copyright Copyright (c) 2024
*/

/* Switch Statement in JavaScript. */

// Switch statement is used to perform different actions based on different conditions.
// It is similar to if-else statement but it is more readable when we have multiple conditions.

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
        console.log('Write code examples');
        break;
    case 'thursday':
        console.log('Record videos');
        break;
    case 'friday':
        console.log('Enjoy the pre-weekend');
        break;
    case 'saturday':
        console.log('Enjoy the weekend');
        break;
    case 'sunday':
        console.log('Enjoy the sunny-weekend');
        break;
    default: 
        console.log('Not a valid day');
}

// break statement is used to exit the switch statement after the condition is met.
// If we don't use break statement then all the cases after the matched case will be executed.

// default statement is used when none of the cases are matched. 