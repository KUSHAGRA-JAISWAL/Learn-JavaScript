/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-29
* @copyright Copyright (c) 2024
*/

/* Function Calling Another Function in JavaScript. */

const cutPieces = function (fruit){
    return fruit * 4;
}
// Function to make pieces of fruit.
// for example, if we give 1 apple to this it will cut into 4 pieces of apple.

const fruitProcessor = function (apples, oranges){
    const applePieces = cutPieces(apples);
    // this will call the cutPieces function and pass the number of apples to it.
    const orangePieces = cutPieces(oranges);
    // this will call the cutPieces function and pass the number of oranges to it.

    const juice = `Juices with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));