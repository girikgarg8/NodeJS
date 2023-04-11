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