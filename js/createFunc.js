"use strict"
var o1 = {p :43}

var o2 = Object.create(
    {},
    {
      p: {
        value: 43,
        writable: true,
        enumerable: true,
        configurable: true,
      },
    },
  );


// This is not equivalent to:
var o3 = Object.create({ p: 42 })
  // which will create an object with prototype { p: 42 }
console.log(o1)
console.log(o2)
console.log(o3)