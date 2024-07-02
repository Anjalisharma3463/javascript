Promise:- jo bhi task isko diya h vo abhi complete nahi ho skta h (Asynchronus)
A promise is ust a object

fetch('https://somthing.com').then().catch().finally()
// errror hua to catch me aa aega // response aega toh then me // bacha hua finally me
//promises andar call back leta h
// finally to hamesha hi execute hogaa hi

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // Bina is line k resolve parameter me jo h and neeche then kabhi connect hi nahi honge and output bas consumed ayega but when we'll use it then output will be async task is completed and promise consumed.
    }, 1000)
})

// promise consumption...
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // network se koi data aya ho to vo data passs krna ho 
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//chaining  uper wala then se jo return kara h vo just neeche then me ayega jese username

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});



##################################################################################################################################################################

.then or .catch bhi use kr  skte ho but this is a new way to handle promises output
Asynchronus directly errors ko handle nahi kr skte h....


async function consumePromiseFive(){
     const response = await promiseFive // jo bhi resolve hoke aaye // and promise ek object h  to () function nahi h ye use mat krna
     console.log(response);
}

consumePromiseFive()
output me no error (print nahi hoga error; js WENT WRONG) BUT OTHER ERRROR DIKHAYAGA KI THRE IS NO CATCH BLOCK.if error = true in above promise . coz 


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} 

consumePromiseFive()



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
           console.log(response);
        const data = await response.json() // response .json ko bhi convert krne me time lagegaaaa
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}


two await to two then
getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

promise.all
yes this is also available, kuch reading aap b kro.




// yaha ye neeche wala code pehle execute hogaaa then #wla uper hogaaa


// all three are Asynschorus fn

// settimeout 
// fs.readfile
// Fetch 



 
///////////////
// why we use promis? why is it needed - because by using promises we dont need to call back . function as an agrgument in a function.
//promise fun tabhi true to then return krega jav uske andar ka asynchronus fun sahi run ho jayega
// 1. 
const fs = require( 'fs');

// my own synchronus function
function kirat(fn){
    fs.readFile("a.txt", "utf-8", function(err, data){
         fn(data);
    });
}
//callback fun to call
function onDone(data){
    console.log(data);
}
kirat(onDone)

2. with using promisse  
const fs = require('fs')
const { hasUncaughtExceptionCaptureCallback } = require('process')
//myown asynchronus functin
function kirat(){
    return new Promise(function(resolve){
         fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
         });
    })
}

//or
 

function onDone(data){
    console.log(data);
}

kirat().then(onDone);            // yaha promise ka insance return hogaaa ... resolve(data) bejha h to jo promise return kregaa vo us function ko call krega jo then use kreke likha h

// jaha kahi .then k andar function bhi h vahiii resolve(dta) data bhi usi function ko jayega as an input or usi function ko call krega

//using promise coz just to make pretty code and other benefits like prmise chaining

 function kirat(){
 return  new Promise(function(resolve){
              setTimeout(function(){
                resolve("foo");
              }, 1000)
  });

 }

  async function callback(){
       const d = await kirat();
    console.log(d); //Promise { 'foo' }
    console.log("radhe radhe");
}  


console.log(d); //Promise { <pending> } // d jo instance h promise claass kas o return hoke aya h av uspe hi ham func call cnack call krege isme ye object ki value chli jayegi

// Promise { <pending> }
// Promise { 'foo' }
// radhe radhe


let p = new Promise(function(resolve){
    resolve("hi trhe")
});

p.then(function(){
    console.log(p);
})



//async and await

function kirataSYNC(){
     return new Promise( function(resolve){
        setTimeout(() => {
            resolve("RADHE RADHE")
        }, 7000);
     })
}

async function callback(){
         let value = await kirataSYNC() // without await keyword value = primose pending
        console.log( "hi there")
         console.log(value);           //j ese hi ye line mile aysnc wali value .. ab iske baad ka sab time khtm hone k baad hi print hogaaaa..
         console.log("after asy nc");
}

callback()
console.log('JENNY PAGAL H');

// OUTPUT ME PEHLE YHI PRINT HOGA THEN 1 SEC BAAD ASYNCE FUCNTION KA PRINT HOGA
//     after 1 secd
// ouptut : hi there 
//          radhe radhe


//chaahe kitna bhi time badsa lo async fun me . output same hi hasUncaughtExceptionCaptureCallback

// JENNY PAGAL H
// hi there
// RADHE RADHE
// after asy nc



// Asynce me toh oj value return hoke aat i hpromsise h use store kr lete h and then  callback functom me s stored val ko pass kr dete h
//.then me vo khud pass krta h function me