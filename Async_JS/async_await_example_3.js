function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}


console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv"); //a promise with pending state and value=undefined will be returned to allow synchronous execution of code
promiseObj.then(function A(value) {
    console.log("value is", value);
})
console.log("end"); 

//Let's predict the output, it will enhance our understanding of call stack, microtask queue and callback queue even more :)