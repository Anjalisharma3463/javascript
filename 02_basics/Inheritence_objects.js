
/// when we can use new keyword or not?
// Constructor function
function Animal(type) {
    this.type = type;
  
    
  };
  
  Animal.prototype.displayType = function() {
    console.log(this.type);
  };
  
  const animal1 = new Animal('Invertebrates');
  animal1.displayType(); // Logs: Invertebrates
  
  const fish = new Animal('Fishes');
  fish.displayType(); // Logs: Fishes
  

  

/////same in anothr way
In JavaScript, you cannot directly define a method inside a constructor function using the shorthand method syntax. Instead, you need to define the method as a regular function within the constructor. Here’s how you can do it:

javascript
Copy code
function Animal(type) {
  this.type = type;

  this.displayType = function() {
    console.log(this.type);
  };
}

const animal1 = new Animal('Invertebrates');
animal1.displayType(); // Logs: Invertebrates

const fish = new Animal('Fishes');
fish.displayType(); // Logs: Fishes



// //Object.create
// When you use Object.create, you are creating a new object with the specified prototype object and properties. The Animal object in your example serves as the prototype for the new objects, but it is not a constructor function or class, so you can't use new with it.
const Animal = {
    type: "Invertebrates", // Default value of properties
    displayType() {
      // Method which will display type of Animal
      console.log(this.type);
    },
  };
  
  // Create new animal type called animal1
  const animal11 = Object.create(Animal);
  animal1.displayType(); // Logs: Invertebrates
  
  // Create new animal type called fish
  const fish1 = Object.create(Animal);
  fish.type = "Fishes";
  fish.displayType(); // Logs: Fishes
  


//USING CLASSES:

class Animal {
  constructor(type) {
    this.type = type;
  }

  displayType() {
    console.log(this.type);
  }
}

const animal1 = new Animal('Invertebrates');
animal1.displayType(); // Logs: Invertebrates

const fish = new Animal('Fishes');
fish.displayType(); // Logs: Fishes




//DEFINING PROPERTIES AND METHODS ON THE PROTOTYPE :::
// Define a constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Add a property to the prototype
  Car.prototype.color = "red";
  
  // Create an instance of Car
  const car1 = new Car("Toyota", "Corolla");
  
  // Access the shared property
  console.log(car1.color); // "red"
  
  // Create another instance of Car
  const car2 = new Car("Honda", "Civic");
  
  // Access the shared property
  console.log(car2.color); // "red"
  
  
//   In this example:
  
//   Constructor Function: The Car constructor function is defined with properties make and model.
//   Prototype Property: The color property is added to Car.prototype. This means every instance of Car will inherit the color property from Car.prototype.
//   Creating Instances: Two instances, car1 and car2, are created using the new keyword.
//   Accessing Shared Property: Both instances have access to the color property, which is inherited from the prototype.
//   How Prototype Inheritance Works
//   When you try to access a property on an object, JavaScript first looks for the property on the object itself. If it doesn't find it, it looks at the object's prototype, and then the prototype's prototype, and so on, until it either finds the property or reaches the end of the prototype chain (which is null).
  
//   Here's a breakdown of how it works in the example:
  
//   car1.color: JavaScript first checks if car1 has a color property. It doesn't find it there, so it looks at car1's prototype, which is Car.prototype. It finds the color property there, so it returns "red"
  
//   Adding Methods to the Prototype
//   You can also add methods to the prototype in the same way:
  
   
  // Add a method to the prototype
  Car.prototype.displayInfo = function() {
    console.log(`${this.make} ${this.model}, Color: ${this.color}`);
  };
  
  car1.displayInfo(); // Logs: "Toyota Corolla, Color: red"
  car2.displayInfo(); // Logs: "Honda Civic, Color: red"
//   Benefits of Using the Prototype
//   Memory Efficiency: Properties and methods defined on the prototype are shared among all instances. This is more memory-efficient than defining the same properties and methods in the constructor function, as it avoids duplication.
//   Consistency: Changes to the prototype are immediately reflected in all instances. This makes it easy to update behavior across all instances.
   



//inheritence using __proto__ and prototype and class:::

Inheritance with the Prototype Chain
In JavaScript, objects are dynamic collections of properties and can inherit properties from other objects through the prototype chain.

Key Concepts
Prototype Chain: Every JavaScript object has a [[Prototype]] property, which points to another object. This forms a chain that ends with null.
Property Access: When accessing a property on an object, JavaScript first looks at the object itself. If the property is not found, it looks up the prototype chain until it finds the property or reaches the end.
Basic Example
Let's start with a simple example:

javascript
Copy code
const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
  },
};

console.log(o.a); // 1
console.log(o.b); // 2
console.log(o.c); // 4
console.log(o.d); // undefined
In this example:

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

o.a is 1 because a is an own property of o.
o.b is 2 because b is an own property of o (property shadowing).
o.c is 4 because c is not found in o, so it looks up the prototype chain and finds it.
o.d is undefined because d is not found in o or in its prototype chain.
Inheriting Methods
Methods are functions attached to objects. When inherited, they behave just like other properties.

javascript
Copy code
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

const child = {
  __proto__: parent,
};

console.log(child.method()); // 3
child.value = 4;
console.log(child.method()); // 5
Here:

child.method() initially returns 3 because child.value is not defined, so it uses parent.value.
After setting child.value to 4, child.method() returns 5 because this now refers to child.
Using Constructor Functions
Constructor functions allow creating objects with shared prototypes.

javascript
Copy code
function Box(value) {
  this.value = value;
}

Box.prototype.getValue = function () {
  return this.value;
};

const box1 = new Box(1);
const box2 = new Box(2);

console.log(box1.getValue()); // 1
console.log(box2.getValue()); // 2
In this example:

Box is a constructor function.
Box.prototype.getValue is a shared method.
box1 and box2 are instances with their own value properties but share the getValue method.
Classes
Classes provide a cleaner syntax for creating constructor functions and managing prototypes.

javascript
Copy code
class Box {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

const box1 = new Box(1);
const box2 = new Box(2);

console.log(box1.getValue()); // 1
console.log(box2.getValue()); // 2
Summary
Prototype Chain: Objects inherit properties and methods through their prototype chain.
Property Access: JavaScript looks for properties in the object and then up the prototype chain.
Methods: Functions can be added to the prototype and shared across instances.
Constructor Functions and Classes: Constructors simplify creating objects with shared prototypes.





//mutute the older Box.prototype
function Box(value) {
    this.value = value;
  }
  Box.prototype.getValue = function () {
    return this.value;
  };
  const box = new Box(1);
  
  // Mutate Box.prototype after an instance has already been created
  Box.prototype.getValue = function () {
    return this.value + 1;
  };
  box.getValue(); // 2
  
  // Object literals (without the `__proto__` key) automatically
// have `Object.prototype` as their `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // true

// Array literals automatically have `Array.prototype` as their `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // true

// RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // true
console.log(Object.getPrototypeOf(Array));//  {}
let obj = {
    name : "Anjali"
};
console.log(Object.getPrototypeOf(obj)); // Logs the prototype of obj      //[Object: null prototype] {}


let array = [];
console.log(Object.getPrototypeOf(array)); // Logs the prototype of array, which is Array.prototype  //Object(0) []


let obj = {};
let newProto = { greeting: "hello" };

Object.setPrototypeOf(obj, newProto);

console.log(obj.greeting); // "hello"



const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp); //foor bal
console.log(obj.barProp);// bar bal

console.log(Object.getPrototypeOf(obj)); //{ barProp: 'bar val' }
console.log(Object.getPrototypeOf(obj.__proto__)); //{ fooProp: 'foo val' }

function doSomething() {}
console.log(doSomething.prototype);
// It does not matter how you declare the function; a
// function in JavaScript will always have a default
// prototype property — with one exception: an arrow

// function doesn't have a default prototype property:

const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
// {}
// undefined





// Create an object with a custom prototype
let animal = {
    eats: true
  };
  
  // Create a new object rabbit with animal as its prototype
  let rabbit = Object.create(animal);
  rabbit.jumps = true;
  
  console.log(rabbit.eats); // true, inherited from animal
  console.log(rabbit.jumps); // true, own property
  
  // Verify prototypes
  console.log(Object.getPrototypeOf(rabbit)); // { eats: true }
  console.log(Object.getPrototypeOf(animal));   //[Object: null prototype] {}

//   The prototype of rabbit is animal (Object.getPrototypeOf(rabbit) === animal).
// The prototype of animal is null (Object.getPrototypeOf(animal) === null), indicating that animal is at the top of the prototype cha

function Graph() {
    this.vertices = [];
    this.edges = [];
  }
  
  Graph.prototype.addVertex = function (v) {
    this.vertices.push(v);
  };
  
  const g = new Graph();
  // g is an object with own properties 'vertices' and 'edges'.
  // g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
  


  class Rectangle {
    constructor(height, width) {
      this.name = "Rectangle";
      this.height = height;
      this.width = width;
    }
  }
  
  class FilledRectangle extends Rectangle {
    constructor(height, width, color) {
      super(height, width);
      this.name = "Filled rectangle";
      this.color = color;
    }
  }
  
  const filledRectangle = new FilledRectangle(5, 10, "blue");
  // filledRectangle ---> FilledRectangle.prototype ---> Rectangle.prototype ---> Object.prototype ---> null

  

  const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null



function Graph() {
    this.vertices = [];
    this.edges = [];
  }
  
  Graph.prototype.addVertex = function (v) {
    this.vertices.push(v);
  };
  
  const g = new Graph();
  // g ---> Graph.prototype ---> Object.prototype ---> null
  
  g.hasOwnProperty("vertices"); // true
  Object.hasOwn(g, "vertices"); // true
  
  g.hasOwnProperty("nope"); // false
  Object.hasOwn(g, "nope"); // false
  
  g.hasOwnProperty("addVertex"); // false
  Object.hasOwn(g, "addVertex"); // false
  
  Object.getPrototypeOf(g).hasOwnProperty("addVertex"); // true
  


  
  // Two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false
JS
Copy to Clipboard
// Two variables, a single object
const fruit = { name: "apple" };
const fruitbear = fruit; // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = "grape";
console.log(fruitbear); // { name: "grape" }; not { name: "apple" }


