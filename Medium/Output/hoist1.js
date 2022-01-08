
/*
 adding var type = undefiend value; 
 let = not defiend error; 
 no variable type = not defiend error
 */

function hoist1() {
    a = 50;
    console.log("a = ", a);
    console.log("b = ", b);
    var b = 60;
    if(true) {
        console.log("b = ", b);
        let b =20;
        console.log("b = ", b);
    }
}

hoist1();
console.log("b = ", b);
b = 30; 
console.log("a = ", a);
console.log("b = ", b);

/**
 * output
    50
    undefiend
    ReferenceError: b is not defined
 */