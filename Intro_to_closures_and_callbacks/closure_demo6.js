function fun(task1,task2){
    task1="paras";
    setTimeout(function gun(){
        console.log("completed",task1);
    },2000);
    task1=task2;
    task2="assign";
    //after execution of this function, task1 will have the value string "34" and "assign" will have the value "assign"
}

fun("12","34"); //by the concept of closures, function gun() will remember the lexical scope (i.e. scope of function fun), so when setTimeout executes, it should print "34" and "assign"