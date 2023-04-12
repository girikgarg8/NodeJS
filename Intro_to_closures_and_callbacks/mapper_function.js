function mapper(arr,func){
    let result=[];
    for (let i=0;i<arr.length;i++){
        result.push(func(arr[i],i));
    }
    return result;
}

let arr=[1,2,3,4,5,6];

mapper(arr,(val,ind)=>{
    console.log(val,val*val*val,ind);
    return val*val*val
})
