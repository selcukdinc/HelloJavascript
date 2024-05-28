
document.getElementById("p1").textContent = "1. Easy Way = Windows prompt";
document.getElementById("p2").textContent = "2. Professional Way = HTML textbox";

/* 
// Easy Way
let userName;

userName = window.prompt("what's your username?");

console.log(userName);

*/
// Professional Way
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("H101").textContent = `Hello dear ${username}`;
}