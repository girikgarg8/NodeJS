let arr=[1,2,3,4,5,6];

let x=arr.map(function fun(val,ind){
    console.log(val,ind);
    return val*val;
})

console.log(x)
console.log(arr)

/*
How this function is executed internally isnide the call stack? See this image: https://drive.google.com/open?id=1eN7bzQVGbGQ4YOdQZh_zzEpAqSIt-Qsc
*/