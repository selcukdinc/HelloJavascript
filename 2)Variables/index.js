/* let x;
let y;
x = 123;

console.log(x);

// variables
let firstName = "Roach";
let favFood = "I like fries";
let age = 25;
let price = 10.99;
let gpa = 2.1;

let online = true;
let forSale = true;
let isStudent = true;
//console.log(`fav food is ${favFood}\nyour horse name is ${firstName}\n${typeof age}\nyou are ${age} years old\nprice is ${price}\nYour gpa is: ${gpa}`);
console.log(`${firstName} is online: ${online}\nIs this car for sale: ${forSale} and var type is ${typeof(forSale)}\nEnrolled: ${isStudent}`);
 */

let fullName = "Roach";
let age = 22;
let student = true;

document.getElementById("P1").textContent = `Your name is ${fullName}`;
document.getElementById("P2").textContent = `Your age is ${age}`;
document.getElementById("P3").textContent = `Enrolled: ${student}`;