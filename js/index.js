// JavaScript has 8 Datatypes
// 1. String                               |   "asd"  | 'asd'
// 2. Number                               |   123 | 212.5454
// 3. Bigint                               |
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

const normalObj = {name:"asd"}; // create a normal object
const nullProtoObj = Object.create({normalObj}); // create an object with "null" prototype

const o1 = new Object({normalObj})
const o2 = new Object();
const o3 = new Object();


console.log(o1)
console.log(o2)
console.log(o3)

normalObj.name = "iiii";

console.log(o1)
console.log(normalObj)