// {
//     var x=10;
//     console.log(x)
// }
// console.log(x)

function fun(){
    console.log(x) //why do we get undeined? Answer is due to lexical scoping
    var x = 10;
    console.log(x)
}

{
    var y=10;
}

if (true){
    var z=30;
}
if (false){
    var a=20;
}
fun()
console.log(y)
console.log(z)
console.log(a)