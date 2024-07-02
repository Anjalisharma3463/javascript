// while (condition) {
    
// }


// let index = 0
// while (index <= 10) {
//     console.log(index);
//     index++;
// }

// let score = 11
// do{
//      console.log(`score is ${score}`);
//      score++
// }while( score <= 10)


//Importing  library fs for filesystem
const fs = require( "fs");
// filesystem module

fs.readFile( " a.txt",  "utf-8 ", function(err, data) {
    console.log(data);
})  
//ye ek hi baar chlegaaa fs. read File.. fhir neeche ka pura code khtm krke yaha paspas ayega read krne . this is called asynchrounus...

console.log("hi thre");

let a = 0;

for(let i = 0; i < 1000000000; i++){
    a++;
}

console.log("hi thre 2");

//there are some function which asyncronus ufnction L: - fs.readfile and setTimout()
