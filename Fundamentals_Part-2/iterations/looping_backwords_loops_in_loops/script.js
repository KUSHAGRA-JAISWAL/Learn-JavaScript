/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-04-11
* @copyright Copyright (c) 2024
*/

/* Looping Backwords, Loops in Loops in JavaScript. */

const kushArray = [
    'kushagra',
    'jaiswal',
    2024 - 2002,
    'student',
    ['HRV', 'MOHAN', 'FARAZ'],
    true
]

// printing the array in reverse order.(looping backwords)
for(let i = kushArray.length - 1; i >= 0; i--){
    console.log(i, kushArray[i]);
}

// loops inside loops challange.
for( let excerise = 1; excerise < 4; excerise++){
    console.log(`----- Starting excerise ${excerise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Excerise ${excerise} : Lifting weight repetition ${rep}`);
    }
}

// printing tables using loops in loops.
for(let table = 1; table <= 20; table++){
    console.log(`------ Table of ${table} ------`);

    for( let i = 1; i <= 10; i++){
        console.log(`${table} X ${i} = ${table * i}`);
    }
}