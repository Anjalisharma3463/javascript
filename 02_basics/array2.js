//MERGING ARRAY
const marvel_heroes = ["thor", "ironman" , "spiderman"]
const dc_heros = ["superman" , "flas", "batman"]

// marvel_heroes.push(dc_heros);
// console.log(marvel_heroes); //array k ander array
// console.log(marvel_heroes[3][1]); // flas

//2nd way to merge array// but not lke in array in array . only elements are merged wiyh no another array
//ths function concat need to return so need to store t n nwe array
//  const allheros = marvel_heroes.concat(dc_heros)
// console.log(allheros); // 

//3rd way to merge
const allnewhero = [...marvel_heroes, ...dc_heros]
console.log(allnewhero); 
// this (concato spreado operator) will work same as concat 

// all only el ho gayi h arrayements to spread jh
const anotherarray = [1,2,3,[4,5,6], 7 , [ 6,7, [4,5]]]

const realanotherarray = anotherarray.flat(Infinity);
console.log(realanotherarray);

console.log(Array.isArray("hitesh")) //no array // false
console.log(Array.from("hitesh"));//convsert this to array if not
console.log(Array.from({name: "Anjali"})); // empty array []


////////////
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3)); // now array bann gayii

