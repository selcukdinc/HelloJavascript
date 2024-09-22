/*
    Spread operator = ... allows an iterable such as an 
                        array or string to be explained
                        into seperate elements
                        (unpack the elements)
*/

/* 
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(`max value: ${maximum} \nmin value: ${minimum}`); 
*/
/* 
let username = "Bro Code";
let letters = [...username].join("Z");

console.log(letters);
 */

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots" ,"celery", "potatoes"];

//let newFruits = [...fruits];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);