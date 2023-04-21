function dummyPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Timer's promise")
        }, 10000);
    });
}
console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 done");
    let y = Promise.resolve("Immediately promise"); //the event loop can't push this into the call stack because event loop only searches the microtask queue and callback queue, only when the call stack is empty, at this point, timer1 is in call stack
    y.then(function promiseY(value) {
        console.log("Whose promise ?", value); //this will be executed first than timer2 because thr microtask queue has higher priority than the 
    });
}, 0);


let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value) {
    console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");

//predict the output of this file, it will help to clear the concepts :)