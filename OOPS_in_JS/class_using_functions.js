//this type of syntax, where we create object using functions, is not valid in other languages like C++ or Java

function product(n,p){
    this.price=p;
    this.name=n;
    return this;
}

let p1=new product("iphone",111);

console.log(p1);