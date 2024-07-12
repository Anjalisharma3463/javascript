
Visual Representation
Node:

html
Copy code
<div> <!-- This is a node -->
  Hello <!-- This is a text node -->
</div>

 

NodeList:

javascript
Copy code
let nodes = document.body.childNodes; // This is a NodeList containing all child nodes of
 The key difference between a library and a framework is "Inversion of Control". When calling a method from a library, the developer is in control. With a framework, the control is inverted: the framework calls the developer's code.



//  In traditional web pages, every time you want to update any part of the page (like showing new book recommendations), the entire page reloads. This can be slow and inefficient, especially if most of the page stays the same.
Why You Might Like This Approach
Fetching data without reloading the page offers several benefits, which might explain why you like it:

Speed and Efficiency: Only the necessary data is fetched and updated, which is much faster than reloading the entire page. This makes the web application more responsive.
Better User Experience: Users don't have to wait for the whole page to reload. They can continue interacting with the web page while new data is being fetched and displayed.
Reduced Bandwidth Usage: Only the required data is fetched, which means less data is transferred. This is especially important for users with limited internet bandwidth.
// Seamless Interactions: The page feels more dynamic and alive, providing a smoother and more seamless experience.


Client-side web APIs are tools that allow you to interact with various aspects of a web browser, the operating system, or data from other websites/services using JavaScript. These APIs make it possible to build interactive, dynamic web applications. Here's a breakdown of the key concepts and components from the MDN documentation:

Introduction to Web APIs
What are APIs?

APIs, or Application Programming Interfaces, are sets of functions and protocols that allow different software components to communicate with each other.
In web development, APIs enable you to interact with the browser and manipulate web content, among other things.
How do APIs work?

APIs provide a way for your code to request and use features or data.
They are structured in a way that makes them easy to use within your JavaScript code.
Main classes of APIs:

Direct URL: Best for static images where the URL is known.
// Using response.blob(): Ideal for dynamic loading, managing various file types, or when dealing with user interactions where the URL is determined at runtime.

In traditional web pages, any time you want to update part of the content, the entire page has to reload. This means the browser sends a request to the server, the server sends back a new page, and the browser reloads everything on the screen.

Updating content "without reloading the page" means using JavaScript to fetch new data and update parts of the page dynamically. This makes the website feel faster and more responsive 

What is an API Key?
An API key is a unique identifier used to authenticate requests associated with your project for usage and billing purposes. APIs (Application Programming Interfaces) allow different software applications to communicate with each other. When you use an API provided by a service (like Google Maps, Twitter, or a weather service), you often need to include an API key in your requests.
Why Use an API Key?
Authentication: Ensures that the request comes from a legitimate source.
Usage Tracking: Helps track the number of requests made, useful for billing and usage limits.
Security: Prevents unauthorized access to the API

The trouble with the traditional model here is that we'd have to fetch and load the entire page, even when we only need to update one part of it. This is inefficient and can result in a poor user experience.

So instead of the traditional model, many websites use JavaScript APIs to request data from the server and update the page content without a page load. So when the user searches for a new product, the browser only requests the data which is needed to update the page — the set of new books to display, for instance.





Browser APIs: Built into the browser to manipulate web pages (e.g., DOM, Fetch API).
Third-party APIs: Provided by other websites/services (e.g., Google Maps API, Facebook API).
Manipulating Documents
Document Object Model (DOM):

The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
You can use the DOM APIs to select, modify, and create elements on your web pages.
Fetching Data from the Server
XMLHttpRequest and Fetch API:

XMLHttpRequest: An older way to request data from a server.
Fetch API: A modern, more flexible way to make network requests and handle responses. It uses Promises for easier asynchronous code.
Third-party APIs
These APIs are not built into the browser but are provided by other services (e.g., Google Maps, Facebook).
They allow you to incorporate external data and services into your applications.
Drawing Graphics
Canvas API:

Allows you to draw graphics and animations on web pages using the <canvas> element.
You can create shapes, text, images, and more using JavaScript.
WebGL:

A JavaScript API for rendering 3D graphics within any compatible web browser without the use of plug-ins.
Video and Audio APIs
HTML5 introduced <video> and <audio> elements for embedding media.
These elements have APIs for controlling playback, volume, and more.
Client-side Storage
Storage APIs:

Modern browsers support various storage mechanisms to persist data:
LocalStorage: Stores data with no expiration date.
SessionStorage: Stores data for the duration of the page session.
IndexedDB: A low-level API for storing large amounts of structured data.








############################
// THIRD - PARTY APIs

defer: This attribute tells the browser to load the script in the background while it continues to parse the HTML. The script will only run after the entire HTML document has been parsed. This helps improve page load performance and ensures the script doesn't block the loading of the rest of the page
In this case, when the browser reaches the <script src="example.js"></script> tag, it will stop parsing the HTML and load the script. If the script is large or the network is slow, this could delay the rest of the page from displaying


Browser APIs:

Ask for user permission directly through prompts.
Protect user privacy and security.
Give users control over their data and device functionalities.
Third-Party APIs:

Use API keys for access control.
Allow providers to monitor and manage usage.
Help in enforcing usage limits and billing.
Ensure accountability for developers using the API.
Summary
Browser APIs ask for permissions directly from the user to protect privacy and security.
Third-Party APIs use API keys to control access, monitor usage, enforce quotas, and ensure accountability.



This API allows you to retrieve New York Times news story information and display it on your site. This type of API is known as a RESTful API — instead of getting data using the features of a JavaScript library like we did with Mapquest, we get data by making HTTP requests to specific URLs, with data like search terms and other properties encoded in the URL (often as URL parameters). This is a common pattern you'll encounter with APIs.




// Why Are We Creating That URL?
// We are creating the URL to make a request to a web service, which will return data based on the parameters we provide. This is a common practice in web development when interacting with RESTful APIs to fetch or manipulate data.

// What Is a RESTful API?
// A RESTful API (Representational State Transfer API) is a way to allow systems to communicate over HTTP. RESTful APIs follow a set of conventions and principles to provide a standardized way of requesting and transferring data.

// The Concept of RESTful APIs
// Base URL: The endpoint where the API is hosted.
// HTTP Methods: The operations to perform (GET, POST, PUT, DELETE, etc.).
// Endpoints: Specific paths in the API that represent different resources.
// Parameters: Data sent with the request to specify details or filters.

let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;
// 