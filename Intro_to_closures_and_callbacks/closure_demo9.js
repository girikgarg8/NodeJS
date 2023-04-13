const add=(function exec(){
    let counter=0;
    return function process(){
        counter+=1;
        console.log(counter);
        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

//what will be the output of this code?

/*
let's go step by step

firstly let'see what would console.log(add) be? add is an IIFE, so it would execute the function exec and return the function process, also from closures, function process will remember the scope of exec function

now when add function is being called, it is incrementing counter (from the lexical scope),and hence it should print 1 2 3
*/