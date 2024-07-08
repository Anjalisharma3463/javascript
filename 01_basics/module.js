// // Exporting Module Features  ########################
// When you write code in a module (a separate JavaScript file), you use the export keyword to make certain functions, variables, or classes available for use in other files.

// Example:
// javascript
// Copy code
// // square.js

// export const name = "square";

// export function draw(ctx, length, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, length, length);

//   return { length, x, y, color };
// }
// In this example:

// export const name = "square"; exports a constant variable named name.
// export function draw(...) exports a function named draw.
// Importing Features into Your Script
// To use these exported features in another JavaScript file, you use the import statement.

// Example:
// javascript
// Copy code
// // main.js

// import { name, draw } from "./modules/square.js";

// const myCanvas = create("myCanvas", document.body, 480, 320);
// const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");




// // Importing Modules with Import Maps ############

// When you build web applications, you often split your code into modules (separate files) for better organization. Here’s how importing modules with import maps works in a nutshell:

// Basic Idea
// Normal Imports:

// Usually, you import modules by specifying their exact file paths or URLs. For example:
// javascript
// Copy code
// import { name as squareName, draw } from "./shapes/square.js";
// import { name as circleName } from "https://example.com/shapes/circle.js";
// Import Maps:

// Import maps make this process simpler. They let you use shorter names (like aliases) instead of full paths or URLs to import modules.
// How It Works
// Defining Import Maps:

// You define an import map in your HTML file using a <script> tag with type="importmap". Inside, you list mappings between simple names (keys) and actual module paths or URLs (values).

// html
// Copy code
// <script type="importmap">
//   {
//     "imports": {
//       "shapes": "./shapes/square.js",
//       "https://example.com/shapes/square.js": "./shapes/square.js",
//       "lodash": "/node_modules/lodash-es/lodash.js"
//     }
//   }
// </script>
// shapes maps to a local module (./shapes/square.js).
// https://example.com/shapes/square.js maps to a module hosted on a server.
// lodash maps to a module in a node_modules directory (/node_modules/lodash-es/lodash.js).
// Using Simple Names:

// After defining the import map, you can import modules using these simple names (aliases) in your JavaScript code.

// javascript
// Copy code
// import { name as squareName } from "shapes";
// import _ from "lodash";
// from "shapes" will resolve to ./shapes/square.js.
// from "lodash" will resolve to /node_modules/lodash-es/lodash.js.
// Benefits:

// Simplicity: Use short names instead of long paths or URLs, making your code cleaner.
// Flexibility: Easily remap URLs to different locations for better organization.
// Version Control: Manage different versions of modules effectively.
// Optimization: Avoid unnecessary updates by using un-hashed module names.




// // #########################
// // Importing Modules Using Import Maps: A Simple Explanation
// // Feature Detection
// You can check if your browser supports import maps using a method called HTMLScriptElement.supports(). This helps ensure your code works across different browsers that may or may not support this feature.

// javascript
// Copy code
// if (HTMLScriptElement.supports?.("importmap")) {
//   console.log("Browser supports import maps.");
// }
// Importing Modules as Bare Names
// In some JavaScript environments like Node.js, you can import modules using just their names, like import { name, draw, reportArea, reportPerimeter } from "square";. This works because Node.js can find these modules based on a standard file system location.

// However, in browsers, you need an import map to tell the browser where to find these modules because browsers don't naturally know where to look.

// Example Import Map
// html
// Copy code
// <script type="importmap">
//   {
//     "imports": {
//       "square": "./shapes/square.js"
//     }
//   }
// </script>
// With this map, you can now import the "square" module using its bare name:

// javascript
// Copy code
// import { name as squareName, draw } from "square";
// Remapping Module Paths
// You can use import maps to remap module paths. For example, if you have many modules in one location and want to move them to another, you can use import maps to easily update where your code looks for these modules.

// Packages of Modules
// Think of packages like collections of related modules. Import maps allow you to import entire packages using a single name, simplifying how you manage and use code libraries.

// Example Import Map for lodash
// json
// Copy code
// {
//   "imports": {
//     "lodash": "/node_modules/lodash-es/lodash.js",
//     "lodash/": "/node_modules/lodash-es/"
//   }
// }
// Now you can import lodash and its specific modules like this:

// javascript
// Copy code
// import _ from "lodash";
// import fp from "lodash/fp.js";
// General URL Remapping
// You can use import maps not just for local paths but also for URLs. This is useful if you want to replace absolute URLs with your own local resources.

// Scoped Modules for Version Management
// Import maps support version management by allowing different parts of your code to import different versions of the same module. This helps manage complexity in large applications.

// Example Scope in Import Map
// json
// Copy code
// {
//   "imports": {
//     "coolmodule": "/node_modules/coolmodule/index.js"
//   },
//   "scopes": {
//     "/node_modules/dependency/": {
//       "coolmodule": "/node_modules/some/other/location/coolmodule/index.js"
//     }
//   }
// }
// Here, depending on where your code is located, it can import different versions of coolmodule without conflicts.

// Improve Caching with Import Maps
// Instead of relying on hashed filenames that change whenever a module updates, import maps let you use consistent module names in your code. This reduces the need to update multiple files just because a module's filename changes.

// Example Import Map for Caching
// json
// Copy code
// {
//   "imports": {
//     "main_script": "/node/srcs/application-fg7744e1b.js",
//     "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
//   }
// }
// If dependency_script changes its hash, you only need to update the import map, not every place in your code that uses it.

// Conclusion
// Import maps are a powerful tool in modern JavaScript development. They simplify how you import and manage modules, handle versioning, and improve caching strategies, making your code more efficient and easier to maintain.



// // ####################################
// // Applying the module to your HTML
// Now we just need to apply the main.js module to our HTML page. This is very similar to how we apply a regular script to a page, with a few notable differences.

// First of all, you need to include type="module" in the <script> element, to declare this script as a module. To import the main.js script, we use this:

// HTML
// Copy to Clipboard
// <script type="module" src="main.js"></script>
// You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the <script> element:

// HTML
// Copy to Clipboard
// <script type="module">
//   /* JavaScript module code here */
// </script>




// // #############################################
// // Creating a module object
// The above method works OK, but it's a little messy and long-winded. An even better solution is to import each module's features inside a module object. The following syntax form does that:

// JS
// Copy to Clipboard
// import * as Module from "./modules/module.js";
// This grabs all the exports available inside module.js, and makes them available as members of an object Module, effectively giving it its own namespace. So for example:

// JS
// Copy to Clipboard
// Module.function1();
// Module.function2();
// Again, let's look at a real example. If you go to our module-objects directory, you'll see the same example again, but rewritten to take advantage of this new syntax. In the modules, the exports are all in the following simple form:

// JS
// Copy to Clipboard
// export { name, draw, reportArea, reportPerimeter };
// The imports on the other hand look like this:

// JS
// Copy to Clipboard
// import * as Canvas from "./modules/canvas.js";

// import * as Square from "./modules/square.js";
// import * as Circle from "./modules/circle.js";
// import * as Triangle from "./modules/triangle.js";
// In each case, you can now access the module's imports underneath the specified object name, for example:

// JS
// Copy to Clipboard
// const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
// Square.reportArea(square1.length, reportList);
// Square.reportPerimeter(square1.length, reportList);
// So you can now write the code just the same as before (as long as you include the object names where needed), and the imports are much neater.



// // ####################################
// // Modules and classes

// As we hinted at earlier, you can also export and import classes; this is another option for avoiding conflicts in your code, and is especially useful if you've already got your module code written in an object-oriented style.

// You can see an example of our shape drawing module rewritten with ES classes in our classes directory. As an example, the square.js file now contains all its functionality in a single class:

// JS
// Copy to Clipboard
// class Square {
//   constructor(ctx, listId, length, x, y, color) {
//     // …
//   }

//   draw() {
//     // …
//   }

//   // …
// }
// which we then export:

// JS
// Copy to Clipboard
// export { Square };
// Over in main.js, we import it like this:

// JS
// Copy to Clipboard
// import { Square } from "./modules/square.js";
// And then use the class to draw our square:

// JS
// Copy to Clipboard
// const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
// square1.draw();
// square1.reportArea();
// square1.reportPerimeter();



// // #############################################
// // Aggregating Modules Explanation

// When you have multiple modules with related functionality, you might want to combine them into a single parent module for easier importing and organization. Here's how you can do it using JavaScript's export syntax:

// Exporting from Submodules:

// Each submodule (circle.js, square.js, triangle.js in this example) exports its functionalities using export { ... } statements. For instance:
// javascript
// Copy code
// // circle.js
// export { Circle };
// Aggregating in the Parent Module (shapes.js):

// In shapes.js, which acts as the parent module, you import the exports from the submodules and re-export them. This allows you to consolidate all functionalities into a single module.
// javascript
// Copy code
// // shapes.js
// export { Square } from "./shapes/square.js";
// export { Triangle } from "./shapes/triangle.js";
// export { Circle } from "./shapes/circle.js";
// Usage in Main File (main.js):

// Instead of importing each submodule individually in your main file (main.js), you can now import all functionalities from the aggregated parent module (shapes.js) with a single line:
// javascript
// Copy code
// // main.js
// import { Square, Circle, Triangle } from "./modules/shapes.js";


// // ####################################
// // Dynamic module loading
// A recent addition to JavaScript modules functionality is dynamic module loading. This allows you to dynamically load modules only when they are needed, rather than having to load everything up front. This has some obvious performance advantages; let's read on and see how it works.

// This new functionality allows you to call import() as a function, passing it the path to the module as a parameter. It returns a Promise, which fulfills with a module object (see Creating a module object) giving you access to that object's exports. For example:

// JS
// Copy to Clipboard
// import("./modules/myModule.js").then((module) => {
//   // Do something with the module.
// });
// Note: Dynamic import is permitted in the browser main thread, and in shared and dedicated workers. However import() will throw if called in a service worker or worklet.

// Let's look at an example. In the dynamic-module-imports directory we've got another example based on our classes example. This time however we are not drawing anything on the canvas when the example loads. Instead, we include three buttons — "Circle", "Square", and "Triangle" — that, when pressed, dynamically load the required module and then use it to draw the associated shape.

// In this example we've only made changes to our index.html and main.js files — the module exports remain the same as before.

// Over in main.js we've grabbed a reference to each button using a document.querySelector() call, for example:

// JS
// Copy to Clipboard
// const squareBtn = document.querySelector(".square");
// We then attach an event listener to each button so that when pressed, the relevant module is dynamically loaded and used to draw the shape:

// JS
// Copy to Clipboard
// squareBtn.addEventListener("click", () => {
//   import("./modules/square.js").then((Module) => {
//     const square1 = new Module.Square(
//       myCanvas.ctx,
//       myCanvas.listId,
//       50,
//       50,
//       100,
//       "blue",
//     );
//     square1.draw();
//     square1.reportArea();
//     square1.reportPerimeter();
//   });
// })







// // The default keyword signifies that this is the main export of the module, which can be imported without using curly braces ({}) in the import statement.
// //export default is used to export a single value as the default export of a module. This value can be imported without specifying its name, which can be convenient for exporting the primary functionality or data of a module.
// // Top level await
// Top level await is a feature available within modules. This means the await keyword can be used. It allows modules to act as big asynchronous functions meaning code can be evaluated before use in parent modules, but without blocking sibling modules from loading.

// Let's take a look at an example. You can find all the files and code described in this section within the top-level-await directory, which extends from the previous examples.

// Firstly we'll declare our color palette in a separate colors.json file:

// JSON
// Copy to Clipboard
// {
//   "yellow": "#F4D03F",
//   "green": "#52BE80",
//   "blue": "#5499C7",
//   "red": "#CD6155",
//   "orange": "#F39C12"
// }
// Then we'll create a module called getColors.js which uses a fetch request to load the colors.json file and return the data as an object.

 
// // fetch request
// const colors = fetch("../data/colors.json").then((response) => response.json());

// export default await colors;
// #############################

// async function fetchColors() {
//     const response = await fetch('https://mdn.github.io/js-examples/module-examples/top-level-await/data/colors.json');
//     return await response.json();
// }

// export default fetchColors();





// ########################
// Notice the last export line here.

// We're using the keyword await before specifying the constant colors to export. This means any other modules which include this one will wait until colors has been downloaded and parsed before using it.

// Let's include this module in our main.js file:

// JS
// Copy to Clipboard
// import colors from "./modules/getColors.js";
// import { Canvas } from "./modules/canvas.js";

// const circleBtn = document.querySelector(".circle");

// // …



// // ####################################
// // Dynamically import the shapes module


// import("./modules/shapes.js").then((Module) => {
//     // Now Module contains all the exports from shapes.js
//     const square1 = new Module.Square(
//       myCanvas.ctx,
//       myCanvas.listId,
//       50,
//       50,
//       100,
//       colors.blue,
//     );
  
//     const circle1 = new Module.Circle(
//       myCanvas.ctx,
//       myCanvas.listId,
//       75,
//       200,
//       100,
//       colors.green,
//     );
  
//     const triangle1 = new Module.Triangle(
//       myCanvas.ctx,
//       myCanvas.listId,
//       100,
//       75,
//       190,
//       colors.yellow,
//     );
//   });
  


