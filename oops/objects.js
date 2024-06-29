function multipleBy5(num){
      this.num = num // ye nahi dikhega {} me coz we need to take reference first 
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); // {}

//isse ye smjha ki actually me js me har cheej object hoti h


function createUser(username, score){
    this.username = username
    this.score = score
    
}
createUser('anjali', 10)

//methods
createUser.prototype.increment = function(){
    this.score++ // currenct object jo isko call karega to uska badana score
}
console.log(createUser.prototype);
//methods
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25) // ye jo bhi propertites add kri th vo new se hi add hogi
const tea = createUser("tea", 250)
console.log(`here: ${chai.prototype}`); // undefined
chai.printMe();


//myarray.prototype.map() iski jagah myarray.map() likh skte ho 
// /*

//Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// */