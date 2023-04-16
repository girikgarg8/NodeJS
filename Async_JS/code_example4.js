function fun(){
    console.log("Fun called");

    setTimeout(function exec(){
        console.log ("Inside the 7s timeout")
    },7000)

    setTimeout(function exec() {
        console.log("Inside the 3s timeout")
    }, 3000);
    console.log("Function ended");
}

fun(); //expected output is inside 3s timeout, 'inside 7s timeout' because runtime would firstly push the 3s timeout into event queue (becaue it gets finished first)