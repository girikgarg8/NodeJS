let arr=[1,2,3,4];

console.log(typeof(arr));

console.log(Object.keys(arr));

console.log(Object.values(arr));

console.log(Object.entries(arr)); //will print the entries in form of key value pair

let obj1={
    x:10,
    y:90
}

Object.freeze(obj1); //the freeze method will prevent any existing key from getting updated, and it will prevent any new property from getting added in the object

obj1.x=20;

obj1.z=20;

let obj2={
    x:90,
    y:1000
}

console.log(obj1);

Object.seal(obj2); //with the seal method,we can update the exisiting methods but not add new properties

obj2.z=1110;

obj2.x=1000;

console.log(obj1)

function hi(){
    console.log('Hello');
}

console.log(typeof(hi)) //will print function


//Object.create function---> misconcepttion: it creates a deep copy of an object--->NO!
//What does Object.create function do? It creates a new object, and the sets prototype of the object to the object. Let's see code example:
/*
let obj2 = obj1:  TLDR; assignment operator creates a shallow copy

This statement creates a new object obj2 and assigns it a reference to the same object that obj1 is referring to. In other words, obj2 and obj1 now point to the same object in memory. Any changes made to obj2 or obj1 will affect the same object, and they are essentially two different variable names pointing to the same object. This is called a shallow copy, as only the reference to the object is copied, not the properties of the object itself.


But if I use the syntax: const obj2=Object.create(obj1)

This statement creates a new object obj2 and sets its prototype to be obj1. In other words, obj2 is a new object that inherits properties from obj1. Any changes made to obj2 will not affect obj1, as they are separate objects in memory. This is called prototypal inheritance, where obj1 becomes the prototype object of obj2.

*/
let obj_girik={
    x:90,
    y:1000
}
const obj_giri=Object.create(obj_girik);

console.log(obj_girik.x); //prototype inheritance 