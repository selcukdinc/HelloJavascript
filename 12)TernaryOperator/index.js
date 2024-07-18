/*
    ternary operator = a shortcut if{} an else{} statements
                       helps to assign a variable based on a codition
                       condution ? codeIfTrue : codeIfFalse;
 */

/* let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor"; 
console.log(message); */

/* let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting); */

/* let isStudent = true;
let messageV2 = isStudent ? "You are a student" : "You are NOT a student";
console.log(messageV2); */

/*
    Challenge - if customer buy over 100 dollar, discount %10
 */

let purchaseAmount = 100;
let resultBill = purchaseAmount >= 100 ? purchaseAmount -= (purchaseAmount * 0.10) : purchaseAmount;
console.log(`Your total is $${purchaseAmount}`);