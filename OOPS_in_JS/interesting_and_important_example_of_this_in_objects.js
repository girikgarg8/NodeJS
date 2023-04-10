price = 'Hence proved, I am in global scope'
let obj = {
    prop: function () {
        console.log('This is ', this);
    },
    price: 100,
    prop2: () => { //gets assigned the global scope due to autoglobals, explained below
        console.log('This #2 is ', this);
        console.log(this.price);
    }
}

obj.prop(); //the key rule is that 'this' refers to the calling site, and as the function is getting called from the obj object,so 'this' should refer to obj object

obj.prop2(); //this is the important and interesting case, here 'this' will not point to the object obj, instead it will refer to the global object, the reason lies in scoping. Explained below:

/*
    during the first phase of the parsing phase, scope resolution will take place. So, the scope manager will assign scopes to all formal declaration of variables and function declarations, so obj will get the global scope, and prop will get the scope of obj, but prop2 wil not get any scope assigned to it (because it is a function expression, not function declaration). Now, in the second phase (execution phase), when we access prop2 key from the obj object, it calls the function, but as the function doesn't have any scope defined to it (when it will ask the scope manager, it will say no), so it tries to go to upper levels of scope to look for scope, and finally from 'autoglobals' concept, prop2 gets assigned the scope of global object, so when I console.log(this), it returns me the global window object (in browsers).

    in short, if asked this type of question in interviews, we can simply reply: Because the arrow function doesn't have a "this" binding, it uses the parent's (or it's surrounding scope's "this"). "this" always points to the parent, and the parent of the person object is Window (if you're in a browser). Interviewer will be more than happy with this explanation :P

*/