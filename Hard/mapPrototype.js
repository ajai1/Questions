const ar = [ 1, 2, 3 ];
const ar2 = [ 10, 20 ];

Array.prototype.myMap = function (callbackFn, ...thisArgs) {
    let result = []
    for(let i=0; i<this.length; i++){
        result.push(callbackFn(this[i],i, this))
    }
    return result;
}


const myResult = ar.myMap( function callback (i, index, array){
    return i*3;
}, ar2 , "SomeString", {"hey": "uas"});

console.log(myResult);