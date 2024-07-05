 //function (namefuncton) k andar function (callme). To ab this kisko refer krna h kese pata chlega for call me function.

//  global executioin context jab window ka access hoto h to vo this  window object ko refer krtha h...    
//  node me window ka access h nahi to vo empty object ata h  
 
function SetUsername(username){
    //complex DB calls
    this.username = username //ye this to gayab ho hayega eecution k baad or reference value to store hi nhi kari
    console.log("called");
}

function createUser(username, email, password){
   // SetUsername(username) // actually call hua but reference hold nahi kara.........baabhi baass reference  gaya h call nahii huaaa......
 
     //SetUsername.call(username) // but abhi bhi object me koi bhi change nahi hoga..reference holde krne k liye 
     SetUsername.call(this, username) //to yaaha se hi iska this bejnh diya
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
console.log("radhe radhe");