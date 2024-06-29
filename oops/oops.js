//jese c++ orj ava me classes basic unit hoti h yaha ye h object

//object literal . object banana 
 const user = {
    username: "anjali",
    loginCount: 8,
    signedIn: true,


    getuserDetails: function(){
            // console.log("got user details");  
             console.log(`username: ${this.username}`); // undefined ,=> bahar se saaman lena h toh..
              console.log(this); // current context..  //puraa ye object aa jayega
            }
     }

 console.log(user.username);
 console.log(user.getuserDetails());
  console.log(this); // { }

// Har baar user ko banana possible nahi h . we use constructor function
//new keywoed hi constructor function h. it allows ki ek hi object literal se multiple instances bana ske
// actually ek new context banane k liye

// const promiseone = new promise()
//     const date = new Date() // new keyword is for construction of context . Thsi is called constructor function

    function user(username, loginCount, isloggedin){
        this.username = username
        this.loginCount = loginCount
        this.isloggedin = isloggedin

        return this // implicitly return hota hi h
    }


//     const userone = user('ANJALI', 12, true)
//   const usertwo = user('chaiorcode', 11 , false) // ye uper waalek ki values ko override kar degaa thats why we use new keyword 
//console.log(userone);

// ye ban gaye difffert users of same properties and methods
  const userone = new user('ANJALI', 12, true)
  const usertwo = new user('chaiorcode', 11 , false) 
    console.log(userone);
    console.log(userone.constructor);
    console.log(usertwo);

    //new keyword use krne h ek empty new object create hota h . {} empety new object ko instance bola jata h
    //constructor function (new ) call hota h cozof new keyword se
    //this keyword me saare vallues inject ho jata history
    // 4th step me mil jayege


    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    console.log(userone);
    console.log(usertwo);
    
    // output:- 
         