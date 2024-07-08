// Real-Life Analogy
// Imagine you're ordering a pizza delivery:

// Placing the Order (Creating a Promise):

// You place an order for a pizza. The pizza shop promises (creates a Promise) to deliver your pizza.
// Preparing the Pizza (Asynchronous Operation):

// The pizza shop starts preparing your pizza. This takes some time (asynchronous operation).
// Pizza Ready (Promise Resolved):

// Once the pizza is ready, the shop calls you to inform you that the pizza is on its way (resolve is called).
// Delivery (Handling the Fulfilled Promise):

// You receive the pizza and enjoy it (.then handler).
// Handling Issues (Handling Errors):

// If there was a problem (e.g., the shop ran out of ingredients), they call you to inform you of the issue (reject is called).
// You handle the issue by ordering from another shop or getting a refund (.catch handler).
// Summary
// Promise: An object that represents the result of an asynchronous operation.
// Asynchronous Operation: Tasks that take time and don't block the execution of the program.
// resolve: A function that, when called, changes the state of the Promise to "fulfilled" and passes a value to the .then handler.
// reject: A function that, when called, changes the state of the Promise to "rejected" and passes an error to the .catch handler.
// .then: Attaches handlers to handle the value when the Promise is fulfilled.
// .catch: Attaches handlers to handle errors when the Promise is rejected.
// This mechanism helps in writing more manageable and readable code for 




//WITHOUT USING PROMISE and await/sync
function doSomething(callback) {
    setTimeout(() => {
      console.log("Did something");
      callback("https://example.com/");
    }, 200);
  }
  
  function handleResult(url) {
    console.log(`Received URL: ${url}`);
  }
  
  doSomething(handleResult);
  

// ##################################################################################################

  ///using promise
  function doSomething() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Did something");
        resolve("https://example.com/");
      }, 200);
    });
  }
  
  doSomething()
    .then((url) => {
      return fetch(url);
    })
    .then((result) => {
      // result is the response from fetch
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  
        // Use async/await to call the asynchronous function but with try


// Use async/await to call the asynchronous function
async function main() {
    const url = await doSomething();
    console.log(`Received URL: ${url}`);
  }
  
  // Call the main function and handle errors
  main().catch((error) => {
    console.error(`Error: ${error}`);
  });



    //// using Asynce and await
    // Use async/await to call the asynchronous function but with try
async function main() {
    try {
      const url = await doSomething();
      console.log(`Received URL: ${url}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  
  main();




  //NESTED using asynce await with try
  async function main() {
    try {
      const result = await doSomethingCritical();
      try {
        const optionalResult = await doSomethingOptional(result);
        await doSomethingExtraNice(optionalResult);
      } catch (e) {
        // Ignore failures in optional steps and proceed.
      }
      await moreCriticalStuff();
    } catch (e) {
      console.error(`Critical failure: ${e.message}`);
    }
  }
  



  // some mistake that we do
  //always return if there is another then below  current then
  const listOfIngredients = [];

  doSomething()
    .then((url) => {
      // `return` keyword now included in front of fetch call.
      return fetch(url)
         .then((res) => res.json())
         .then((data) => {
          listOfIngredients.push(data);
        });
    })
    .then(() => {
      console.log(listOfIngredients);
      // listOfIngredients will now contain data from fetch call.
    });
  



    doSomething()
    .then((url) => fetch(url))
    .then((res) => res.json())
    .then((data) => {
      listOfIngredients.push(data);
    })
    .then(() => {
      console.log(listOfIngredients);
    });
  

    async function logIngredients() {
        const url = await doSomething();
        const res = await fetch(url);
        const data = await res.json();
        listOfIngredients.push(data);
        console.log(listOfIngredients);
      }
      


      // hERE
    //   By using throw new Error("Something failed"); inside the .then() handler, you are simulating an error condition to ensure that your error handling code works correctly. This is a common practice to test and confirm that your promise chain's error handling (via .catch()) behaves as expected when an error occurs.
    // we are throwing error by our side using thro

    async function main() {
        try {
          await doSomething();
          throw new Error("Something failed");
          console.log("Do this");
        } catch (e) {
          console.error("Do that");
        }
        console.log("Do this, no matter what happened before");
      }
      





    //   Unhandled Promise Rejections

If a promise is rejected and there's no .catch() to handle the error, it leads to an unhandled promise rejection.

Browser Environment
In the browser, you can handle global unhandled rejections using the unhandledrejection event.

javascript
Copy code
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
});

let doSomethingElse = () => {
  return new Promise((resolve, reject) => {
    // Simulate an operation that fails
    setTimeout(() => {
      reject(new Error("Unhandled promise rejection"));
    }, 1000);
  });
};

doSomethingElse();
unhandledrejection and rejectionhandled Events
unhandledrejection: Fired when a promise is rejected, and no rejection handler is available at the time.
rejectionhandled: Fired when a handler is attached to a promise that has already caused an unhandledrejection event.
javascript
Copy code
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
});

window.addEventListener('rejectionhandled', (event) => {
  console.log('Handled a previously unhandled rejection:', event.reason);
});

let doSomethingLater = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("This will be handled later"));
    }, 1000);
  });
};

let promise = doSomethingLater();

// Handling rejection after some delay
setTimeout(() => {
  promise.catch((error) => {
    console.log('Caught the error:', error.message);
  });
}, 2000);
Node.js Environment
In Node.js, you handle unhandled rejections using the unhandledRejection event on the process object.

javascript
Copy code
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

let doSomethingInNode = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Node.js unhandled rejection"));
    }, 1000);
  });
};

doSomethingInNode();
Preventing Unhandled Rejections in Node.js
If you add the process.on('unhandledRejection') listener but do not handle rejected promises within it, they will be silently ignored. It's crucial to inspect and handle each rejected promise appropriately.

javascript
Copy code
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  
  // Handle the rejected promise
  // For example, log the error or perform some recovery action
});

// Example rejected promise
let anotherRejectedPromise = new Promise((resolve, reject) => {
  reject(new Error("Another rejection example"));
});
Summary
Browser:
unhandledrejection: Captures unhandled promise rejections.
rejectionhandled: Fired when a previously unhandled rejection gets a handler.
Node.js:
unhandledRejection: Captures unhandled promise rejections.


Composition Tools
There are four main tools for running asynchronous operations concurrently:

Promise.all()
Promise.allSettled()
Promise.any()
Promise.race()
1. Promise.all()
Runs multiple promises at the same time and waits for all of them to finish. If any of the promises reject, the whole operation fails.

Example: Fetching Data from Multiple APIs
javascript
Copy code
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from API 1"), 1000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from API 2"), 2000);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from API 3"), 3000);
  });
}

Promise.all([fetchData1(), fetchData2(), fetchData3()]).then(([result1, result2, result3]) => {
  console.log(result1, result2, result3); // Logs "Data from API 1", "Data from API 2", "Data from API 3"
});
2. Promise.allSettled()
Runs multiple promises at the same time and waits for all of them to finish, regardless of whether they succeed or fail.

Example: Fetching Data and Handling All Outcomes
javascript
Copy code
Promise.allSettled([fetchData1(), fetchData2(), fetchData3()]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Failed:", result.reason);
    }
  });
});
3. Promise.any()
Waits for the first promise to resolve. If all promises reject, it rejects with an AggregateError.

Example: Quickest Data Fetch
javascript
Copy code
Promise.any([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
  console.log("First resolved:", result);
}).catch((error) => {
  console.log("All promises rejected:", error);
});
4. Promise.race()
Runs multiple promises and returns the result of the first one that settles (either resolves or rejects).

Example: Fastest Data Fetch (Resolved or Rejected)
javascript
Copy code
Promise.race([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
  console.log("First settled:", result);
}).catch((error) => {
  console.log("First settled with error:", error);
});


// These methods all run promises concurrently — a sequence of promises are started simultaneously and do not wait for each other. Sequential composition is possible using some clever JavaScript:
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    console.log("Final result:", result3);
    // Use result3 here
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
Explanation:
Promise Chain Setup: [func1, func2, func3] is an array of functions we want to execute sequentially.

Reduce Method: .reduce((p, f) => p.then(f), Promise.resolve()) starts with Promise.resolve() to kick off the promise chain. For each function f in the array, p.then(f) ensures that each function runs after the previous one has resolved.

Final .then(): .then((result3) => { ... }) receives the result from the last function (func3) in the sequence. Here, you can use result3 for further processing.

Error Handling: .catch((error) => { ... }) is used to catch any errors that might occur during the execution of any of the functions.