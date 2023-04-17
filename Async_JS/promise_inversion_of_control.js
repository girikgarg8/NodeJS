function fetchData(url) {
    return new Promise(function process(resolve, reject) {
        setTimeout(function fun() {
            console.log("Started fetching data from ", url);
            const data = "RC_Mukherjee_Book";
            resolve(data);
            resolve("Girik"); //once a promise is reolved, it cannot be resolved again. This is analogous to that if a function has returned once, we cannot return from that function again, so this behaviour prevents me from calling a function twice mistakedly,thus it helps to avoid inversion of control, also if the resolve() function is never called, so we'll come to know through the pending state of promise
            resolve("Garg");
            console.log("Hello");//this console log will get printed, because we just said that in a promise 'resolve' can't be twice, we never said that other statements cannot execute :)
        }, 7000);
    })
}

let downloadPromise = fetchData("www.pdfdrive.com");

downloadPromise.then(function processDownload(value) { //always keep in mind one thing, whenever I use a .then with a promise object, I use as the function argument as the value returned from the promise ---> in simple words, I want the value returned from the promise here, becaue it is required for further processing
    console.log("Download promise fulfilled");
    console.log("Value received is", value);
})