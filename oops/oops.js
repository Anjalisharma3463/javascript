//jese c++ orj ava me classes basic unit hoti h yaha ye h object

//object literal . object banana 
 const user = {
    username: "anjali",
    loginCount: 8,
    signedIn: true,


    getuserDetails: function(){
            // console.log("got user details");  
             console.log(`username: ${this.username}`); // undefined ,=> bahar se saaman lena h toh..
              console.log(this); // current context..  //puraa ye object aa jayega
            }
     }

 console.log(user.username);
 console.log(user.getuserDetails());
  console.log(this); // { }

// Har baar user ko banana possible nahi h . we use constructor function
//new keywoed hi constructor function h. it allows ki ek hi object literal se multiple instances bana ske
// actually ek new context banane k liye

// const promiseone = new promise()
//     const date = new Date() // new keyword is for construction of context . Thsi is called constructor function

    function user(username, loginCount, isloggedin){
        this.username = username
        this.loginCount = loginCount
        this.isloggedin = isloggedin

        return this // implicitly return hota hi h
    }


//     const userone = user('ANJALI', 12, true)
//   const usertwo = user('chaiorcode', 11 , false) // ye uper waalek ki values ko override kar degaa thats why we use new keyword 
//console.log(userone);

// ye ban gaye difffert users of same properties and methods
  const userone = new user('ANJALI', 12, true)
  const usertwo = new user('chaiorcode', 11 , false) 
    console.log(userone);
    console.log(userone.constructor);
    console.log(usertwo);

    //new keyword use krne h ek empty new object create hota h . {} empety new object ko instance bola jata h
    //constructor function (new ) call hota h cozof new keyword se
    //this keyword me saare vallues inject ho jata history
    // 4th step me mil jayege


    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    console.log(userone);
    console.log(usertwo);
    
    // output:- 
         




//  For example, if a method is defined on a constructor's prototype property, then all objects created using that constructor get that method via their prototype.
    // Programming languages often use the keyword new to signal that a constructor is being called.

 // if use __ inderscore . its means that variable is private:
 // Define a Student class with private property
class Student {
  constructor(name, year) {
    this._name = name; // Convention: Prefix with underscore for private
    this.year = year;
  }

  getName() {
    return this._name; // Access private property via method
  }
}

// Create an instance of Student
const student = new Student("Diana", 2);

// Access private property using method
console.log(student.getName()); // Output: Diana

// Attempting to access private property directly will not work
console.log(student._name); // Output: undefined (private convention)



//basics
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}




//// # means declaring a variabl private.
//We can construct a Student object, and it can use #year internally, but if code outside the object tries to access #year the browser throws an error:


class Person {
  constructor(name) {
    this._name = name; // Private property conventionally indicated by _
  }

  getName() {
    return this._name; // Access private property via method
  }
}
 

 class Student extends Person {
     year; // cant use let var const insted of it without # means public and with #means private
     

  constructor(name, year) {
    super(name);
    this.year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.year}.`);
  }

  canStudyArchery() {
    return this.year > 1;
  }
}

const obj = new Student("Anjlai ", 2016)
console.log(obj.year);



// private function
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError



Objects can also be initialized using Object.create() or by invoking a constructor function with the new operator.
const personPrototype = {
  greet() {
    console.log("Hello!");
  }
};

const john = Object.create(personPrototype);
john.greet(); // Outputs: Hello!


Object.create(proto) creates a new object where proto is the prototype object from which the new object inherits. It allows you to directly specify which object should be the prototype of the newly created object.

let i = 0;

const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

for (const [key, value] of Object.entries(a)) {
  console.log(`key is ${key} and value is ${value}`);
}



Basic Syntax: You use curly braces {} to enclose key-value pairs. For example:

javascript
Copy code
const obj = {
  a: "foo",
  b: 42,
  c: {},
};
Shorthand Property Names: If a variable name matches the property name, you can omit the colon and the variable name will be used as both the property name and value:

javascript
Copy code
const a = "foo";
const b = 42;
const c = {};
const obj = { a, b, c };
Methods: You can define functions (methods), getters, and setters as object properties:

javascript
Copy code
const obj = {
  method(parameters) {
    // method implementation
  },
  get property() {
    // getter implementation
  },
  set property(value) {
    // setter implementation
  },
};
Computed Property Names: You can use expressions to compute property names dynamically using square brackets []:

javascript
Copy code
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};
Spread Properties: You can merge properties from one or more objects into a new object using the spread syntax ...:

javascript
Copy code
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const mergedObj = { ...obj1, ...obj2 };
Prototype Setter (__proto__): You can set the prototype of an object using __proto__: value. This is not recommended for use in modern code due to potential issues with performance and security:

javascript
Copy code
const obj = {
  __proto__: prototypeObject,
};












Object Destructuring
Object destructuring in JavaScript allows you to extract properties from objects and bind them to variables. Here's a basic example:

javascript
Copy code
const person = { firstName: 'John', lastName: 'Doe' };

// Destructuring assignment
const { firstName, lastName } = person;

console.log(firstName); // Output: 'John'
console.log(lastName); // Output: 'Doe'
Shorthand in Object Destructuring
The shorthand notation allows you to directly use the property names as variable names:

javascript
Copy code
const { firstName, lastName } = person;

// Equivalent to:
// const firstName = person.firstName;
// const lastName = person.lastName;
Array Destructuring
Array destructuring works similarly but with arrays:

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
Rest Operator (...)
The rest operator (...) in destructuring allows you to collect multiple elements into a single array:

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
Spread Operator (...)
The spread operator (...) performs the opposite of rest operator. It spreads elements of an array or properties of an object into another array or object:

javascript
Copy code
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
javascript
Copy code
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { baz: 'qux', y: 13 };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // Output: { foo: 'bar', x: 42, baz: 'qux', y: 13 }








Shorthand Method Names
In JavaScript, if you're defining methods (functions inside objects), there's a shorthand notation available that's more concise. Here's how it works:

ES6 Shorthand Method Names:
javascript
Copy code
// Shorthand method names
const o = {
  // Method definition using shorthand
  property(parameters) {
    // Method body
    console.log(parameters);
  },
};

o.property('Hello'); // Output: Hello
In this example:

property is a method inside the object o.
Using the shorthand, you omit the function keyword and directly define the method name followed by parameters and function body.
Equivalent ES5-like Notation:
javascript
Copy code
// Equivalent ES5-like notation
const o = {
  property: function(parameters) {
    console.log(parameters);
  },
};

o.property('Hello'); // Output: Hello
Here, property is defined using the traditional ES5 syntax where you explicitly use the function keyword.

Generator Methods
Generator functions are special functions in JavaScript that can pause execution and yield multiple values sequentially. Here’s how you define a generator method in an object using shorthand notation:

ES6 Generator Method Shorthand:
javascript
Copy code
const o = {
  // Generator method definition using shorthand
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  },
};

const gen = o.generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
In this example:

generator is a generator method inside the object o.
The * before generator() indicates it's a generator function.
Inside, you can use yield to return values sequentially.
Equivalent ES5-like Notation:
javascript
Copy code
// Equivalent ES5-like notation (using regular function and generator)
const o = {
  generator: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

const gen = o.generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
Here, generator is defined using the traditional ES5 syntax for generator functions.








Computed property names

// Computed property names
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

const items = ["A", "B", "C"];
const obj = {
  [items]: "Hello",
};
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]); // "Hello"

const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}





Spread properties
Object literals support the spread syntax. It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding prototype) or merging objects is now possible using a shorter syntax than Object.assign().

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);





// ############################           
// ########
Note that the __proto__ key is standardized syntax, in contrast to the non-standard and non-performant Object.prototype.__proto__ accessors. It sets the [[Prototype]] during object creation, similar to Object.create — instead of mutating the prototype chain.
