//
//Technically the JavaScript programming language doesn’t have classes, but it does have constructors and prototypes which provide similar functionality.
  //  // const tinderuser = new Object() // singleton - object
const tinderuser = {} // non-single object
 
 tinderuser.id = "2213abc"
 tinderuser.name = "anjali"
 tinderuser.isloggedIn = false

 console.log(tinderuser);

 const regularUser = {
    email: "somegaim2@gmal.com",
    fullname: {
          userfullname: {  
             firstname: "anjali",
            lastname: "sharma"
          }
    }
 }
// if full name me kchh values h to print kro like if conditions
//  console.log(regularUser.fullname?.userfullname);
//  if userfullname will be empty then output will be {}
//   ?.: The optional chaining operator checks if fullname is not null or undefined before trying to access userfullname. If fullname is null or undefined, the expression will short-circuit and return undefined without throwing an error.
//   userfullname: Accesses the userfullname property inside fullname.



  const obje1 = {1: "a", 2: "b"}
  const obje2 = {3: "a", 4: "b"}

//  const obje3 = { obje1, obje2}
//  console.log(obje3); //{ obje1: { '1': 'a', '2': 'b' }, obje2: { '3': 'b' } }

  // const obje3 = Object.assign({}, obje1 , obje2) // target is {} otheres are source but we can consider target obje1 also at first place
  // console.log(obje3); //{ '1': 'a', '2': 'b', '3': 'a', 4: 'b' }

// const obj3 = {...obje1, ...obje2} // spread liek array 
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users  =  [ 
    {
        id: 1,
        email: "h1@gmail.com"
    },

    {
        id: 2,
        email: "h2@gmail.com"
    },

    {
        id: 1,
        email: "h3@gmail.com"
    },
  ];

  


console.log(users[1].email); //h2@gmail.com
// console.log(tinderuser); //{ id: '2213abc', name: 'anjali', isloggedIn: false }

// console.log(Object.keys(tinderuser));
// console.log(Object.entries(tinderuser));  //[ [ 'id', '2213abc' ], [ 'name', 'anjali' ], [ 'isloggedIn', false ] ]
// console.log(Object.values(tinderuser));

// console.log(tinderuser.hasOwnProperty('islogged')); // false // ye prpoperty h ki nh
// //In JavaScript, hasOwnProperty is a method available on all objects. It is used to check whether an object has a property with a specific name (key).

//Key: Unique string identifier for a property within an object.
// Property: Combination of a key and its associated value within an object.
// Value: Data assigned to a property key within an object.


const course = {
  coursename: "jsinhindi",
  price: "999",
  course_teacher: "hitesh"
}

console.log(course.course_teacher); 
  //OR 
const {course_teacher } = course // course obje se value extract krni h
   //console.log(course_teacher); //hitesh 
 
const {course_teacher : ins} = course // course obje se value extract krni h
 console.log(ins); //..hitesh 

const {course : print} = course
console.log(print);

 //har baar props. propas. nah likhna ho to use curly braces like this 
 //const navbar = ({company}) => {
  //}
  //objects ko destructure krna
 const navbar = ( props.company) => {

 }
   
 navbar(company = "anjali" )


 //apna kaam kisi or pe dallna is called APIs
 /// values ko dena by backend khud dko .. pehle xml k format me atti th values by backend
 
 //json object ki h bass naam nahi h 
 //bass json me key and value both string hoti h
 {
  
  "name": "anjali",
  "coursename": "js in hndi",
 " price": "free"
 }
 //API K andar fetch method use krke url use kre k respones me koi data milega in json format
 // kahi baar apis array ki format me bhi milti h nor only n object
 
 //Randonuserme.api
//api k data (result ko smjhne k liye . we can use json formatter tools) 





 
function listAllProperties(Math) {
  let objectToInspect = Math;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

   console.log(result);
}

listAllProperties(Math)



// #################################
function Person(name) {
  this.name = name;
}
// jab react or frameworlks me koi poroperty add krni ho hame
Person.prototype.introduceSelf = function() {
  console.log(`Hi! I'm ${this.name}.`);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.introduceSelf(); // Output: "Hi! I'm Alice"
person2.introduceSelf(); // Output: "Hi! I'm Bob"

// Modifying person1's name does not affect person2
person1.name = "Charlie";
person1.introduceSelf(); // Output: "Hi! I'm Charlie"
person2.introduceSelf(); // Output: "Hi! I'm Bob"

// Reason :::::
// Memory Efficiency:

// When you define methods directly within the constructor function, each instance of the object gets its own copy of those methods. This can consume more memory, especially if the methods are large or complex.
// By defining methods on the prototype instead, all instances of the constructor function share the same method. This saves memory because the method is only stored once in memory and reused across all instances.
// Performance:

// Prototype methods can lead to better performance because JavaScript engines can optimize the prototype chain lookup. When you call a method on an instance, if the method is not found on the instance itself, JavaScript looks up the prototype chain to find it.
// This lookup process is efficient and faster compared to copying methods to each instance, especially when dealing with a large number of instances or complex objects.
// Dynamic Nature:

// Methods defined on the prototype are dynamic, meaning you can modify or extend them at runtime. This is particularly useful for adding new functionality or modifying existing methods across all instances of a constructor function.
// Inheritance:

// Prototypes enable inheritance in JavaScript. You can create hierarchical relationships between objects using prototype chaining. Subclasses (objects that inherit from another object) can access methods defined on the prototype of their superclass.



function func() {
  let c = 1;
  this.a = 100;
}

// Set the function prototype
func.prototype.b = 200;

// Create an object
let obj = new func();         // function return something it will return that new. but if fun does not return nothign then new will return this,...
//otherwise without this keyword will point to window object
// its not a regular function when using new 


// Display the result on console
console.log(obj.a);

console.log(obj.b);

console.log(obj.c); // udefined

// Explanation
// Creating an Object with new:

// The new keyword creates a new, empty object.
// This new object’s prototype is set to func.prototype.
// Prototype Property (b):

// func.prototype.b = 200 adds a property b to the prototype.
// Any object created using func will have access to b via the prototype.
// Inside the Function (func):

// let c = 1; defines a local variable c that is only accessible inside the function.
// this.a = 100; adds property a to the new object.
// Binding Properties:

// The new keyword binds all properties and methods declared with this to the new object.
// In func, only a is declared with this, so a becomes a property of the new object.
// c is not declared with this, so it is not included in the new object.
// Returning the New Object:

// The function func does not explicitly return a value.
// JavaScript automatically returns the newly created object (with properties a and b) at the end of the constructor function.



Case 1: Constructor Function Returns an Object
javascript
Copy code
function Person(name) {
  this.name = name;
  // Explicitly returning a different object
  return { greeting: `Hello, my name is ${name}` };
}

const person = new Person("Alice");
console.log(person); // Output: { greeting: "Hello, my name is Alice" }
In this example, the Person constructor function returns an object with a greeting property. When we create a new Person instance with new Person("Alice"), the returned object { greeting: "Hello, my name is Alice" } becomes the result.

Case 2: Constructor Function Returns a Primitive
javascript
Copy code
function Animal(type) {
  this.type = type;
  // Explicitly returning a primitive value
  return "This is a primitive return value";
}

const animal = new Animal("Cat");
console.log(animal); // Output: Animal { type: "Cat" }
In this example, the Animal constructor function returns a primitive value (a string). When we create a new Animal instance with new Animal("Cat"), the returned primitive value is ignored, and the newly created object Animal { type: "Cat" } is returned instead.

Case 3: Constructor Function Doesn't Return Anything
javascript
Copy code
function Car(model) {
  this.model = model;
  // No explicit return statement
}

const car = new Car("Tesla");
console.log(car); // Output: Car { model: "Tesla" }
In this example, the Car constructor function doesn't return anything explicitly. When we create a new Car instance with new Car("Tesla"), the newly created object Car { model: "Tesla" } is returned.


function Car(color) {
  if (!new.target) {
    // Called as function.
    return `${color} car`;
  }
  // Called with new.
  this.color = color;
}

const a = Car("red"); // a is "red car"
const b = new Car("red"); // b is `Car { color: "red" }`]

console.log(a);
console.log(b);

red car
Car { color: 'red' }


