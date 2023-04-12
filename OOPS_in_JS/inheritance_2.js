class Category {
    constructor(c) {
        this.categoryName = c;
    }
    getCategoryName() {
        console.log("Category is ", this.categoryName);
    }
}

class Product extends Category { //extends keyword is just a syntcatical sugar in JS, the behavior of extends in javascript is different from Java or other languages. What extends does is that Product.Prototype inherits from Category.Prototype, see this line 'Product.prototype = Object.create(Category.prototype); from inheritance_1.js, the given line of code class Product extends Category is just a syntactical sugar over 'Product.prototype = Object.create(Category.prototype)'

    //so in general if class child extends parent,what it means is that child.prototype inherits from parent.prototype (Important interview question)

    //so as a summary, keep in mind that the keyowrds like 'new','this' and 'extends' ahve differeent behavior than other languages like CPP or Java
    constructor(n, p, c) {
        super(c); //using super keyword will call the constructor of parent class with c as the parameter
        this.name = n;
        this.price = p;
    }

    display() {
        console.log("Details of the product are ");
        console.log("Name", this.name);
        console.log("price", this.price);
        this.getCategoryName();
    }
}

let p = new Product("iphone", 10000, "electronics");