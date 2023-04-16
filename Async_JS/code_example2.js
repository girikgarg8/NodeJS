function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("Exceuted some task")
    }, 3000);

    for (let i = 0; i < 10000000; i++) {
        //some task
    }
    console.log("End");

    setTimeout(function exec2() {
        console.log("Exceuted task-2 ")
    }, 3000);
    //as the event queue is a queue, so it follows FIFO order
}

console.log("Starting process");
process();
console.log("Ending process");