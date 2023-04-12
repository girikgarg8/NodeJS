function Product(n,p,c){
    this.name=n;
    this.price=p;
    Category.call(this, c); //how does this work? let's understand it step by step. When I call the new keyword in line 14, a brand new empty object gets created, in step-2 prototypal linking happens of the object with the function's prototype, in step-3 the empty object calls the function (hence, the 'this' gets binded to empty object {} ) and in 4th step,the function execution of Product starts. Now when I call, Category.call(this,c); (syntax fun.call(obj1)) I am basically instructing the Category call that 'this' in Category function call should point to 'this' of Product (i.e. the empty object), so in Category function,  this.CategoryName is assigning value to the empty object of Product class
}

function Category(c){
    this.categoryName=c;
    this.getCategoryName=function (){
        console.log(this.categoryName);
    }
}


let p=new Product("Iphone",10000,"Electronics");

console.log(p);

//there's another way to do this, with the help of protoypal inheirtance, see inheritance_1.js file (using classes instead of functions)