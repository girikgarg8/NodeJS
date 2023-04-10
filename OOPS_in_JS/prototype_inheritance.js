let x={};

console.log(x); //if we exceute this code on browser, we can see that the prototype is set to Object, and there are many functions which are getting inherited from the prototype, like toString() and valueOf(), which we didn't define, still we are able to use them--it is due to the concept of prototype based inheritance