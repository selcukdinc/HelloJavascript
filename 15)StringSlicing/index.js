
/* 
const fullName = "Broseph Code";
let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
 */

/* 
const fullName = "Broseph Code";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);
 */

const email = "selcukdinc1234@hotmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);


console.log(userName);
console.log(extension);