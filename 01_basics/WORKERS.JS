 
// **What are Workers?**
// - **Problem:** Imagine your web page freezing up when it's busy doing something. That happens because web browsers usually run all your JavaScript code in one thread. So, if one task takes a long time, the whole page becomes unresponsive.
  
// - **Solution:** Workers solve this problem by letting your JavaScript code run in separate threads. Think of threads as separate workers who can work on different tasks at the same time without blocking each other.

// **Key Points:**
// 1. **Separate Threads:** Workers allow some tasks to run independently from your main JavaScript code. This keeps your page responsive even if one task is taking a long time.
  
// 2. **No Direct Access:** Workers and your main JavaScript code can't directly share data. They communicate by sending messages to each other. This prevents them from accidentally messing up each other's work.

// 3. **Types of Workers:**
//    - **Dedicated Workers:** Work exclusively for one page.
//    - **Shared Workers:** Can be used by multiple pages.
//    - **Service Workers:** Handle background tasks like caching data or sending push notifications.

// **Example:**
// - Imagine you have a web page that calculates a lot of prime numbers. Without workers, your page might freeze while calculating. With a worker, you can keep the page responsive by letting the worker do the heavy lifting in the background.

// **How They Work:**
// - You create a worker in your main JavaScript code and give it a separate JavaScript file (like `generate.js`). This file contains the code that will run in the worker.
  
// - When you need the worker to do something, like generate prime numbers, you send it a message with instructions and data (like how many primes to generate).
  
// - The worker does its job in its own thread, without freezing your main page.
  
// - When the worker finishes, it sends a message back to your main JavaScript code with the results.
  
// - This way, your main page stays responsive, and the worker does its task without blocking anything else.

// **Conclusion:**
// Workers are like extra helpers that handle time-consuming tasks in the background, allowing your main web page to remain smooth and interactive.



// Other types of workers
// The worker we just created was what's called a dedicated worker. This means it's used by a single script instance.

// There are other types of workers, though:

// Shared workers can be shared by several different scripts running in different windows.
// Service workers act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of Progressive Web Apps.
 
// the main scope that spawned the worker can send back information to the thread that spawned it using the Worker.postMessage method.
//

postMessage(message)
postMessage(message, options)
postMessage(message, transfer)

What is postMessage()?

Purpose: postMessage() is a method used by a web worker (like a helper script) to send messages back to the main web page that created it.

Usage: It lets the worker share results, updates, or any data with the main page without freezing it.

Key Points:

Sending Messages: When a web worker finishes a task or needs to send data, it uses postMessage() to notify the main page.

Data Handling: You can send any JavaScript object or value using postMessage(), like numbers, strings, arrays, or even complex objects. It handles this using a method called the structured clone algorithm, which ensures safe copying of data.

Performance: For large objects, you can also transfer ownership using a technique called transferables, which makes it faster and more efficient.

Example:

Worker Script (worker.js):

javascript
Copy code
onmessage = (e) => {
  console.log("Message received from main script");
  const result = e.data[0] * e.data[1]; // Calculate some result
  postMessage(result); // Send the result back to the main script
};
Here, onmessage listens for messages from the main script. When it receives data (like numbers to multiply), it calculates a result and sends it back using postMessage().
Main Script:

javascript
Copy code
const worker = new Worker('worker.js');

worker.onmessage = (e) => {
  console.log(`Result received from worker: ${e.data}`);
};

// Sending data to the worker
worker.postMessage([10, 5]); // Send numbers 10 and 5 to the worker
Here, worker.postMessage() sends data (an array [10, 5]) to the worker script (worker.js). The worker processes it and sends back the result using postMessage(). The main script listens for this result using worker.onmessage.


// A BIG EXAMPLE:

// MAIN.JS FILE?
// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});




// GENERATE.js
// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === "generate") {
      generatePrimes(message.data.quota);
    }
  });
  
  // Generate primes (very inefficiently)
  function generatePrimes(quota) {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    postMessage(primes.length);
  }
  




//   indexedDB.HTML
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Number of primes</title>
    <script type="text/javascript" src="main.js" defer></script>
    <link href="style.css" rel="stylesheet">
  </head>

  <body>

    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000">

    <button id="generate">Generate primes</button>
    <button id="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">Try typing in here immediately after pressing "Generate primes"</textarea>

    <div id="output"></div>

  </body>

</html>


{/* 
The main thread handles user interface interactions and updates.
The web worker performs the computationally intensive task (generating prime numbers).
Communication between the main thread and the web worker happens asynchronously through message passing. */}