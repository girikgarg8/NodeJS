function fun(x,fn){
    /***
     * 
     * x->number
     * fn->callback function
     */

    //some logic
     for (let i=0;i<x;i++){
        console.log(i);
     }
     fn(); //calling the callback function passed
     //some other logic
}

fun(10, function log(){ //this is a function expression, not a function declaration because the first keyword in the line  is not 'function', it is fun
    console.log("Custom logger");
})

fun();

/*How does this function execute inside the call stack? See this diagram: https://drive.google.com/open?id=1sDHxRXjqUabLsy_XvJXjWieVMPM5Rmsd, I will explain it briefly. Firstly, the fun function is loaded into the call stack for execution, inside the 'fun' function, the fn function is being called, and so the fn function goes to top of stack is executed. Once the execution of fn function is completed, it gets popped out of the stack, and once the execution of function fun completes, it will also get popped out of the call stack
One important thing to note here is that JS is a single threaded language, so at one time, only the function call at the top of the stack is being executed even though the call stack may have many function calls at any point of time
*/
