function todo(task){
    console.log("Starting of todo function")
    setTimeout(function fun(){
        console.log("completed ",task);
    },2000)
    console.log("Ending of todo function");
}

console.log("Starting");
todo("assignments");
console.log("Ending")