console.log(1+"1")
console.log(1-"1")


console.log(10-{"a":10,valueOf() {return 2;}})
console.log(10 - { "a": 10, valueOf() { return {}; }, toString() { return "5" } })

a={"x":1}
console.log(a.toString())
console.log(a.valueOf())

let x={a:10}
x.b=20
console.log(x)

console.log(10-{"x":1,valueOf(){return x;}}) //10-undefined variable will give NaN

console.log("0xff"-2)
console.log("0o11"-1)

const u=[10,20];
console.log(u.toString()); 
console.log(u.valueOf());