// "use strict"; // treat all js code as newer version in whole file but in new modern it's not mandatory to write

// // alert("hello")
// // alert(3+3) // ye console mt ya html se linked script mekrege to work krege . but yaha node me nahii kregea because we are using nodejs not browser

// console.log(3+3) // code readability should be high
// console.log("ji")

// let name = "anjali"
// let age = 18
// let isloggedin = false 

// /* primitive datatpes:  number and big int is datatypes and some more datatypes below/*
// // number => 2 to power 53
// //big int 
// //stiring => "" */
// //boolean => true/false
// //null => stand alone value //let state = null; null means empty not 0 // it means no value
// //undefined = like let state; 
// //symbol => unique

// //object 

// console.log(typeof "anjali") //string
// console.log(typeof null) // object
// console.log(typeof age) //number
// console.log(typeof undefined) // undefined





/////var
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();



// abouve is same as same 
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();




if (true) {
    var x = 5;
  }
  console.log(x); // x is 5
  