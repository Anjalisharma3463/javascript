// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

 //PI property h jo input me di h not object
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

//getOwnPropertyDescriptor // ye object k baare me hidden properties batati h
// jese objects bhi iterator roka jaa skta h .property h

 console.log(descripter);
//  {
//     value: 3.141592653589793,
//     writable: false, // ye kabhi change nahii kr skte kyu ki ye property writable false kar rkhi h...
//     enumerable: false,
//     configurable: false
//   }

  
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
 
 
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    
})
 
//enumerable me input me jo property h vo iterative nahi hogi if enumerable is false.

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    // function print ho jayega nahi to but vo nahi chahiye hota . just key ant value hi chahiye hoti hh
}