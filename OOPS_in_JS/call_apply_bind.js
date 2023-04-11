function fun(age,dish){
    console.log(this.name+ ' lives in '+this.city+ 'His age is '+age+ 'His favourite dish is '+ dish);
}

const obj1={
    name: 'Girik',
    city: 'Patiala'
}

fun.call(obj1,22,'sushi');

fun.apply(obj1,[23,'curry']);

let func=fun.bind(obj1,24,'fish');

func();