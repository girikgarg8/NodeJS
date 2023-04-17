//promise to download some data from url 

function fetchData(url){
    return new Promise(function f(resolve,reject){
        console.log("Started fetching from",url);
        setTimeout(function process(){
            let data="Dummy data";
            console.log("Completed fetching the data");
            //somehow we need to return the data. In promises, it is done with the help of 'resolve' or 'reject' the data
            resolve(data);
        },3000);
    });
}

let x=fetchData("www.google.com");

console.log(x);

function fetch1(){
    return new Promise(function (resolve,reject){
        //any logic
        for (let i=0;i<100000000;i++){
            //some task
        }
        console.log("Completed");
        resolve("girik");
    })
}

fetch1(); //try all these examples in browser