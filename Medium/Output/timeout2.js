function usingVarLetSetTimeout(){
    for (var i = 1; i<=2; i++){
        for(var j = 1; j<=2; j++ ){ //2 times
            let k = i+j
            setTimeout(()=> {
                console.log(k);
            }, 200)
        }
    }
 }

 usingVarLetSetTimeout()

/*  
   ==  using var
    global - memory
        i = 2               <= 2
        j = 2               <= 2
   ==  using let 
    for loop while i = 1
        for 1st loop block 
            k = 2
        for 2nd loop block 
            k = 3
    for loop while i = 2
            for 1st loop block 
                k = 3
            for 2nd loop block 
                k = 4


    global - stack
        setTimeout(k = 2, 200)
        setTimeout(k = 3, 200)
        setTimeout(k = 3, 200)
        setTimeout(k = 4, 200)

    Output
    2
    3
    3
    4
*/