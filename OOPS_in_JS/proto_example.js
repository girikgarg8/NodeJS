function Product(n){
    this.name=n;
    //return this -->this is implied
}

let d=new Product('Girik');

Product.prototype.hello=function (){ console.log('Hello')}; //modiyong class even after creating obhject, still able to make changes in the object, because JS doesn't have a concept of copy for objects

Product.prototype.display=function(){console.log('Name of the product is',this.name)}; //here we can't use arow function, because arrow functions don't have an arrow binding, and they use the 'this' keyword from the enclosing scope, so 'this' will point to global object , this was discussed earlier as well

d.hello();
d.display();