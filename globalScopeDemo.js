let name="Girik"

function greet(){
    console.log("Greetings! ",name)
    var x=10;
    function test(){
        console.log("test",x)
    }
    test()
    console.log(x)
}
function fun(){
    console.log("Have fun!! ",name)
}

greet();
fun();
