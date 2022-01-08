
/*
    var variable name defiend twice or thrice will be allowed
    let and const can't be defined with the same name more than once
 */

 function hoist2() {
    var b = 60;
    var b = 70;
    console.log("b = ", b);
    if(true) {
        console.log("b inside if ", b);
        let b =20;
        console.log("b inside if ", b);
    }
}

hoist2();


/**
 * output
    b =  70
    Error
        console.log("b inside if ", b);
        ReferenceError: b is not defined
 */