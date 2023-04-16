//let's say I have a use-case where I want to download some content from a URL "www.google.com"
//let's see if we are able to do it without using any callback functions

function fetchCustom(url){
    // as getting data will take some time, it's better to make it an asynchronous operation, so that the main thread is not blocked

    setTimeout(function fun(url){ //we are just mocking the action of fetching data from URL
        console.log("Fetching operation from URL started")
        let response="data"
        console.log("Fetching operation from URL completed")
        //return response; //in vain
    },3000)
}

fetchCustom("www.google.com")

//Now there is no way, in which I can return the response obtained. Just try out all possible ways, you'll find that we cannot return the response, because the function fetchCustom is already out of the call Stack, and only after that the setTimeout goes from the callback queue to the call stack for execution. So I need to necessarily pass a callback function, so that the response can be returned, something like the code below:

function fetchCustom2(url,fn) {
    // as getting data will take some time, it's better to make it an asynchronous operation, so that the main thread is not blocked

    setTimeout(function fun(url) { //we are just mocking the action of fetching data from URL
        console.log("Fetching operation from URL started")
        let response = "data"
        console.log("Fetching operation from URL completed")
        fn(response);
    }, 3000) //now the function will remember the scope of fn, due to closures :)
}

fetchCustom2("www.google.com",function fun2(response){
    console.log("Response received is ",response);
})

//now that you have understood, why a callback function is needed, go to why_promise_callback_hell_2.js file, you'll get more understanding :)

// Also appreciate now, that why in projects, when we use some library functions (like let's say a function to create a new record in database), why we need to use callback functions? The reason being that callback function is the ONLY mechanism by which asynchronous operation in a function can return us some data (if it was synchonrous, we could have used return statement from function), but that's not possible with asynchronous task).