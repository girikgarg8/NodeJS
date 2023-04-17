function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("Going to start the download");
        setTimeout(function process(){
            let data="Dummy downloaded data";
            console.log("Download complete");
            resolve(data);
        },10000);
        console.log("Timer to mimic download started");
    });
}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x=fetchData("www.google.com");
console.log("New promise object created successfully, but download still going on");

//run this on browser,to get a good understanding of 