const  name = "Anjlai"
const repocount = 50
// console.log(name + repocount + "value") // not good practise and old way
//console.log(`my name is ${name} and my repocount is  ${repocount} `); // modern maw and i can mention or used functions also like ${name.toupper(){

//new way to create String
 const gamename = new String('hitesh sh') // string is object not array
// console.log(gamename[0]);
// console.log(gamename.__proto__); // {} object

// console.log(gamename.length); // some methods are in proto
// console.log(gamename.toUpperCase()); 
// console.log(gamename.charAt(2)); //j
// console.log(gamename.indexOf('j')); // 2

// const newString = gamename.substring(0, 3); // 0th index to 2th
// console.log(newString); // anj

// const anstring = gamename.slice(-8, 4) 
// console.log(anstring);

// const newstringone = "  anjali  "
// console.log(newstringone);
// console.log(newstringone.trim()); // remove spaces

const url = "https://anjali.com%20sharma" //%20 is auto added for space

  console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh')); //if found the ntrue otherwise false

console.log(gamename.split('-'));

 



