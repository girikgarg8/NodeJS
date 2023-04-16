//now the task is to do 3 tasks: fetch data from a URL, write it onto a local file system and upload the file created locally to some remote URL

function fetchCustom2(url, fn) {
    // as getting data will take some time, it's better to make it an asynchronous operation, so that the main thread is not blocked

    setTimeout(function fun(url) { //we are just mocking the action of fetching data from URL
        console.log("Fetching operation from URL started")
        let response = "data"
        console.log("Fetching operation from URL completed")
        fn(response);
    }, 3000) //now the function will remember the scope of fn, due to closures :)
}

function writeFile(data,fn){
    //this function writes data in a new file
    console.log("Started writing data ",data);
    setTimeout(function process(){
        console.log("Writing completed");
        let filename="output.txt";
        fn(filename); //passing the file name
    },4000);
}

function uploadFile(filename,newurl,fn){
    console.log("Upload started");
    setTimeout(function process(){
        console.log("File ",filename, " uploaded successfully on ",newurl);
        let uploadResponse="SUCCESS";
        fn(uploadFile);
    },2000);
}

//till this point, I have made the function signatures or prototypes to execute these asynchronous tasks

//now one more thing to understand is that there is an order in which the functions need to execute: fetchCustom2,writeFile, uploadFile

/* fetchCustom2("www.google.com", function downloadCallback(response) {
    console.log("Downloaded response is", response);
})

writeFile(response, function writeCallback(filenameResponse) {
    console.log("new file written is", filenameResponse);
 }   
) */

//the above is a wrong way of writing code (And it will not even work), because the result of the first callback (the downloaded data from the URL has to be passed to the writeFile function), so the correct way of writing the code is as below:

fetchCustom2("www.google.com",function downloadCallback(response){
    console.log("Fetched content is ",response);
    writeFile(response,function out(filename){
        console.log("Successfully written into file",filename);
            uploadFile(filename,"drive.google.com",function process(response){
                console.log("Response is ",response);
            })
        }
    )
})

//the above code works perfectly fine, but leads to callback hell

