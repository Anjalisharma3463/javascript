

// function sayMyName(){
//     console.log("H");
//     console.log("i");
//     console.log("j");
//     console.log("k");
    
// }

// sayMyName // reference // rehta ha 
// sayMyName() // execute krana

// //parameters in definning funciton
// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
// //arguments in calling
// addTwoNumbers(3 , "4") // 34
// addTwoNumbers(3 , "a")  // 3a
// const result = addTwoNumbers(3 , null) // 3
// console.log(result); // undefined because return kuch kra hi nahi bassconsole se print kra h


// function sayMyName2(number1 , number2){
//      let result = number1 + number2
//      return result
    
// }

// const ans = sayMyName2(5 , 3)
// console.log(ans);


// //default value is sam if we did not passed anything when calling funciton
// function loginUserMessage(username = "sam"){
//     // if(username === undefined){
//      // if(username == undefined){  
//     if(!username) {
//         console.log("please enter username");
//         return;
//     }
//      return `${username} just logged in`
// }
// // string inmanipulation ---backticks

// let user = loginUserMessage("Anjali")
// console.log(user);

// //OR

// console.log(loginUserMessage("radhe"));
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage( )); // no value is passed so undefined ust logged in



//  function calculate_Cart_Price(num1){
//       return num1
//  }

//  console.log(calculate_Cart_Price(2 , 4 , 5)); //2


//OR by using rest operator..

//  function calculate_Cart_Price(...num1){
//       return num1
//  }

//  console.log(calculate_Cart_Price(2 , 4 , 5)); //[ 2, 4, 5 ]

 //or

 function calculate_Cart_Price(val1 , val2, ...num1){
    return num1
}

console.log(calculate_Cart_Price(2 , 4, 5, 6 , 3 , 5)); //[ 2, 4, 5 ]
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

