// array = a variable like structure that can hold
//          more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits[0] = "coconut";

/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
*/

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

/*
let numOfFruits = fruits.length;
let index = fruits.indexOf("apple"); // return -1
console.log(index);
*/

/*
for(let i = fruits.length - 1; i >= 0; i--)
{
    console.log(fruits[i]);
}
*/
fruits.sort().reverse();
for(let fruit of fruits.reverse()){
    console.log(fruit);
}