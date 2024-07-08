console.log("Getting started with event");


const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);
controller.abort(); // removes any/all event handlers associated with this controller





// <!DOCTYPE html>
// <html>
// <head>
//     <title>Event Bubbling and Capturing</title>
// </head>
// <body>
//     <h2>Amazing image</h2>
//     <div id="container">
//         <ul id="images">
//             <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
//             <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
//             <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
//         </ul>
//     </div>
//     <script>
//         // Add event listener to the <div> element (ancestor)
//         document.getElementById('container').addEventListener('click', function(event) {
//             alert('Div clicked! (Bubbling)');
//         }, false); // false means bubbling phase

//         // Add event listener to the <ul> element
//         document.getElementById('images').addEventListener('click', function(event) {
//             alert('UL clicked! (Bubbling)');
//         }, false); // false means bubbling phase

//         // Add event listener to an <img> element (target)
//         document.getElementById('photoshop').addEventListener('click', function(event) {
//             alert('Photoshop image clicked!');
//         }, false); // false means bubbling phase

//         // Add capturing event listener to the <div> element
//         document.getElementById('container').addEventListener('click', function(event) {
//             alert('Div clicked! (Capturing)');
//         }, true); // true means capturing phase

//         // Add capturing event listener to the <ul> element
//         document.getElementById('images').addEventListener('click', function(event) {
//             alert('UL clicked! (Capturing)');
//         }, true); // true means capturing phase

//         // Add capturing event listener to an <img> element
//         document.getElementById('photoshop').addEventListener('click', function(event) {
//             alert('Photoshop image clicked! (Capturing)');
//         }, true); // true means capturing phase
    
    
// //         Event Bubbling Phase:

// // When you click on the photoshop image, the event will first trigger the alert for the image itself (alert('Photoshop image clicked!')).
// // Then, it will bubble up to the ul element (alert('UL clicked! (Bubbling)')).
// // Finally, it will reach the div element (alert('Div clicked! (Bubbling)')).
// // Event Capturing Phase:

// // When you click on the photoshop image, the event will first trigger the alert for the div element (alert('Div clicked! (Capturing)')).
// // Then, it will propagate down to the ul element (alert('UL clicked! (Capturing)')).
// // Finally, it will reach the image itself (alert('Photoshop image clicked! (Capturing)')).
    
    
//     </script>
// </body>
// </html>




//target   vs    current Target

<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>


const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `Target: ${e.target.tagName}`;
  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);


//when i clicked only on button output is this:__
// Target: BUTTON, Current target: BUTTON
// Target: BUTTON, Current target: DIV
// Target: BUTTON, Current target: BODY