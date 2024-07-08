

function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("j");
    console.log("k");
    
}


const greeting = function(){
    console.log("hello js user;");
  }  

sayMyName // reference // rehta ha 
sayMyName() // execute krana

//parameters in definning funciton
function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}
//arguments in calling
addTwoNumbers(3 , "4") // 34
addTwoNumbers(3 , "a")  // 3a
const result = addTwoNumbers(3 , null) // 3
console.log(result); // undefined because return kuch kra hi nahi bassconsole se print kra h


function sayMyName2(number1 , number2){
     let result = number1 + number2
     return result
    
}

const ans = sayMyName2(5 , 3)
console.log(ans);


//default value is sam if we did not passed anything when calling funciton
function loginUserMessage(username = "sam"){
    // if(username === undefined){
     // if(username == undefined){  
    if(!username) {
        console.log("please enter username");
        return;
    }
     return `${username} just logged in`
}
// string inmanipulation ---backticks

let user = loginUserMessage("Anjali")
console.log(user);

//OR

console.log(loginUserMessage("radhe"));
console.log(loginUserMessage("")); // just logged in
console.log(loginUserMessage( )); // no value is passed so undefined ust logged in



 function calculate_Cart_Price(num1){
      return num1
 }

 console.log(calculate_Cart_Price(2 , 4 , 5)); //2


OR by using rest operator..

 function calculate_Cart_Price(...num1){
      return num1
 }

 console.log(calculate_Cart_Price(2 , 4 , 5)); //[ 2, 4, 5 ]

 //or

 function calculate_Cart_Price(val1 , val2, ...num1){
    return num1
}

console.log(calculate_Cart_Price(2 , 4, 5, 6 , 3 , 5));  
// val1 = 2 , val2 = 4 , numm1 = [ 5, 6, 3, 5 ] 



const user = {
    username: "jitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


const mynewarray = [10 , 20 , 20 , 30 , 40]

function returnsecondvalue(getarray){
    return getarray[0]
}

console.log(returnsecondvalue(mynewarray));
//or
console.log(returnsecondvalue([1, 2, 3 , 4]));




JavaScript Execution in Detail
Traditional Interpreted Language
In a traditional interpreted language, the interpreter reads and executes code line by line. There is no pre-processing step where the code is analyzed or transformed before execution.

Modern JavaScript Engines
Modern JavaScript engines, such as Google's V8, do not operate purely as interpreters. Instead, they incorporate a Just-In-Time (JIT) compilation step. Here's what happens in a modern JavaScript engine:

Parsing:

The JavaScript engine reads the entire code and parses it to create an Abstract Syntax Tree (AST). This is a representation of the structure of your code.
Compilation:

The engine performs a process that involves both interpreting and compiling the code. It generates an intermediate representation of the code (often bytecode) that is optimized for execution.
Execution:

The bytecode or intermediate representation is then executed. During this phase, the hoisting behavior becomes apparent.
Hoisting Explained
What is Hoisting?
Hoisting is a behavior where JavaScript moves declarations to the top of the current scope during the parsing and compilation steps. This means that both variable and function declarations are known before the code is executed line by line.

How Hoisting Works:
Function Declarations: The entire function definition is moved to the top of its scope.
Variable Declarations: Only the declarations are moved to the top, not the initializations.
Your Example in Detail
Consider this code:

javascript
Copy code
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
Parsing and Compilation Phase:

The JavaScript engine parses the code and identifies the function declaration square.

It hoists the square function declaration to the top of the scope. So, internally, the engine views the code as:

javascript
Copy code
function square(n) {
  return n * n;
}

console.log(square(5)); // 25



// The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  //yaha pe basicsally outer function inner function ko return kar rha h so it's like this::--

//   const fnInside = function inside(y){
//     return x + y;
//   }
  
  console.log(fnInside(5)); // 8
  console.log(outside(3)(5)); // 8
  




  //outside funciton has lowest priority a:
  function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10)); // 20 (instead of 10)
  


  ///Arguments obejcts::

  function myConcat(separator) {
    let result = ""; // Initialize result string
  
    // Iterate through the arguments object starting from the second argument
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
    }
    return result;
  }
  
  // Testing the function with different numbers of arguments
  console.log(myConcat(", ", "red", "orange", "blue")); // "red, orange, blue, "
  console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah")); // "elephant; giraffe; lion; cheetah; "
  console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley")); // "sage. basil. oregano. pepper. parsley. "

  function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
  }
  
  console.log(multiply(6)); // 5
  // consotructor function ::
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }



  Rest parameters
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. The function then multiplies these by the first argument.

JS
Copy to Clipboard
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]






// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes
