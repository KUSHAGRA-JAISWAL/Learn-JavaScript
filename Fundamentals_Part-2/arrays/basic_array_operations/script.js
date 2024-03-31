/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-31
* @copyright Copyright (c) 2024
*/

/* Basic Array Operations in JavaScript. */

const friends = ['HRV', 'KUSH', 'MOHAN'];

// Add elements
const newLength = friends.push('GAURAV');
// push method is used to add an element at the end of the array.
// push method also return the length of the new array.

console.log(friends);
console.log(newLength);

friends.unshift('YASH');
// unshift method is used to add an element at the start of the array.

console.log(friends);

// Remove elements

friends.pop();
const popped = friends.pop();
// pop method is used to remove the last element from the array.
// pop method also return the element which is removed from the array.

console.log(popped);
console.log(friends);

friends.shift();
// shift method is used to remove the first element from the array.

console.log(friends);

console.log(friends.indexOf('KUSH'));
// indexOf method is used to find the index of the element in the array.

console.log(friends.indexOf('SANDEEP'));
// If the element is not present in the array then indexOf method will return -1.

console.log(friends.includes('KUSH'));
// includes method is used to check whether the element is present in the array or not.
console.log(friends.includes('SANDEEP'));