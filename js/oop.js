"use strict"



const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// Expected output: true
//--------------------------------------------------------------- prototype inheritance

const a = {
    name: "A"
}

const b = {
    name: "B"
}


const c = {
    age:25
}
const d = {
    age: 20
}

// a.__proto__ it take possible to refers to "b"
a.__proto__ = b;
b.__proto__ = c;
c.__proto__ = d;
 
console.log("a.age" + a.age);

delete a.age

console.log("a.age" + a.age);

//---------------------------------------------------------------

const as = {
    name: "Karen"
}

function bs() {
    //this = {}
    //this.__proto__ = as.prototype
    this.age  = 8;
    //return this
}

bs.prototype = as;

const newA = new bs();
console.log("newA" + newA)
//---------------------------------------------------------------

const s = {};
//equal
const sa = new Object()


//---------------------------------------------------------------

console.log("\n\n\n A inheritance ")
debugger
function AR() {
    this.isHuman= false;
    this.nameA = false;
    console.log("A call");
    this.printIntroduction= function () {
        console.log("A printIntroduction");
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
};

function BR() {
    AR.call(this);
    this.AA = "AAAAA";
    console.log("B call");
}

BR.prototype = Object.create(AR.prototype);

BR.isHuman = true;

// xA is created using Object.create(BR). This creates an object that 
// inherits directly from BR but does not invoke BR as a constructor function.
const xA = Object.create(BR);

// xB is created using Object.create(BR.prototype). This creates an object that 
// inherits from BR.prototype and is equivalent to creating an instance of BR using the new keyword.
const xB = Object.create(BR.prototype);

//created B with 
const xC = new BR();

console.log(Object.keys(BR))
console.log(BR)
console.log("xA.AA == "+xA.AA + "xA.isHuman == " + xA.isHuman)
console.log(Object.keys(xB))
console.log(xC);

//---------------------------------------------------------  object


const parent3 = {
    name:"Anna"
}
//samely
const parent = Object.create({
    name:"Anna"
})

Object.prototype.newFuncAll = function(){
    console.log("every object we create new file")
}

const L = Object.create(parent);

L.newFuncAll();

//---------------------------------------------------------    Encapsulation



console.log("\n\n Encapsulation");

function B(name, age) {
    let _name = name;
    let _age = age;

    this.getNameA = function() {
        return _name;
    };
    this.getAge = function() {
        return _age;
    };
    this.setNameA = function(newName) {
        if (newName !== undefined) {
            _name = newName;
        }
    };
    this.setAge = function(newAge) {
        if (newAge !== undefined && newAge >= 0) {
            _age = newAge;
        }
    };
}

const bA = new B('Alice', 30);
bA.setNameA('Bob'); // Pass newName argument
bA.setAge(25); // Pass newAge argument
console.log(bA.getNameA()); // Output: Bob
console.log(bA.getAge()); // Output: 25




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


//--------------------------------------------------    prototype inheritance   



console.log("\n\n\n----- prototype inheritance ---- ")
// Shape - superclass
function Shape() {
    let x = 0;
    this.y = 0;
    this.move = function (x, y) {
        this.x += x;
        this.y += y;
        console.info("Shape moved.");
    };
};

// superclass method


// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}

Shape.age = "22";

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype, {
    // If you don't set Rectangle.prototype.constructor to Rectangle,
    // it will take the prototype.constructor of Shape (parent).
    // To avoid that, we set the prototype.constructor to Rectangle (child).
    constructor: {
        value: Rectangle,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Shape.prototype.move = ()=>{
    console.log(this.x)
}


const rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Logs 'Shape moved.'
console.log(Shape)
console.log(Rectangle)
console.log(" =---  " +rect.value + "     " + rect.x)



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


Bike.prototype = Object.create(Vehicle.prototype);

var bike = new Bike("Honda");
document.writeln(bike.display());



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



//------------------------------------------------------------------------------
console.log("\n\n\n\n -----------------  ")
// In summary, all statements result in the creation of empty objects {}, but the way they 
// achieve it differs slightly due to how Object() behaves when called with or without new, 
// and with different arguments.
console.log(Object())
console.log(new Object())
console.log(new Object(undefined))
console.log(new Object(null))
console.log(Object(null))

//--------------------------------------------------------------------------------

const numberObj = new Number(1);
console.log(typeof numberObj); // "object"
console.log(numberObj); // "Number"


const bigintObj = Object(1n);
console.log(typeof bigintObj); // "object"
console.log( bigintObj); // "BigInt"


const symbolObj = Object(Symbol("foo"));
console.log(typeof symbolObj); // "object"
console.log( symbolObj); // "Symbol"

//---------------------------------------------------------------------  defineProperty
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



//------------------------------------------------------------------    prototype


const asd = { question: 248 };
let newobj = {};
console.log(newobj); // Output: {}

newobj = Object.create(asd); // newobj is now created with 'asd' as its prototype.

const copyobj = asd; // copyobj now references the same object as 'asd'.

console.log("newobj.question           = " + newobj.question); // Output: 248
console.log("asd.question    = " + asd.question); // Output: 248

newobj.question = 48; // Modifying 'newobj' property.

console.log("newobj.question           = " + newobj.question); // Output: 48
console.log("asd.question    = " + asd.question); // Output: 248

asd.question = 55; // Modifying 'asd' property.

console.log("newobj.question           = " + newobj.question); // Output: 55
console.log("asd.question    = " + asd.question); // Output: 55