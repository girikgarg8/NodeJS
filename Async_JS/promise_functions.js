let x=Promise.resolve("Resolved successfully");

console.log(x);

let y=Promise.reject("Sorry, rejected :(");

y.catch(function process(val){
    console.log("Rejected with the message",val);
})
console.log(y);