/*
let's again take the example of fetching some data from a URL, write it into a file onto the hard disk and uploading it to a remote URL

as these tasks require a particular order to execute 1->2->3 , so I can either use callbacks or promises, here I am using promises to do the task
*/
function fetchData(url){
    return new Promise(function process(resolve,reject){
        //inside the process object, write logic to perform the synchronous or asnychronous task
        //async task
        setTimeout(function fun(){
            console.log("Started fetching data from ",url);
            const data="RC_Mukherjee_Book";
            resolve(data);
        },7000);
    })
}

function writeData(data){
    return new Promise(function (resolve,reject){
        setTimeout(function fun(){
            console.log("Started writing into file");
            const filename="output.txt";
            resolve(filename); //think that it is analogous to call callback function from callback function
        },3000)
      }
    )
}


function upload(filename,url){
    return new Promise(function process (resolve,reject){
            setTimeout(function fun(){
                console.log("Started uploading file ",filename, " to URL ",url);
                const result="SUCCESS"; 
                resolve(result);
            },3000);
        }
    )
}

// let downloadPromise = fetchData("www.pdfdrive.com");

// downloadPromise.then(function processDownload(value){ //always keep in mind one thing, whenever I use a .then with a promise object, I use as the function argument as the value returned from the promise ---> in simple words, I want the value returned from the promise here, becaue it is required for further processing
//     console.log("Download promise fulfilled");
//     console.log("Value received is",value);
// })

//now let's write a promise based syntax to do the three tasks: downloading, writing to file system, anmd then uploading: as is with callbacks, the requirement is that the output of first operation should be fed as input to another one

// let downloadPromise2 = fetchData("www.pdfdrive.com");

// downloadPromise2.then(function processDownload(value) { //always keep in mind one thing, whenever I use a .then with a promise object, I use as the function argument as the value returned from the promise ---> in simple words, I want the value returned from the promise here, becaue it is required for further processing
//     console.log("Download promise fulfilled");
//     console.log("Value received is", value);

//     //now passing the output of first promise to input
//     let writeDataPromise=writeData(value);
//     writeDataPromise.then(
//         function processWrite(value){
//             upload(value,"drive.google.com")
//         }
//     )
// })
//the problem with the above syntax is that it is callback hell like code structure, this is in fact called "promise hell"
//so in order to solve the problem of "promise hell", promise chaining was introduced
//one thing to keep in mind before using promise chaining: the basic concept of promises due to which promise chaining is possible: the concept is that :"the .then() function of a promise object also returns a promise, so we can return data from this promise onto the next execution unit which requires it"

// let downloadPromise3= fetchData("www.pdfdrive.com");

// x=downloadPromise3.then(function (val){
//     console.log("Value is ",val);
//     return "Girik_garg";
// }); 
//run this code, and expand the promise object, once the "value is rc_muhkerjee_book" is printed, you'll see "Girik_Garg" in the promise value(as that data is being returned)

//example below with promise chaining
let downloadPromise4 = fetchData("www.pdfdrive.com");

downloadPromise4.then(
    function resolveDownload(downloadData){
        console.log("Downloaded data is ",downloadData);
        return downloadData; //x is a promise whose value is "RC_Mukherjee_Book" upon fulfillment, the first promise has to return the data while subsequent promises in the promise chain have to return "promises", not "values"(inputs/outputs)
    }
)
.then(
    function processWrite(value){
       return writeData(value) //return promise
    }
)
.then(function processUpload(value){
    return upload(value,"drive.google.com");
})
.then(function resolveUpload(success){
    console.log("All three steps completed successfully");
})



