class Product{
    discount=10;
    //in order to define data members, we need to initialise it inside the constructor function, and we use the 'this' keyword to define it.
    //so the important point is that unlike C++, we don't need to declare the data members inside the class definition.
    //constructor function: when we create an object, this constructor is the function that gets called
    constructor(n,p){
        this.name=n;
        this.price=p;
    }

    //member function, I don't need to use the keyword 'function' in JS
    displayProduct(){
        console.log(this.name,this.price); //in order to access data members, we always have to use the this keyword, otherwise it will throw an error or it might clah with some other local variables
    }

    buyProduct(){

    }

}

let iphone=new Product("Iphone 11",11000); //internally this line will create a memory block called iphone in the memory, and assign properties 
let macbook=new Product("Macbook air",100000);
let samsungPhone = Product("samsung", 1000); //gives the error: TypeError: Class constructor Product cannot be invoked without 'new', as the creators of 'class' keyword made it compulsory to invoke it with 'new' keyword, as the class keyword internally calls function under the hood, and we don't want to return undefined from the function (see the notes.txt for more context)

console.log(iphone,macbook);
console.log(typeof(macbook));

let obj={ //this is known as object literal, so keep that in mind for interviews
    name: "Girik",
    age:22
}