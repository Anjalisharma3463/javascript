// singleton
// singleton
Object.create //(constuctor) 


// object literals
const mysym = Symbol("key1")

const JsUser = {
    name: "anjali",
   mysym: "mykey1", // string type
   [mysym]: "mykey1", //symbol type //it iwill show up in when you print object lke log(jsuser);
    age: 18,
    location: "jaipur",
    email : "anjalisharma@google.com",
    islogedin : false,
    lastlogindays : ["monday", "sat"]

}
// console.log(JsUser.email); //1st
// console.log(JsUser["email"]); // 2nd way~
// console.log(JsUser["name"]); //only one way using square notation
// console.log(JsUser.mysym); // using symbol as key //mykey1
// console.log(JsUser[mysym]); //myket . by iti s goot syntax
// console.log( typeof(JsUser.mysym)); // string type
// console.log(typeof(JsUser[mysym]));//string


    JsUser.email =  "hatgpt@GamepadHapticActuator.com"
     Object.freeze(JsUser) // is line k baad no change n this object
    JsUser.email = "anjaswadkjgldgld"
     console.log(JsUser);

  JsUser.greeting = function(){
    console.log("hello js user;");
  }  
  console.log(JsUser.greeting); // undefinded when it was freeze but then if not the n output is ]functon(anoynyjios0)]
 //funtion is not eecuted but   
//  //or
  console.log(JsUser.greeting()); // not a function now for now coz t was a freezeobject js user

  // The code assigns a function to the greeting property of the JsUser object.
  // After this assignment, greeting becomes a method of the JsUser object.
  JsUser.greeting = function(){
    console.log( `hello this is js user, ${this.name}`);
  }  


  JsUser.greetingtwo = function(){
    console.log("hello js user;");
  }  

  console.log(JsUser.greeting());
  console.log(JsUser.greetingtwo());




//merging new property in objects

const obj = {
  key1: "value1",
  age: "34"
}

let newobj = Object.assign( {} , obj, {name : "anjali"})
console.log(newobj);