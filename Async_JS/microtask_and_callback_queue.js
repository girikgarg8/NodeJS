function DummyPromise(){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve("Timer's promise")
        },1000);
    })
}

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
    let y=DummyPromise();
    y.then(function promiseY(value){
        console.log("Whose promise ?",value);
    })
},0);

let x=Promise.resolve("Sanket's promise");
x.then(function processPromise(value){
    console.log("Whose promise ?",value);
})

setTimeout(function timer2(){
    console.log("Timer 2 done")
},0);

console.log("End of file")

//dry run this with the help of microtask and callback queue, to get the reason the output behaves that way

//one thing to keep in mind is that whenever a promise is declared (like at line 9), and then the 'then' function is declared, the promise stores the callback function of then inside the onFullfilment array of the promise

//the promise is pushed into the microtask queue, once that promise is resolved. Now how does that promise know, which function I have to execute? It knows that from the onFullfillment array, the promise doesn;t scan through the code again to look for the promise object :)