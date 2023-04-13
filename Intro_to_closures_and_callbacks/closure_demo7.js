function test(){
    for (var i=0;i<4;i++){ //var is function scoped (not blocked scoped), also one more thing to note is that for different iterations of the for loop, everytime a new scope is getting created, think of it as something like:
        // {scope iteration:1} {scope iteration:2} {scope:iteration 3}
        setTimeout(function exec(){ //so function exec rememeber the scope of function test, and when the setTimeout execeutes after completing the main thread, it will access the variable i from the scope of the function test, which would be 5 after the loop ends

            //however if I use let instaed of var, i will remeber the scope of each block iteration,
            console.log(`i: ${i}`);
        },i*1000);
    }
}


test();