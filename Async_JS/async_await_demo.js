//Taking the same example from consume_promise.js file

/*
let's again take the example of fetching some data from a URL, write it into a file onto the hard disk and uploading it to a remote URL
*/
function fetchData(url) {
    return new Promise(function process(resolve, reject) {
        //inside the process object, write logic to perform the synchronous or asnychronous task
        //async task
        setTimeout(function fun() {
            console.log("Started fetching data from ", url);
            const data = "RC_Mukherjee_Book";
            resolve(data);
        }, 7000);
    })
}

function writeData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function fun() {
            console.log("Started writing into file");
            const filename = "output.txt";
            resolve(filename); //think that it is analogous to call callback function from callback function
        }, 3000)
    }
    )
}


function upload(filename, url) {
    return new Promise(function process(resolve, reject) {
        setTimeout(function fun() {
            console.log("Started uploading file ", filename, " to URL ", url);
            const result = "SUCCESS";
            resolve(result);
        }, 3000);
    }
    )
}

//example below with promise chaining
// let downloadPromise4 = fetchData("www.pdfdrive.com");

// downloadPromise4.then(
//     function resolveDownload(downloadData) {
//         console.log("Downloaded data is ", downloadData);
//         let x = Promise.resolve(downloadData);
//         return x;
//     }
// )
//     .then(
//         function processWrite(value) {
//             return writeData(value) //return promise
//         }
//     )
//     .then(function processUpload(value) {
//         return upload(value, "drive.google.com");
//     })
//     .then(function resolveUpload(success) {
//         console.log("All three steps completed successfully");
//     }
// )

//let's see how we can do this using async-aewasit syntax

async function processing(){
    let downloadedData=await fetchData("www.google.com"); //the variable downloadedData contains the value returned from the promise when it is resolved, and I am able to consume the promise (.then() ) using async keyword instead of using .then function()

    console.log("Downloading await completed ", downloadedData);

    let file=await writeData(downloadedData);

    console.log("Writing await completed ",file);

    let uploadResponse=await upload(file,"drive.google.com");

    console.log("Uploading await completed");

    console.log("Completed process with response: ",uploadResponse);

    return true; //this will be wrapped inside a promise, as per the rule of async
}

/*
    techincally, the content inside processing function is same as using promisde chaining using multiple .then() functions, but it just makes the syntax more readable

*/
processing();