//primitive: in built (these are called by value )
 
// 7 types of primitive data types : string, Number , Boolean , null (empty not 0 not -) , undefinded , Symbol (used to make any value unique) ,
// Big int(to store big or scientfic values that are not handeled  by Number)

//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
const score1 = 100  // we don't define
// or
 const score2 = false

// const isLoggedIn = false
const outsideTemp = null
let useremail; //or
 let userEmail = undefined

const id = Symbol('123') // result will not be same for both
const anotherid = Symbol('123')
console.log(id == anotherid); // false (not same becoz these both re unique)
const bigNumber = 5658435743985794358794759450347504570475040740n // now it is big int




//reference or non - primitive
//Arrray , Objects , Funtions - (To master javascript learn objects and events of documentaion)

// const heroes = ["shaktman" , "doga"] // array

// //object with storing values
// let myobj = {
//     name = " Anjla",
//     age: 19,
// }

// or objest without storing in values
//   {
//     name: mohit,
//     age: 18
// } 
// console.log("hello world!");

//  const myfunction = function() {
//  console.log("Hello world !");
// }

// myfunction(); // hello world..



// console.log(myfunction); // [Funtion: myfunction]
// console.log(typeof outsideTemp); // Object (null ka object aya h)
// console.log(typeof myfunction); // function (actually in documentatin me this is function object)
console.log(typeof id); // symbol
console.log(typeof anotherid); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof userEmail); //undefinded when i set undefined
console.log(typeof useremail); // userdefined when i did not set userdefined

 
