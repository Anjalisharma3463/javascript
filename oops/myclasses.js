// ES6 k baad ki js use  kr rhe h
 
// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene // agar class ka syntax nahi hota to ese kaam hota in backend    c

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());







//
// Create an object
const car = {
    brand: 'Toyota',
    model: 'Corolla'
};

// Define a method directly on the object
car.startEngine = function() {
    console.log(`${this.brand} ${this.model} engine started.`);
};

// Use the method
car.startEngine(); // Output: Toyota Corolla engine started.




const a = Math.PI
console.log(a);

 const b = Object.getOwnPropertyDescriptor(Math, 'PI')
 console.log(b);


 const h = Object.getOwnPropertyDescriptor(Array , 'length')
 console.log(h);

 console.log(Object.getOwnPropertyNames(Math));
 console.log(Object.getPrototypeOf(Math));
//[Object: null prototype] {}

console.log(Object.getOwnPropertySymbols(Array));     //[ Symbol(Symbol.species) ]
