const PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt(`Enter the radius of a circle`);
document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `result is ${circumference} cm`;
}
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);
