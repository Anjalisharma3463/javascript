const  name = "Anjlai"
const repocount = 50
// console.log(name + repocount + "value") // not good practise and old way
//console.log(`my name is ${name} and my repocount is  ${repocount} `); // modern maw and i can mention or used functions also like ${name.toupper(){

//new way to create String
const gamename = new String('anjali') // string is object not array
// console.log(gamename[0]);
// console.log(gamename.__proto__); // {} object

// console.log(gamename.length); // some methods are in proto
// console.log(gamename.toUpperCase()); 
// console.log(gamename.charAt(2)); //j
// console.log(gamename.indexOf('j')); // 2

const newString = gamename.substring(0, 3); // 0th index to 2th
console.log(newString); // anj

const anstring = gamename.slice(-8 , 4) 
console.log(anstring);
