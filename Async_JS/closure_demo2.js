function task(todo){
    console.log("Function execution starts");
    setTimeout(function fun(){
        console.log(todo); //prints Badminton, because function fun is getting the scope of task, and the function fun just remembers the scope of task, it doesn't store todo as "Activities" inside it
    },5000);
    todo="Badminton";
    console.log("Function exeuction ends"); 
}

task("Activities"); 
