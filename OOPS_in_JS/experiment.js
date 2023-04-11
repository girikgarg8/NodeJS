function Product(n,p){
    this.name=n;
    this.price=p;
}

let d1=new Product('iphone',10010);

d1.__proto__ //accessing the dunder proto, so it should print Product's prototype

console.log(d1.__proto__==Product.prototype);

console.log(d1.__proto__.constructor)

console.log(Product.prototype.constructor==Product)

