function demo2(val){
    return new Promise(function (resolve,reject){
        console.log("Start");
        setTimeout(function process(){
            console.log("Completed timer");
            if (val%2==0){
                //even number
                resolve("Even");
            }
            else{
                //odd number
                reject("Odd");
            }
        },10000);
        console.log("Somewhere");
    });
}

let b=demo2(6);
let a=demo2(5);

//try out this example in browser