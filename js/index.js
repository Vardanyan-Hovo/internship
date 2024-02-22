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
const Objectassign = Object.assign({}, Obj);
const ObjectSello = Object.fromEntries(Object.entries(Obj));

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
console.log("Original Object:", JSON.stringify(originalObject, undefined,2));
console.log("Copied Object:", JSON.stringify(copy,undefined,2));

// Modifying the copied object
copy.a = 10;
copy.c.nested = false;

// Output after modification
console.log("Original Object after modification:", JSON.stringify(originalObject,undefined,2));
console.log("Copied Object after modification:", JSON.stringify(copy,undefined,2));


//------------------------------------ Array ------------------------------------


console.log("\n\n---- Array -----")
// Using a Loop
const numbers = [];
for (let i = 1; i <= 1000; i++) {
    numbers.push(i);
}
// Using Array.from():
const numbers1 = Array.from({ length: 1000 }, (_, index) => index + 1);

// console.log(numbers1.reduce((str,value)=>{return str+=value + " "},""));

// Using Array.fill() and Array.map():
const numbers2 = new Array(1000).fill(0).map((_, index) => index + 1);

// numbers2.forEach((e)=>console.log(e));

console.log(numbers1.reduce((str,value)=>{return str+=value + " "},""));



//-----------------------  In JavaScript, OOP inheritance can be achieved using prototypes


// Parent constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype of Person
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

// Child constructor function
function Student(name, age, grade) {
    Person.call(this, name, age); // Calling the parent constructor
    this.grade = grade;
}

// Inheriting from the Person prototype
Student.prototype = Object.create(Person.prototype);


// Adding a method to the Student prototype
Student.prototype.sayGrade = function() {
    console.log(`I am in grade ${this.grade}.`);
}

// Creating an instance of Student
const student1 = new Student('Alice', 15, 9);
const parent1 = new Person('Pier',16);

// Using inherited methods
student1.sayHello(); // Outputs: Hello, my name is Alice and I'm 15 years old.
student1.sayGrade(); // Outputs: I am in grade 9.

console.log(student1)
console.log(parent1)



//-------------------------------------    OOP classical inheritance



console.log("\n\nclassical inheritance")


// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Child class inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the constructor of the parent class
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Creating instances of classes
  const dog = new Dog('Buddy', 'Labrador');
  const animl = new Animal();
  dog.speak(); // Outputs: Buddy barks.

  console.log("(dog instanceof Dog)   == " + (dog instanceof Dog))
  console.log("(dog instanceof Animal)   == " + (dog instanceof Animal))
  console.log("(animl instanceof Dog) == " + (animl instanceof Dog))


// -------------------------------------------------------OOP Encapsulation
console.log("\n\n Encapsulation")

function Person(name, age) {
    let _name = name; 
    let _age = age;

    this.getName = function() {
        return _name;
    };
    this.getAge = function() {
        return _age;
    };
    this.setName = function(newName) {
        _name = newName;
    };
    this.setAge = function(newAge) {
        if (newAge >= 0) {
            _age = newAge;
        }
    };
}

const person = new Person('Alice', 30);
person.setName('Bob');
person.setAge(-5);
console.log(person.getName());
console.log(person.getAge()); 

//-------------------------------------------------------  OOP Polymorphism
console.log("\n\n Polymorphism Run-time")

//1 Run-time polymorphism (also known as dynamic polymorphism): This is achieved using method
// overriding. Method overriding occurs when a subclass provides a specific implementation of a 
// method that is already defined in its superclass.

class Animal2 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class
class Dog2 extends Animal2 {
    constructor(name) {
        super(name);
    }

    // Overriding the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog2 = new Dog2('Buddy');

dog2.speak(); // Outputs: Buddy barks.

//-------------------------------------------------------  OOP Polymorphism

console.log("\n\n Polymorphism Compile-time")
//2 Compile-time polymorphism, also known as static polymorphism, is a mechanism in 
//  programming languages where the compiler determines which function or method to call at 
//  compile time based on the number, types, and order of arguments passed to it.

class Calculator {
    // Method overloading for addition
    add(x, y) {
        return x + y;
    }

    add(x, y, z) {
        return x + y + z;
    }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add(2, 3, 4));

//------------------------------------------------------------- OOP  Abstraction
console.log("\n\n OOP  Abstraction   1111")

class Figure{
    constructor(name) {
        this.name = name
    }
}


class Circle extends Figure {
    constructor(){

    }
}

//------------------------------------------------------------- OOP  Abstraction
console.log("\n\n OOP  Abstraction  2222")
//Creating a constructor function
function Vehicle()
{
    this.vehicleName="vehicleName";
    throw new Error("You cannot create an instance of Abstract Class");
}

Vehicle.prototype.display=function()
{
    return "Vehicle is: "+this.vehicleName;
}

//Creating a constructor function
function Bike(vehicleName)
{
    this.vehicleName=vehicleName;
}
//Creating object without using the function constructor
console.log(Vehicle.prototype);
console.log(Vehicle);


Bike.prototype=Object.create(Vehicle.prototype);
var bike=new Bike("Honda");
document.writeln(bike.display());
