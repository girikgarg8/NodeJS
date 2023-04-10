function Product(n,p){
    this.name=n;
    this.price=p;
    // return 10; -->try this

    console.log('this points to',this);
    return {name:'Girik',phone:'9992'}
}

let p1=new Product('iphone',28282);

let p2=Product('mac',9292); //in this case, as we are not using new keyword, so consequently, no empty object woulld be getting created which owuld call the fiunction, so in this case the calling site is the global object, so 'this' will point to global object

console.log(p1);

console.log(p2); 