//ARRAY
// resizable and mix of data types. and can be array also inside array
// make shallow copies.. means same reference point of al the object means.



const myarr1 = [0, 1, 2, 3 , 4 , 5]
const myarr2 = [0 , 1 , 2 , "Array", true]
const myHeroes = ["hero", "ssrk", "naagraj"]
const myarr3 = new Array(1, 2, 3, 4)
// console.log(myarr2[3]);


//array methods

// myarr1.push(6)
// console.log(myarr1);

// myarr1.push(7)
// console.log(myarr1);
// myarr1.pop()
// console.log(myarr1);

// myarr1.unshift(0) // 0 s inserted in start at frst placce in array..
// myarr1.shift() // it will remove 0 from starting that we ahve added or not added  but it will remove it
// console.log(myarr1);

// console.log(myarr1.includes(2)); // true coz 2 is included//
// console.log(myarr1.indexOf(2)); // 2 index for value 2

// const newarr = myarr1.join()
// console.log(myarr1); // [0,1,2,3,4,5]
// console.log(newarr); // 0, 1,2,3,4,5 convert to string
// console.log(typeof(newarr)); // string


//Slice  || splice methods

console.log("A ", myarr1); //output [0,1,2,3,4,5]

// In splice , here below last index will not be included in output from starting and using splice will not change original array also..
const myn1 = myarr1.slice(1 , 3)  
console.log(myn1); // output [ 1 , 2] ,, starting from 1st index and not included 3rd index
console.log("B ", myarr1); // output [0,1,2,3,4,5]

// In splice , here below last index will be included in output from starting and using splice will change original array also..
const myn2 = myarr1.splice(1, 3)  
console.log(myn2); // output [1,2,3 ] // 
console.log("C " , myarr1); // output [0 , 4 , 5]


