function Product(n, p, c) {
    this.name = n;
    this.price = p;

    Category.call(this, c);
}

function Category(c) {
    this.categoryName = c;
}


Product.prototype = Object.create(Category.prototype);

let p = new Product("Iphone", 100000, "Electronics");
Category.prototype.getCategoryName = function () {
    console.log("Called");
    console.log(this.categoryName);
}
p.getCategoryName(); //there is also an easier way to do this, with the help of using classes (syntactical sugar), see inheritance_2.js file, but still one should be familiar with this type of syntax because it might be used in legacy codebase

