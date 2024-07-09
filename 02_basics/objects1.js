// singleton
// singleton
Object.create //(constuctor) 


// object literals
const mysym = Symbol("key1")

const JsUser = {
    name: "anjali",
   mysym: "mykey1", // string type
   [mysym]: "mykey1", //symbol type //it iwill show up in when you print object lke log(jsuser);
    age: 18,
    location: "jaipur",
    email : "anjalisharma@google.com",
    islogedin : false,
    lastlogindays : ["monday", "sat"]

}
// console.log(JsUser.email); //1st
// console.log(JsUser["email"]); // 2nd way~
// console.log(JsUser["name"]); //only one way using square notation
// console.log(JsUser.mysym); // using symbol as key //mykey1
// console.log(JsUser[mysym]); //myket . by iti s goot syntax
// console.log( typeof(JsUser.mysym)); // string type
// console.log(typeof(JsUser[mysym]));//string


    JsUser.email =  "hatgpt@GamepadHapticActuator.com"
     Object.freeze(JsUser) // is line k baad no change n this object
    JsUser.email = "anjaswadkjgldgld"
     console.log(JsUser);

  JsUser.greeting = function(){
    console.log("hello js user;");
  }  
  console.log(JsUser.greeting); // undefinded when it was freeze but then if not the n output is ]functon(anoynyjios0)]
 //funtion is not eecuted but   
//  //or
  console.log(JsUser.greeting()); // not a function now for now coz t was a freezeobject js user

  // The code assigns a function to the greeting property of the JsUser object.
  // After this assignment, greeting becomes a method of the JsUser object.
  JsUser.greeting = function(){
    console.log( `hello this is js user, ${this.name}`);
  }  


  JsUser.greetingtwo = function(){
    console.log("hello js user;");
  }  

  console.log(JsUser.greeting());
  console.log(JsUser.greetingtwo());




//merging new property in objects

const obj = {
  key1: "value1",
  age: "34"
}

let newobj = Object.assign( {} , obj, {name : "anjali"})
console.log(newobj);



Object.defineProperty(obj, prop, descriptor)
Parameters
obj
The object on which to define the property.

prop
A string or Symbol specifying the key of the property to be defined or modified.

descriptor
The descriptor for the property being defined or modified.

Return value
The object that was passed to the function, with the specified property added or modified.



// function Archiver() {
//   let temperature = null;
//   const archive = [];

//   Object.defineProperty(this, "temperature", {
//     get() {
//       console.log("get!");
//       return temperature;
//     },
//     set(value) {
//       temperature = value;
//       archive.push({ val: temperature });
//     },
//   });

//   this.getArchive = () => archive;
// }

// const arc = new Archiver();
// arc.temperature; // 'get!'
// arc.temperature = 11;
// arc.temperature = 13;
// arc.getArchive(); // [{ val: 11 }, { val: 13 }]



////////////
// Object.defineProperty() allows you to add a property to an object or modify an existing property with specific attributes. Unlike regular property assignments, this method lets you control property attributes like writability, enumerability, and configurability.

// Property Descriptors
// Data Descriptor: Contains a value and can be writable.
// Accessor Descriptor: Contains getter and setter functions.
// Descriptor Attributes
// configurable: If false, the property cannot be deleted or changed.
// enumerable: (iterable)If true, the property shows up during enumeration of the properties.
// value: The value associated with the property.
// writable: If true, the value can be changed.



// Define an object
const person = {};

// Add a property using Object.defineProperty
Object.defineProperty(person, 'name', {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
});

// Log the object to see the property
console.log(person); // { name: 'Alice' }

// Modify the property
person.name = 'Bob';
console.log(person.name); // 'Bob'

// Enumerate properties
for (let key in person) {
    console.log(key); // 'name'
}

// Check property attributes
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// {
//   value: 'Bob',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Modify property attributes
Object.defineProperty(person, 'name', {
    writable: false
});

// Trying to change the value will now fail silently in non-strict mode
person.name = 'Charlie';
console.log(person.name); // 'Bob'

// Try to delete the property
delete person.name;
console.log(person.name); // 'Bob' (because configurable is true, it can be deleted, else it will remain)

// name is propert that exists in person object

const obj = {};
// 1. Using a null prototype: no inherited properties
const descriptor = Object.create(null);
descriptor.value = "static";

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, "key", descriptor);



///
//accesscons
\
const a = Math.PI
a = 3
console.log(a);
a.getOwnPropertyDescriptor
// Define an object
const user = {};
let ageValue = 25;

// Add a property with getter and setter
Object.defineProperty(user, 'age', {
    get() {
        return ageValue;
    },
    set(newAge) {
        if (newAge > 0) {
            ageValue = newAge;
        }
    },
    enumerable: true,
    configurable: true
});

// Use the getter
console.log(user.age); // 25

// Use the setter
user.age = 30;
console.log(user.age); // 30

// Try setting an invalid value
user.age = -5;
console.log(user.age); // 30 (ageValue wasn't updated)


// on array

// Create an array
const arr = [1, 2, 3];

// Get property descriptor for 'length'
const lengthDescriptor = Object.getOwnPropertyDescriptor(arr, 'length');
console.log(lengthDescriptor);
// Output will show the descriptor properties:
// {
//   value: 3,
//   writable: true,
//   enumerable: false,
//   configurable: false
// }




// const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

// console.log(car.manyCars.b); // Jeep
// console.log(car[7]); // Mazda

// const unusualPropertyNames = {
//   '': 'An empty string',
//   '!': 'Bang!'
// }
// console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
// console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !


// console.log(unusualPropertyNames[""]); // An empty string
// console.log(unusualPropertyNames["!"]); // Bang!


function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
}


try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}

Note: When logging errors to the console inside a catch block, using console.error() rather than console.log() is advised for debugging.

const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// OR
const obj = { prop: [element0, element1, /* …, */ elementN] };


Maps     

const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0





// Objects
// Use Case: Objects are best used when the keys are strings or symbols and you need to represent structured data with a fixed schema.
// Properties:
// Key Type: Keys are strings (or symbols).
// Order: The order of keys is not guaranteed.
// Prototypes: Objects come with a prototype chain which may lead to unexpected behavior if the prototype keys are not managed properly.
// Serialization: Easier to serialize using JSON.
// Built-in Methods: Many built-in methods are designed to work with objects (Object.keys(), Object.values(), Object.entries(), etc.).
// Performance: Generally, better performance for small sets of data or when key-value pairs are known beforehand.
// Example
// javascript
// Copy code
// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer"
// };

// console.log(person.name); // "John"
// console.log(person["age"]); // 30
// Maps
// Use Case: Maps are better suited for dynamic collections of key-value pairs where keys are not necessarily strings and when there is a need for more complex operations.
// Properties:
// Key Type: Keys can be of any type (including objects and functions).
// Order: Keys are ordered based on their insertion order.
// Prototypes: No prototype chain interference; only the key-value pairs added are present.
// Size: The size of the map can be retrieved directly using map.size.
// Methods: Provides various methods specifically for key-value operations (set, get, has, delete, clear, etc.).
// Performance: Generally, better performance for large sets of data or when keys are not known beforehand.
// Example
// javascript
// Copy code
// const userMap = new Map();

// userMap.set('name', 'Jane');
// userMap.set('age', 25);
// userMap.set('occupation', 'Designer');

// console.log(userMap.get('name')); // "Jane"
// console.log(userMap.get('age')); // 25
// When to Use Objects
// Fixed Schema: When the structure of data is known and the keys are fixed.
// Simple Data Structure: When representing simple data structures or plain objects.
// Serialization: When you need to easily convert data to JSON.
// When to Use Maps
// Dynamic Keys: When keys are not strings or when they are dynamically generated.
// Order Maintenance: When you need to maintain the insertion order of key-value pairs.
// Performance: When working with a large set of key-value pairs or when you require frequent additions/removals.
// No Prototype Interference: When you need to avoid issues with inherited properties.
// Practical Scenarios
// Configuration Settings: Use an object if you have a fixed set of configuration settings with string keys.
// Caching: Use a map for a cache where the keys might be strings, objects, or other data types, and you need efficient key-based lookups.
// Data Records: Use objects for structured data like a record with known fields (e.g., user profiles, product details).
// Complex Collections: Use maps for collections of items where the keys are not predetermined or are of various types (e.g., mapping DOM elements to data).
// By understanding the characteristics and advantages of objects and maps, you can make an informed decision based on the specific requirements of your application.

 

//weakset
Purpose: WeakSet is a collection of unique objects, and it allows for weakly held objects.
Key Features:
Elements must be objects.
Does not prevent garbage collection of objects.
Not iterable and does not have a size property.
Example
javascript
Copy code
const weakSet = new WeakSet();
const obj1 = {};
const obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

// If obj1 and obj2 are the only referenc



//WeakMap
// Purpose: WeakMap is a collection of key-value pairs where keys are objects and values can be arbitrary data.
// Key Features:
// Keys must be objects.
// Does not prevent garbage collection of keys (i.e., if no other references to the key object exist, it can be garbage-collected).
// Not iterable and does not have a size property.
const weakMap = new WeakMap();
const obj = {};

weakMap.set(obj, 'some value');

console.log(weakMap.get(obj)); // 'some value'
console.log(weakMap.has(obj)); // true

// If obj is the only reference to the object, it can be garbage collected.
