// aritmethic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

let students = 30;
// subtract =>  -
// sum      =>  +
// multi    =>  *
// dvide    =>  /
// pow      =>  **
// mod      =>  %

// also uses 
//      +=      for example

//students++;
//students--;
document.getElementById("p0").textContent = "Operator precedence";
document.getElementById("p1").textContent = "1.Parethesis ()";
document.getElementById("p2").textContent = "2. exponents";
document.getElementById("p3").textContent = "3. multiplication & division & modulo";
document.getElementById("p4").textContent = "4.addition & subtraction";

let result1 = 1 + 2 * 3 + 4 ** 2, result2 = 12 % 5 + 8 / 2, result3 = 6 / 2 ** (2 + 5);

console.log(`${result1}\n${result2}\n${result3}`);