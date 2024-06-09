// RANDOM NUMBER GENERATOR
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let rnd = Math.floor(Math.random() * (max - min)) + min;
let rnd1, rnd2, rnd3;
myButton.onclick = function(){
    rnd1 = Math.floor(Math.random() * (max - min)) + min;
    rnd2 = Math.floor(Math.random() * (max - min)) + min;
    rnd3 = Math.floor(Math.random() * (max - min)) + min;
    label1.textContent=`${rnd1}`;
    label2.textContent=`${rnd2}`;
    label3.textContent=`${rnd3}`; 
}

console.log(rnd);