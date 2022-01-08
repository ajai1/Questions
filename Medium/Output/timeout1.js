 function usingVarSetTimeout(){
    for (var i = 1; i<=2; i++){
        for(var j = 1; j<=2; j++ ){ //2 times
            var k = i+j
            setTimeout(()=> {
                console.log(k);
            }, 200)
        }
    }
 }

 usingVarSetTimeout()

/*  
    using var
    global - memory
        i = 2               <= 2
        j = 2               <= 2
        k = 4

    global - stack
        setTimeout(k = 4, 200)
        setTimeout(k = 4, 200)
        setTimeout(k = 4, 200)
        setTimeout(k = 4, 200)

    Output
    4
    4
    4
    4

*/