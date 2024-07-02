
//
// follow  documentation to learn javascipt in detial....##########
console.log(4+4);
//mdn mozilla
//original documentation - tc39.es ecma

console.log("radhe");


         //FUNCTION AS AN INPUT
          // callback
         // function sum(num1, num2, fnTOcall){
         //    let result = num1 + num2
         //    fnTOcall(result);
         //   }
  
         //   function displayResult(data){
         //    console.log(data);
         //   }
  
         //   const ans = sum(1 , 2 , displayResult)




    
           ////    // 
   
    
    
//      function arith(a , b , fnTOcall){
//        let result = fnTOcall(a , b)
//        console.log(`${fnTOcall} : ${result}`);
//     }
// //  output::::: ____    function sum (a , b ){
// //       return a + b;
// //     } : 6
// // function min(a , b ){
// //       return a - b;
// //     } : 2

// arith(4 , 2 , sum)
// arith(4, 2 , min)

// function sum (a , b ){
//    return a + b;
//  }
//  function min(a , b ){
//    return a - b;
//  }
     
const str = "             helloworld anjali       "
console.log(str.replace("world", "js")); // 


const words = str.split(" ")
  console.log(words); //[ 'hello', 'world' ]


  const str1 = "harkirt, 1 , anali"
  const words1 = str1.split(",")

console.log(words1); //[ 'harkirt', ' 1 ', ' anali' ]

const words2 = str.trim()
console.log(words2); //helloworld anjali

console.log(parseInt("dkdfjdkfjkd42dfgjgfk")); // NAN
console.log(parseInt("23dfkgklfgkfd")); //23
console.log(parseInt("kfgjdlfg233")); //nan



const arre = [1, 2, 3]
arre.push(2)
arre.pop(2)
arre.shift(4)         // shift unshift from front
arre.unshift(3)           // push pop from rear



function logthing(str){
  console.log(str);
}
arre.forEach(logthing) // 1  2 3


// Node
// npm install
// cd 01 - Js 
// npx jest ./foldername/filename