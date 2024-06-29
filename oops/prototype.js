let myName = "hitesh     "
let mychannel = "chai     "

// console.log(myName.trueLength);
console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`); // this for this key spiderman
    }
}

//agar koi power object k pass h to baaki sab k paas hi aaa ayegi

// heroPower.prototype.hitesh = function(){
//     console.log(`hello`);
// }
//                 //OR
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
// Link krne k liye prototype h for inheritence.
//agar power array ko hi di to ye object(heropower) k pass nahi jaegi but haa array k pass to jaegi hi (myHeroes) (see in diag. below)
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh() // yes 
myHeros.hitesh() // yes
myHeros.heyHitesh() //yes
heroPower.heyHitesh() // no




// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // or ese neeche jo kra h vo bhi another way h
}
//another way. but old way
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);  // chaiorcode (anotherusername k andar reference chaiorcode hi tha)
    console.log(`${this.name}`); // undefined
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

 
//(Array bhi object hii h . js me har ek cheej object hiii h)


              
            // function
            //     |
            //    \/
// Array ---> object -----> null  (object ka bhi koi parent nahi h)
//             /\   
//             |
//           string