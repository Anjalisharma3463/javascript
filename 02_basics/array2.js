//MERGING ARRAY
const marvel_heroes = ["thor", "ironman" , "spiderman"]
const dc_heros = ["superman" , "flas", "batman"]

  marvel_heroes.push(dc_heros);
  //when use `${}` this so its [] array is cis howas as string. with no brackets..

  console.log(marvel_heroes); //array k ander array
console.log(`${marvel_heroes} is 1st way to merge `); // flas / 4th element is dc_heros array itself for marvel_heroes
 

// 2nd way to merge array// but not lke in array in array . only elements are merged wiyh no another array
// ths function concat need to return so need to store t n nwe array
 const allheros = marvel_heroes.concat(dc_heros)
console.log(`${allheros} is 2nd way to merge `); // 

//3rd way to merge
const allnewhero = [...marvel_heroes, ...dc_heros]
console.log(`${allnewhero} is 3rd way to merge `);
// this (concato spreado operator) will work same as concat 

// all only el ho gayi h arrayements to spread jh
const anotherarray = [1,2,3,[4,5,6], 7 , [ 6,7, [4,5]]]

const realanotherarray = anotherarray.flat(Infinity);
console.log(realanotherarray); // it will be nowan flat simple array like this [1,2,3,4,5, 6 , 7 , 6 ,7 ,4 , 5]

console.log(Array.isArray("hitesh")) //no array // false

console.log(Array.from({name: "Anjali"})); // empty array []
//Example of Array-like Object
// An array-like object has a length property and indexed elements, like:
 
// let arrayLike = {0: 'a', 1: 'b', length: 2};
// let array = Array.from(arrayLike);
// console.log(array); // Output: ["a", "b"]
// Example of Iterable Object
// An iterable object is one that can be iterated over, such as a string:
 

// let iterable = "Anjali";
// let array = Array.from(iterable);
// console.log(array); // Output: ["A", "n", "j", "a", "l", "i"]
// Why Your Example Results in an Empty Array
 
// console.log(Array.from({name: "Anjali"})); // Output: []
// The object {name: "Anjali"}:

// Lacks a length property.
// Is not iterable.

 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.from("hitesh"));//convsert this to array if not
console.log(Array.of(score1, score2 , score3)); // now array bann gayii

