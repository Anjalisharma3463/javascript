//ARRAY
// resizable and mix of data types. and can be array also inside array
// make shallow copies.. means same reference point of al the object means.

const arr1 = new Array(1, 2, 3);
const arr2 = Array(4, 5,   4);
const arr3 = [3, 4, 5];

console.log(arr1);
console.log(arr2);
console.log(arr3);
// [ 1, 2, 3 ]
// [ 4, 5, 4 ]
// [ 3, 4, 5 ]

const myarr1 = [0, 1, 2, 3 , 4 , 5]
const myarr2 = [0 , 1 , 2 , "Array", true]
const myHeroes = ["hero", "ssrk" ]
const myarr3 = new Array(1, 2, 3, 4)
 //console.log(myarr2[3]);


 const fish = ["Lion", , "Angel"];
 ////////// [ 'Lion', <1 empty item>, 'Angel' ]
//  Note that the second item is "empty", which is not exactly the same as the actual undefined value. When using array-traversing methods like Array.prototype.map, empty slots are skipped. However, index-accessing fish[1] still returns undefined.


// In the following example, the length of the array is four, and myList[1] and myList[3] are missing. Only the last comma is ignored.
// Copy to Clipboard
// const myList = ["home", , "school", ,];





// //array methods

// myarr1.push(6)
// console.log(myarr1);

// myarr1.push(7)
// console.log(myarr1);
// myarr1.pop()
// console.log(myarr1);

// myarr1.unshift(0) // 0 s inserted in start at frst placce in array..
// console.log(myarr1);
// myarr1.shift() // it will remove 0 from starting that we ahve added or not added  but it will remove it
// console.log(myarr1);

// console.log(myarr1.includes(2)); // true coz 2 is included//
// console.log(myarr1.indexOf(2)); // 2 index for value 2

// const newarr = myarr1.join() // array to string
// console.log(myarr1); // [0,1,2,3,4,5]
// console.log(newarr); // 0, 1,2,3,4,5 convert to string
// console.log(typeof(newarr)); // string


//Slice  || splice methods

console.log("A ", myarr1); //output [0,1,2,3,4,5]

// In slice , here below last index will not be included in output from starting and using slice will not change original array also..
const myn1 = myarr1.slice(1 , 3)  
console.log(myn1); // output [ 1 , 2] ,, starting from 1st index and not included 3rd index
console.log("B ", myarr1); // output [0,1,2,3,4,5]

// In splice , here below last index will be included in output from starting and using splice will change original array also..
const myn2 = myarr1.splice(1, 3)  
console.log(myn2); // output [1,2,3 ] // 
console.log("C " , myarr1); // output [0 , 4 , 5]


