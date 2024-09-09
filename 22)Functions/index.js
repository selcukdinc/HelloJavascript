/*
    function = A section of reusable code
               Declare code once, use it whenever you want.
               call the function to execute that code.
*/

/* 

function happyBrithday(userName, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday to dear ${userName}`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBrithday("BroCode", 25);
happyBrithday("Spongebob", 30);
happyBrithday("Patric", 37);

 */

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiple(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function isEven(number){
  /*   
    if(number % 2 === 0)
        return true;
    else
        return false;
 */
    return number % 2 === 0 ?  true :  false; 
}

function isValidEmail(email) {
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("Brofake.com"));
console.log(isValidEmail("ElonMusk.com"));
console.log(isValidEmail("Zuckerborg@Meta.com"));