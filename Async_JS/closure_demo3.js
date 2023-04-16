function a(name){
    return function b(){
        console.log(name);
    } //the function b is getting executed at line 9, even when executing outside the function 'a', function 'b' remembers its lexical scope (i.e. scope of b)
}

let x=a("Girik");
console.log(x);
x();