/* let age = 15;

if(age >= 18){
    console.log(`Your are old enough to enter this side`);
}else{
    console.log(`You must be 18+ enter this side`);
} */

/* let time = 14;

if(time < 12){
    console.log(`Good morning`);
}else{
    console.log(`Giid afternoon`);
} */

/* let isStudent = true;

if(isStudent){
    console.log(`You are a student`);
}else{
    console.log(`You are NOT a student!`);
} */

let age = 0;

/* let hasLicense = true;

if(age >=18){
    console.log("You are old enough to drive");
    
    if(hasLicense){
        console.log("You have your license!");
    }else{
        console.log("You do not have your license yet!");
    }
}else{
    console.log("You must be 18+ to have a license");
} */

/* if(age >= 100){
    console.log("Your are too OLD to enter this site");
}else if (age == 0) {
    console.log("You can't enter. You were just born.");
}
else if (age >= 18) {
    console.log("You are old enough to enter this site");
}else if (age < 0) {
    console.log("Your age can't be below 0");
}
else{
    console.log("You must be 18+ to enter this site");
} */

const myInput = document.getElementById("myInput");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function() {
    age = myInput.value;
    age = Number(age);
    if(age >= 100){
        resultElement.textContent = `Your are too OLD to enter this site`;
    }else if (age == 0) {
        resultElement.textContent = `You can't enter. You were just born.`;
    }
    else if (age >= 18) {
        resultElement.textContent = `You are old enough to enter this site`;
    }else if (age < 0) {
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}

