//Immediately invoked function expressions (IIFE)
// jese hi jis function ko likha use vese hi execute kr do
//** */ global variables se  pollution hatane k liye  iife ka use hona  chahiye

// function chai(){
//     console.log(`DB CONNECTED`);
// }  
// chai()


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
 
// ()() - first ( ) --> function ki defination likhege and second () execution jese chai() laga rhe the

((name) => {
    // unnamed IIFE
    console.log(`db connnectedd  ${name}`);
})(`anjali`);