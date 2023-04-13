function test(){
    for (let i=0;i<3;i++){
        setTimeout(function exec(){
            console.log(`i:${i}`); //function exec is remembering  the scope of test, and i is being accessed through the scope of for loop iterations {scope iteration 1} {Scope iteration 2}
        },i*1000);
    }
}

test();

function test2(){
    for (var i = 0; i < 3; i++) {
        let j=i;
        setTimeout(function exec() {
            console.log(`j:${j}`); //function exec is remembering  the scope of test, and j is being accessed through the scope of for loop iterations(as let is block scoped) {scope iteration 1} {Scope iteration 2}
        }, j * 1000);
    }
}

test2();