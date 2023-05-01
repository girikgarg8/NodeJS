console.log(10-{"a":10,valueOf() {return 2;}})

console.log(10 - { "a": 10, valueOf() { return "Hi"} })

console.log(10+"10");