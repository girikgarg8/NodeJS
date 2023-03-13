var a={"x":10}
let b={"x":10}
console.log(a===b)
console.log(a===a)

let c="hello12345"
let d="hello12345"
console.log(c===d)
console.log(c===c)

console.log(true===true)
console.log(true===false)

console.log(undefined==null)

a=5;
if (a){ // if(codnition)
    console.log("Hi there") //this line will be printed
}
if (a==true){ //5==1 (due to coercion)->false
    console.log("Bye bye") //this line won't be printed
}
