// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2 != 1);
// console.log(2===3);


// console.log("2"> 1); // true
// console.log("02"> 1); //true
// console.log("1"> 2); // false


//..In JavaScript, when you compare values using the > operator, JavaScript tries to convert the operands to numbers if they are not already numbers


// console.log(null == 0); // false
// console.log(null >= 0); // true  //The relational operator >= triggers type coercion to compare null and 0. JavaScript converts null to 0 when doing the comparison, so the expression becomes 0 >= 0, which evaluates to true.

// console.log(null > 0); // false

// // euqland lessthan=\


 // all these signs work differnelty

// console.log(undefined== 0); // false
// console.log(undefined > 0); // fasle
 
// console.log(null == undefined); // true
// // === // strict check
// console.log("2" == 2); //true 
// console.log("2" === 2); // false
//  const users = {
//     firstname: "anjali",
//     age: "18"
//  }
//  console.log(users["firstname"]); //anjali

// const users1 = [1, 2, 3]

// const allusers = [{
//            //array of objects
//            firstname: "anjali",
//            gender: "female",

// },
// {
//     //array of objects
//     firstname: "anjali",
//     gender: "female",
     
// },
// {
//     //array of objects
//     firstname: "anjali",
//     gender: "female",
     
// }]

// for (let i = 0; i < array.length; i++) {
//     const element = allusers[i];
//     console.log(element);
// }



// JavaScript's type coercion rules.?
// ChatGPT
// ChatGPT
// JavaScript's type coercion rules are fundamental to understanding how values of different types are compared or operated upon in JavaScript. Type coercion refers to the process of converting a value from one data type to another when an operator or function requiring a specific type is applied to a different type.

// Here are some key points about JavaScript's type coercion rules:

// Loose Equality (==):

// The == operator compares two values after attempting to convert them to a common type.
// If the types of the operands are different, JavaScript will attempt to coerce one or both values to the same type before making the comparison.
// JavaScript performs type coercion based on certain rules, such as converting null to undefined, converting strings to numbers if possible, and so on.
// Examples:
// 0 == false evaluates to true because both 0 and false are coerced to false.
// null == undefined evaluates to true because both null and undefined are coerced to equal values in loose comparison.
// Strict Equality (===):

// The === operator checks for equality without performing type coercion.
// It evaluates to true if both the value and the type of the operands are the same.
// Examples:
// 0 === false evaluates to false because 0 (number) is not the same as false (boolean).
// null === undefined evaluates to false because null and undefined are different types.
// Relational Operators (<, >, <=, >=):

// Relational operators like <, >, <=, and >= also trigger type coercion if necessary.
// JavaScript tries to convert operands to numbers before comparing them.
// Examples:
// "2" > 1 evaluates to true because "2" is converted to the number 2 before comparison.
// Boolean Context:

// In boolean contexts (like if statements or logical operations), JavaScript coerces values to booleans (true or false).
// Falsy values (false, 0, '', null, undefined, NaN) are coerced to false; all other values are coerced to true.
// Implicit vs Explicit Coercion:

// Implicit coercion happens automatically by JavaScript based on operator requirements.
// Explicit coercion (using functions like parseInt(), Number(), String(), etc.) allows developers to control type conversions explicitly.