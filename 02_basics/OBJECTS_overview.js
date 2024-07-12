const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  
//   An object like this is referred to as an object literal — we've literally written out the object contents as we've come to create it.
// In JavaScript, an object literal is a way to define an object using a simple, concise syntax. It allows you to create objects and assign properties and methods to them in a straightforward manner.

// Here, the const person is an example of an object literal.



const person = {
    name: ["Bob", "Smith"],
  };

  person.age;
  person.name.first;
  

  const person = {
    name: {
      first: "Bob",
      last: "Smith",
    },
    // …
  };
  
  person["age"];
person["name"]["first"];


//setting 
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};



// //THIS
// const person1 = {
//     name: "Chris",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };
  
//   const person2 = {
//     name: "Deepti",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };
  
  //person1.introduceSelf()
  //outputs "Hi! I'm Chris.

  // e this keyword typically refers to the current object the code is being executed in.

  // constructor function to create as many  object as i want to create...

  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }

  
  const salva = new createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."


 


 
// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// When you need to get the prototype of an object, you should use Object.getPrototypeOf() rather than relying on the non-standard __proto__ property. This ensures that your code is compliant with the JavaScript specification and works consistently across different environments.

// What is Shadowing?
// Shadowing happens when you define a property in an object that already exists in the object's prototype. The property in the object "shadows" or "hides" the one in the prototype, meaning the one in the object will be used instead of the one in the prototype.

const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'




// ############################
the concepts of setting a prototype in JavaScript using very simple explanations and examples.

1. Using Object.create
The Object.create method allows you to create a new object and specify an existing object to be used as the new object's prototype.

Example
javascript
Copy code
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
Explanation:

// personPrototype is an object with a greet method.
// Object.create(personPrototype) creates a new object, carl, that has personPrototype as its prototype.
// When we call carl.greet(), it looks for greet in carl. Not finding it there, it looks in carl's prototype (personPrototype) and finds it.


// 2. Using a Constructor
// In JavaScript, constructor functions can set the prototype for objects they create. All functions in JavaScript have a prototype property. When you use a function as a constructor (with the new keyword), the new object's prototype is set to the prototype property of the constructor function.

Example
javascript
Copy code
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!


#####
Own Properties vs. Prototype Properties:

Own properties are defined directly on the object (e.g., name).
Prototype properties are defined on the prototype (e.g., greet).
Example:
javascript
Copy code
console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false





First, we create a prototype for a general person.

javascript
Copy code
const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};
personPrototype has a greet method that prints a greeting with the person's name.
Step 2: Create a Professor Constructor
Next, we create a constructor function for professors.

javascript
Copy code
function Professor(name, subject) {
  this.name = name;
  this.subject = subject;
}

Professor.prototype = Object.create(personPrototype);
Professor.prototype.constructor = Professor;
The Professor function initializes a professor with a name and subject.
We set Professor.prototype to a new object created from personPrototype, so professors inherit the greet method.
Step 3: Add Professor-Specific Method
We can add a method specific to professors.

javascript
Copy code
Professor.prototype.teach = function() {
  console.log(`${this.name} is teaching ${this.subject}.`);
};
teach method is added to Professor.prototype.
Step 4: Create a Student Constructor
Similarly, we create a constructor function for students.

javascript
Copy code
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype = Object.create(personPrototype);
Student.prototype.constructor = Student;
The Student function initializes a student with a name and grade.
We set Student.prototype to a new object created from personPrototype, so students also inherit the greet method.
Step 5: Add Student-Specific Method
We can add a method specific to students.

javascript
Copy code
Student.prototype.study = function() {
  console.log(`${this.name} is studying in grade ${this.grade}.`);
};
study method is added to Student.prototype.
Using the Inherited Properties and Methods
Now let's create instances of professors and students and use their methods.

javascript
Copy code
const profSmith = new Professor("Smith", "Mathematics");
profSmith.greet(); // "Hello, my name is Smith!"
profSmith.teach(); // "Smith is teaching Mathematics."

const studentJohn = new Student("John", 10);
studentJohn.greet(); // "Hello, my name is John!"
studentJohn.study(); // "John is studying in grade 10."



// When you create an object using a constructor function in JavaScript, the object has an internal link to its prototype. This prototype has a constructor property that points back to the function that created it. This is useful for identifying the constructor of an object.

// Default Behavior
// Let's start with an example to illustrate the default behavior:

// javascript
// Copy code
// function Person(name) {
//   this.name = name;
// }

// console.log(Person.prototype.constructor); // Person

//################################# restting constructor to its function

// Every function in JavaScript has a prototype property, which is an object. By default, this prototype object has a constructor property that points back to the function itself. 


function Professor(name, subject) {
  this.name = name;
  this.subject = subject;
}

Professor.prototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

//  For example, if a method is defined on a constructor's prototype property, then all objects created using that constructor get that method via their prototype
//without resetting constrouctor
// ƒ Object() { [native code] }

// Resetting the constructor
Professor.prototype.constructor = Professor;
// ƒ Professor(name, subject) {
//   this.name = name;
//   this.subject = subject;
// }
 

const profSmith = new Professor("Smith", "Mathematics");
console.log(profSmith.constructor); // Output: [Function: Professor]






//PROTOTYPE PROPERTY VS [prototype]

In JavaScript, the terms "prototype" and [[Prototype]] (also referred to as __proto__) have specific meanings and are used in different contexts. Let's clarify the difference between them.

Prototype Property (prototype)
The prototype property is specific to functions. Every function in JavaScript (including constructor functions) has a prototype property, which is used to set up inheritance. When you create a new object using a constructor function, the newly created object's [[Prototype]] (or __proto__) is set to the constructor function's prototype.

Example:

javascript
Copy code
function Person(name) {
  this.name = name;
}

// Adding a method to the Person's prototype
Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

const person1 = new Person('Alice');
person1.sayHello(); // Output: Hello, my name is Alice
In this example:

Person.prototype is an object that will be assigned as the [[Prototype]] of instances created by the Person constructor.
person1's [[Prototype]] points to Person.prototype.
[[Prototype]] (or __proto__)
The [[Prototype]] (commonly accessed via __proto__ in many JavaScript engines) is an internal property of an object that points to the prototype object that the object inherits from. This is part of the object's chain, used by the JavaScript engine to look up properties and methods.

Example:

javascript
Copy code
const obj1 = {
  name: 'Anjali',
  age: 18,
};

const obj2 = {
  day: 'sat',
};

// Setting obj1's [[Prototype]] to obj2
Object.setPrototypeOf(obj1, obj2);
// __proto__ should be either an object or null////
 
console.log(obj1.day); // Output: sat (inherited from obj2)


Example 1: Method Named __proto__
javascript
Copy code
const obj2 = { 
  __proto__() { 
    return "hello"; 
  } 
}; 

console.log(obj2.__proto__()); // "hello"
Here, obj2 has a method named __proto__. This is just a normal method, not related to the prototype chain.
When you call obj2.__proto__(), it invokes this method and returns "hello".
Example 2: Property Named __proto__
javascript
Copy code
const obj3 = { ["__proto__"]: 17 };
console.log(obj3.__proto__); // 17
In this example, obj3 has an own property named __proto__ with a value of 17.
This is not the prototype property, just a regular property. Accessing obj3.__proto__ returns 17.
Example 3: Mixing Prototype Setter with Normal Properties
javascript
Copy code
const obj4 = { ["__proto__"]: 17, __proto__: {} };
console.log(obj4); // { __proto__: 17 } (with {} as prototype)
Here, obj4 has an own property named __proto__ with a value of 17.
Additionally, obj4's prototype is set to an empty object {} using the __proto__ syntax.
The __proto__ property with value 17 and the prototype setting coexist without conflict.
Example 4: Duplicate __proto__ Fields
javascript
Copy code
const obj5 = {
  ["__proto__"]: 17,
  __proto__: {},
   __proto__: null, // SyntaxError: Duplicate __proto__ fields are not allowed in object literals
};
This object obj5 has an own property __proto__ with value 17 and its prototype is set to an empty object {}.
If you try to add another __proto__ field, it will cause a SyntaxError because you can't have duplicate __proto__ fields in object literals.
Example 5: Multiple __proto__ Assignments with Bracket Notation
javascript
Copy code
const obj6 = {
  ["__proto__"]: 17,
  ["__proto__"]: "hello",
  __proto__: null,
};
console.log(obj6); // { __proto__: "hello" } (with null as prototype)
This object obj6 has two properties named __proto__ set using bracket notation. The second assignment ("hello") overwrites the first one (17).
The prototype is set to null.
Example 6: Mixing Bracket Notation with Prototype Setter
javascript
Copy code
const obj7 =  {
  ["__proto__"]: 17,
  __proto__,
  __proto__: null,
}; 
console.log(obj7); // { __proto__: 17 } (with null as prototype)