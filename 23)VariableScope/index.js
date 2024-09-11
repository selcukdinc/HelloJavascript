/*
    variable scope = where a variable is recognized
                     and accessible (local vs global)
*/
let x = 3;

func2();


function func1() {
    let x = 1;
    console.log(x);
}

function func2() {
    //let y = 2;
    let x = 2;
    console.log(x);
}

// if global & local variable name is same program choose the local variable 