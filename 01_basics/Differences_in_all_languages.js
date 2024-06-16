//Certainly! Here's a comparison of JavaScript, Java, C++, and Python, highlighting their basics and key differences:

//JavaScript
//1. Dynamic Typing: Variables can hold any type of data and can change types at runtime.
 
// let x = 10; // x is a number
// x = "Hello"; // now x is a string

// //2. Interpreted Language: JavaScript code is executed by the JavaScript engine in the browser or Node.js runtime.

// //3. Event-driven and Asynchronous: JavaScript is often used for handling events (like clicks) and supports asynchronous operations (like AJAX calls).

// setTimeout(() => {
//     console.log("Hello");
// }, 1000);


// //4. Prototype-based Object Orientation: JavaScript uses prototypes for inheritance rather than classical inheritance.
 
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.greet = function() {
//     console.log("Hello, " + this.name);
// };





// //Java

// //1. Static Typing: Variables must be declared with a type, and that type cannot change.
 
// int x = 10;
// x = "Hello"; // Compilation error

// //2. Compiled Language: Java code is compiled to bytecode, which is then executed by the Java Virtual Machine (JVM).
 
// public class Main {
//     public static void main(String[] args) {
//         System.out.println("Hello, World");
//     }
// }


// //3.  Class-based Object Orientation: Java uses classes and objects for its object-oriented programming.
 
// public class Person {
//     private String name;
//     public Person(String name) {
//         this.name = name;
//     }
//     public void greet() {
//         System.out.println("Hello, " + name);
//     }
// }


// //4.  Strongly Typed: Type checking is done at compile-time.
 
// int a = 5;
// a = "Hello"; // Compile-time error




// //C++

// //1. Static Typing: Variables must be declared with a type, and that type is checked at compile-time.
 
// int x = 10;
// x = "Hello"; // Compilation error


// //2. Compiled Language: C++ code is compiled directly to machine code, which is executed by the system's processor.
 
// #include <iostream>
// int main() {
//     std::cout << "Hello, World!" << std::endl;
//     return 0;
// }

// //3. Class-based Object Orientation: C++ supports both procedural and object-oriented programming.
 
// class Person {
// public:
//     std::string name;
//     Person(std::string name) : name(name) {}
//     void greet() {
//         std::cout << "Hello, " << name << std::endl;
//     }
// };


// //4. Manual Memory Management: C++ allows direct manipulation of memory through pointers.
 
// int* p = new int(5);
// delete p; // Manual memory management


// Python
// 1. Dynamic Typing: Variables can hold any type of data and can change types at runtime.

// x = 10  # x is an integer
// x = "Hello"  # now x is a string


// 2. Interpreted Language: Python code is executed by the Python interpreter.
 
// print("Hello, World")


// 3. Class-based Object Orientation: Python uses classes and objects for its object-oriented programming.
 
// class Person:
//     def __init__(self, name):
//         self.name = name
//     def greet(self):
//         print("Hello, " + self.name)


// 4. Automatic Memory Management: Python uses garbage collection for memory management.
 
// a = [1, 2, 3]  # No need for manual memory management



// Key Differences
// Typing System:

// JavaScript and Python: Dynamically typed, meaning variables can change type.
// Java and C++: Statically typed, meaning variables have a fixed type.
// Compilation:

// JavaScript: Interpreted.
// Java: Compiled to bytecode, which runs on the JVM.
// C++: Compiled directly to machine code.
// Python: Interpreted.
// Object Orientation:

// JavaScript: Prototype-based.
// Java, C++, Python: Class-based.
// Memory Management:

// JavaScript and Python: Automatic (garbage collection).
// Java: Automatic (garbage collection).
// C++: Manual memory management with options for smart pointers for automatic management.
// Use Cases:

// JavaScript: Primarily used for web development.
// Java: Used for enterprise applications, Android development, and large systems.
// C++: Used for system/software development, game development, and performance-critical applications.
// Python: Used for web development, scientific computing, data analysis, artificial intelligence, and scripting.
// Interview Tips
// Understand Basics: Know the fundamental differences in typing, compilation, and memory management.
// Code Examples: Be ready to write and explain simple code snippets in each language.
// Use Cases: Understand where each language excels and why it's chosen for particular tasks.
// Memory Management: Be clear on how each language handles memory, especially differences between automatic and manual management.





// 1. Dynamic vs. Static Typing


// Dynamic Typing

// Definition: In dynamically typed languages, variable types are determined at runtime. You don't need to declare the type of the variable explicitly; the type can change based on the value assigned to it.
// Example: JavaScript and Python
 
// let x = 10;   // x is a number
// x = "Hello";  // now x is a string


// python
 
// x = 10       # x is an integer
// x = "Hello"  # now x is a string

// History and Usage: Dynamic typing is often used in scripting languages and languages designed for rapid development, such as JavaScript (created in 1995 for web development) and Python (created in 1991 for ease of readability and simplicity).

// Static Typing

// Definition: In statically typed languages, variable types are determined at compile-time. You must declare the type of the variable explicitly, and it cannot change.

// Example: Java and C++


// java


// int x = 10;   // x is an integer
// x = "Hello";  // Compile-time error
// cpp
// Copy code
// int x = 10;   // x is an integer
// x = "Hello";  // Compilation error


// History and Usage: Static typing is used in languages designed for performance and reliability, such as Java (created in 1995 for portability and performance) and C++ (created in 1985 for system/software development).

// Why the Difference?

// Flexibility vs. Safety: Dynamic typing offers more flexibility and faster development since you don't have to declare types explicitly. Static typing provides more safety and early error detection since types are checked at compile-time.

// 1 Performance: Statically typed languages generally offer better performance because type-checking is done at compile-time, whereas dynamically typed languages may incur overhead at runtime due to type-checking.

// 2. Interpreted vs.\

// Interpreted Languages
// Definition: Interpreted languages are executed line-by-line by an interpreter at runtime. The source code is not directly translated into machine code beforehand.
// Example: JavaScript and Python
 
// console.log("Hello, World!"); // JavaScript is interpreted by the browser or Node.js

 
// print("Hello, World!")  # Python is interpreted by the Python interpreter


// Pros:
// Easier to debug and test because you can run code directly.

// Platform-independent as long as the interpreter is available.

// Cons:

// Slower execution compared to compiled languages due to line-by-line interpretation.





// Compiled Languages

// Definition: Compiled languages are translated into machine code by a compiler before execution. The resulting machine code is executed directly by the computer's hardware.
// Example: Java and C++


// public class Main {
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//     }
// }
// // Java code is compiled into bytecode, which is then run on the Java Virtual Machine (JVM)



// #include <iostream>
// int main() {
//     std::cout << "Hello, World!" << std::endl;
//     return 0;
// }
// // C++ code is compiled into machine code specific to the target platform
// Pros:

// Faster execution since the code is already translated into machine code.
// More efficient memory management and optimizations by the compiler.

// Cons:
// More time-consuming to compile and debug, as you need to compile the code before running it.
// Platform-dependent unless additional steps are taken (e.g., Java's bytecode runs on the JVM).


// ### Summary

// - **Python**: Explicit initialization required; using uninitialized variables raises an error.
// - **Java**: Instance variables have default values; local variables must be explicitly initialized.
// - **C++**: Local variables contain garbage values; static and global variables have default values.
// - **JavaScript**: Variables are initialized to `undefined` by default.