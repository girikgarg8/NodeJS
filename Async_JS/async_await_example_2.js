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
async function processing() {
    console.log("Entering processing");
    let value1 = await fetchData("www.youtube.com");
    console.log("youtube downloading done");
    let value2 = await fetchData("www.google.com");
    console.log("google downloading done");
    console.log("Exiting processing");
    return value1 + value2;
}
console.log("Start");
setTimeout(function timer1() { console.log("timer 1") }, 0);
console.log("after setting timer 1");
let x = processing(); //a promise with 'pending' state is returned initially, because execution of fetchData(www.google.com) is an asynchronous task, and will require 7 seconds
console.log("out");
x.then(function f(value) {
    console.log("finally processing promise resolves with ", value);
}); //thr promise in line 23, it's onFullfillment array is linked with the function f
setTimeout(function timer2() { console.log("timer 2") }, 1000);
setTimeout(function timer3() { console.log("timer 3") }, 0);
console.log("End");

//dry run this example and predict the output: Done!