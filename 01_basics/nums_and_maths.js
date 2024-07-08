// const score = 900
// console.log(score);

// // primitive vs Object in JavaScript
// // In JavaScript, numbers can exist as both primitive values and objects.

// // Primitive Value: const balance = 100;

// // Here, balance is a primitive number with the value 100.
// // Primitive values are simple, immutable data types.
// // Number Object: const balance = new Number(100);

// // Here, balance is an instance of the Number object.
// // Number objects are more complex and come with additional properties and methods inherited from the Number prototype.
// // However, using Number objects is generally unnecessary and can lead to confusing behavior.


// const balance = new Number(100) //BY Number , it is definately a number
// console.log(balance); // Number {100}
// console.log(balance.toString()); // 100 now it is string
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00 precision value


//yaha ham value ko bracket me pass krte h
// console.log(Number(2)); //2
// console.log(new Number(3)); //[Number: 3]

//yaha object.prototype.function()
//Number.prototype.toFixed()
// const numObj = 77.1234;
// console.log(numObj.toExponential()); // 7.71234e+1


// // Define a constructor function
// function Person(name) {
//     this.name = name;
// }

// // Define a method on the prototype
// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
// };

// // Create instances of Person
// const alice = new Person('Alice');
// const bob = new Person('Bob');

// // Use the method
// alice.sayHello(); // Output: Hello, my name is Alice
// bob.sayHello();   // Output: Hello, my name is Bob



// const a = new Number("123"); // a === 123 is false
// const b = Number("123"); // b === 123 is true
// a instanceof Number; // is true
// b instanceof Number; // is false
// typeof a; // "object"
// typeof b; // "number"



// const otherNumber = 1123.9485
 
// // console.log(otherNumber.toPrecision(3)); //23.9 for 23.9484 number
// // console.log(otherNumber.toPrecision(3));//124 for 123.9484 number
// // console.log(otherNumber.toPrecision(3));//1.12e+3 for 1123.9484

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000 according to US
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000 accord to india

//++++++++++++++++maths**********************

// console.log(Math); //default h like Number // output:- object [Math] {} // object ye in whic hthere are so many funcctions
console.log(Math.abs(-4)) //4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.6)); ///5
console.log(Math.floor(4.2)); //4
console.log(Math.min(4,564,3)); //3
console.log(Math.random()); // 0.307011999920.. random vlaues b/w 0 to 1
console.log(Math.random()*10); //right shift ho gya now it is 1.223..
console.log(Math.random())*10+1; // now after adding 1, value will definately be > 0
console.log((Math.random()*10) + 1); // now here precedence is conffiremed
console.log(Math.floor(Math.random()*10)+1); // 4 suupose if ans is 0.4 and random will give 0 that's why to ignore this  i added 1
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // so that 0 naa aaye ..
// here i want min no. 10 . min no. is i want 10 so  i added min
// mac - min gives range







