/*
* @file script.js
* @author KUSHAGRA JAISWAL 
* @date 2024-03-21
* @copyright Copyright (c) 2024
*/

/* 
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this 
formula mass / (height * height), and not this one mass / (height ** 2).
*/

let massMark, heightMark, massJohn, heightJhon, BMIMark, BMIJohn, markHigherBMI;

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJhon = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJhon * heightJhon);

markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

/* Write your code below. Good luck! 🙂 */

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}