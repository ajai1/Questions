function usingVarLetSetTimeout(){
    for (let i = 1; i<=2; i++){
        for(let j = 1; j<=2; j++ ){ //2 times
            var k = i+j
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
        k = 4     

   ==  using let 
    i_1 = 1
    for loop while i = 1
        j_1 = 1
        for 1st loop block 
            k = 2
        j_2 = 2
        for 2nd loop block 
            k = 3
    i_2 = 2     
    for loop while i = 2
            j_1 = 1
            for 1st loop block 
                k = 3
            j_2 = 2    
            for 2nd loop block 
                k = 4


    global - stack
        setTimeout(k = 4, 200)
        setTimeout(k = 4, 200)
        setTimeout(k = 4, 200)
        setTimeout(k = 4, 200)


    Output
    2
    3
    3
    4
*/