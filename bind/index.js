"use strict";
debugger;

function myBind(foo, ...context) {
    return function(...arg) {
        if (context.length > 1) {
            let arr = context.reduce((e, value, index) =>{
                if (index) {
                    e.push(value);
                }
                return e;
            }, []);
            return foo.apply(context[0], arr);
        } else {
            return foo.apply(context[0], arg);
        }
    };
}

function foo(args) {
    console.log(this.name + " adasd. " + args);
}

const obj = {
    name: "Jon",
    age: 20
};

let bind = foo.bind(obj,190);
let mybind = myBind(foo, obj,190);
mybind(180);
bind(180);