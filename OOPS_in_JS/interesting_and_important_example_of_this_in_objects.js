//One very important point to avoid confusion in examples: even though let obj1={name:'Girik'} is a formal declaration, however only formal declaration of variables (and not formal delcrataion of objects), get a scope assigned to them, so obj1 doesn't have a scope of its own
// In JavaScript, keys in objects do not form their own scope. Scopes in JavaScript are determined by functions and not by objects or keys within objects.
//only in case of arrow function, this follows lexical scoping. Otherwise in all cases, it follows the rule of 'calling site'

price = 'Hence proved, I am in global scope'
let obj10 = {
    prop: function temp() {
        console.log('This is ', this);
    },
    price: 100,
    prop2: () => { //gets assigned the global scope due to autoglobals, explained below
        console.log('This #2 is ', this);
        console.log(this.price);
    }
}

obj10.prop(); //the key rule is that 'this' refers to the calling site, and as the function is getting called from the obj object,so 'this' should refer to obj object

obj.prop2(); //this is the important and interesting case, here 'this' will not point to the object obj, instead it will refer to the global object, the reason lies in scoping. Explained below:

/*
    during the first phase of the parsing phase, scope resolution will take place. So, the scope manager will assign scopes to all formal declaration of variables and function declarations, so obj will get the global scope. Now, in the second phase (execution phase), when we access prop2 key from the obj object, it calls the function, and it is an arrow function, (we know that  'this' binding is not present in arrow functions), so 'this' will lexically get the scope of global objectt

    in short, if asked this type of question in interviews, we can simply reply: Because the arrow function doesn't have a "this" binding, it uses the parent's (or it's surrounding scope's "this"). "this" always points to the parent, and the parent of the person object is Window (but it's not neccesary that it will always be window object) (if you're in a browser). Interviewer will be more than happy with this explanation :P, see the below code snippet, it will enhance your understanding even more

*/

var obj = {
    name: "Sanket",
    company: "Google",
    display: () => {
        console.log(this.name, "works in", this.company);
    }
}

var obj1 = {
    name: "JD",
    company: "Microsoft",
    display: () => {
        setTimeout(() => {
            console.log(this.name, "works in", this.company);
        }, 3000);
    }
}

var obj2 = {
    name: "Sarthak",
    company: "Phonepe",
    display: function () {
        console.log('this in javascript object is',this);
        setTimeout(() => {
            console.log(this.name, "works in", this.company);
        }, 3000);
    }
}

obj.display(); //as display is an arrow function, so it doesn't have a 'this' binding. hence 'this' will be inherited lexically (from nearest available enclosing scope), so 'this' will be assigned to  global object. Now global object doesn't have a property named name, so it will print undefined.

obj2.display(); //as display is an arrow function, so it doesn't have a 'this' binding. hence 'this' will be inherited lexically (from nearest available enclosing scope), so it will be assigned to global object (note that objects never have their scope), so global.name and global.company shoul;d return undefined

obj2.display(); //the callback function defined in setTimeout is an arrow function, so it doesn't have a 'this' binding. So, it will inheirt the 'this' lexically, and it will get the scope of function declaration, on line 49. Now as the function declared on line 49 is not an arrow function, the 'this' in function declaratuon will point to calling site i.e. obj2, so this.name should print obj2.name and this.company should print obj2.company