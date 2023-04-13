console.log("Start");

setTimeout(()=>{
    console.log("Executed task")
},2000);

console.log("end");

//another example
let id1=setTimeout(function execute(){
    //some task
    console.log("Task completed 1");
},10000);

let id2=setTimeout(function execute2(){
    //some task
    console.log("Task completed 2");
    clearTimeout(id1);
},5000)