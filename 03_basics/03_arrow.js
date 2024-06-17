const user = {
    username: "anjali",
    price: 88,
  
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);

    }
    
}

// user.welcomeMessage()

// user.username = "Arjun"
// user.welcomeMessage()

// console.log(this); // {}

// node environment me kyu ki global me koi context nahi h
// but browser me window dikhte h .. n
// browser me engine window h // engine ko node s banaya . deno .s banaya 
// bun naam diyia enginga ko . node . deno naam diya engine lko



// function chai( ){
//     console.log(this)
// }
// chai()
// // bhot kuch obect n all show hoga

// function chai( ){
//     console.log(this.username) // undefined
// }
// chai()

const chai3   = function(naam) {
    let ans = "hitesh"
    // console.log(this.naam);  underfined
//    console.log(this); empty {}
}

// function ki jagah arrow use bass
const chai =  () => {
    let username = "hitesh"
    // console.log(this.username);  underfined
//    console.log(this); empty {}
}



//ARROW FUNCTION... 
const addthree = (num1 , num2) => {
    return num1* num2
}
// OR
 // implicit return or 
const addcthree = (num1 , num2) =>   num1+num2;  
//OR
const addctshree = (num1 , num2) =>   (num1+num2); 
 // or object returning 
 const addr = (num1, num2 ) => ({username: "hitesh"}) // {username: "hitesh"}
// or
const addre = (num1 , num2) => (username: "hitesh") // undefined



const myarray = [2 , 3 , 4 ,5 ,5]
myarray.forEach(()=> {})
myarray.forEach(()=>  ())
myarray.forEach( function () {} )