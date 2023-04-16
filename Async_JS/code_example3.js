//such code examples, may involve the the knowledge of both closures and async nature of JS, they are good to test the knowledge of JS

function process(){
    console.log("Start");
    for (var i=1;i<3;i++){ 
        setTimeout(function exec(){ /*exec will remember the scope of 'process' function due to closures */
            console.log("Executed after some time")
        },3000)
        console.log("Inside for loop");
    }
    for (var j=0;j<10000000;j++){

    }
    console.log("end");
}
process();

//expected output is "start" , "Inside for loop" (2 times since loop is executing two times), "End", and then the output from the two setTimeout's 

//this is what the output is, congratulations :D