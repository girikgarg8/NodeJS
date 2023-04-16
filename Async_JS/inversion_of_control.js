function fun(inputString,fn){   
    //internal function
    // executes some algorithm on the string

    let output=inputString.split(',');
    for (let i=0;i<output.length;i++){
        fn(output[i]);
        //fn(output[i]) //uncomment this, and you'll get bizzare results
    }
}

//what is the issue of inversion of control? Suppose that the function fn was not called by mistake, or it was called twice by mistake, maybe a mistake by an intern :P, but it will be a huge loss for us, say the customer is charged twice for making a booking

fun("name:girik,subject:cse",function process(ip){
    let arr=ip.split(":");
    console.log("{"+arr[0]+","+arr[1]+"}");
})