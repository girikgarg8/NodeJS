function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log ("Exceuted some task")
    },3000);

    for (let i=0;i<10000000;i++){
        //some task
    }
    console.log("End");
}

console.log("Starting process");
process();
console.log("Ending process");