// while loop = repeat some code WHILE some condution is true
/* 
let username;

do{
    username = window.prompt(`Enter your name`);
}while (username === "" || username === null) 
    console.log(`Hello ${username}`);
  */

/* 
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if (username === "myusername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }else
        console.log("Invalid credentials! Please try again");
}
 */

// do variation

let loggedIn = false;
let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if (username === "x" && password === "y") {
        loggedIn = true;
        console.log("You are logged in!");
    }else
        console.log("Invalid credentials! Please try again");
}while (!loggedIn)