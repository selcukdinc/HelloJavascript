// Counter Program
const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

decreaseBtn.onclick = function(){
    countLabel.textContent = `${--count}`;
};

increaseBtn.onclick = function(){
    countLabel.textContent = `${++count}`;
};

resetBtn.onclick = function(){
    countLabel.textContent = `${count = 0}`;
};