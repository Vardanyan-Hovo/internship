"use strict"

// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object



//-------------------------------------------------- Shallow copy ------------------------------------
// create a normal object
const Obj = { a: 1, b: 2 ,c:{
    ca:12
}}

const ObjNew = new Object(Obj)
const ObjSpread = {...Obj};
const Objectassign = Object.assign({}, Obj);//{...obj}
const ObjectSello = Object.fromEntries(Object.entries(Obj)); //fromEntries object (entries[key, value])

console.log("---- Sello copy ----")

ObjNew.a = 5
ObjNew.c.ca = 15

console.log("Obj                                          " + JSON.stringify(Obj));
console.log("new Object(Obj)                              " + JSON.stringify(ObjNew, undefined,2));
console.log("{...Obj};                                    " + JSON.stringify(ObjSpread, undefined,2));
console.log("Object.assign({}, Obj);                      " + JSON.stringify(Objectassign, undefined,2));
console.log("Object.fromEntries(Object.entries(Obj));     " + JSON.stringify(ObjectSello, undefined,2));

//-------------------------------------------------- Deep copy ------------------------------------

console.log("\n\n---- Deep copy -----")

const object = { a: 3, b: 4, c:{
    ca: 12
} };
const newObject = JSON.parse(JSON.stringify(object));
object.a = 5;
object.c.ca = 15
console.log(JSON.stringify(object,undefined,2))
console.log(JSON.stringify(newObject,undefined,2))


//------------------------------------ entries    fromEntries ------------------------------------

console.log("\n\n---- entries    fromEntries -----")


// Original object
const originalObject = { a: 1, b: 2, c: { nested: true } };

// Using Object.entries() to get an array of [key, value] pairs
const entries = Object.entries(originalObject);

// Using Object.fromEntries() to convert the array of [key, value] pairs back into an object
const copy = Object.fromEntries(entries);

// Output
console.log("Original Object:", JSON.stringify(originalObject, undefined, 2));
console.log("Copied Object:", JSON.stringify(copy, undefined, 2));

// Modifying the copied object
copy.a = 10;
copy.c.nested = false;

// Output after modification
console.log("Original Object after modification:", JSON.stringify(originalObject, undefined, 2));
console.log("Copied Object after modification:", JSON.stringify(copy, undefined, 2));


//------------------------------------ Array ------------------------------------


console.log("\n\n---- Array -----")
// Using a Loop
const numbers = [];
for (let i = 1; i <= 1000; i++) {
    numbers.push(i);
}
// Using Array.from():
const numbers1 = Array.from({ length: 1000 }, (_, index) => index + 1);

console.log(numbers1.reduce((str,value)=>{return str+=value + " "},""));

// Using Array.fill() and Array.map():
const numbers2 = new Array(1000).fill(0).map((_, index) => index + 1);

// numbers2.forEach((e)=>console.log(e));

console.log(numbers1.reduce((str,value)=>{return str+=value + " "},""));


//----------------------------------------------------------------------------  Event loop

const seconds = new Date().getTime() / 1000;

setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}


//-----------------------------------------------------------------------------------------



var obj = {};

Object.defineProperty(obj, 'readOnly', {
  value: 'This property is read-only',
  writable: true,
  configurable: true  // Once set to false, cannot be changed
});

console.log(obj.readOnly); // Output: This property is read-only
obj.readOnly = "45"
// Attempting to delete the property
console.log(obj.readOnly); // Output: This property is read-only (Property still exists)
delete obj.readOnly;

