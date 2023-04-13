function fun(){
    let name="harshit";
    function callback(params){
        console.log(college);
        console.log(name);
    }
    return callback;
}

let x=fun();
x(); //the function callback() is being called, and the function callback remembers its lexical scope (fun), so college is printed as undefined (because in the first phase of parsing, college variable was declared in the global scope but it hasn't been assigned a value yet in the execution phase, so it is undefined), and 'name' will be printed as harshit from scope of function 'fun'
var college="iit delhi";
x(); //college variable is getting printed from the scope of 'fun' and 'name' variable is getting printed from the global scope