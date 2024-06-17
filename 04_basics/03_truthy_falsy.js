// const useremail = "analishama#gmsil."
// const userarray = [] // default me empty array ko true maana h
// const strin = "" // default me empty string ko false maana h

// if(userarray){ // true h to enter 
//     console.log("get user array");
// }
// else{
//     console.log("don't have emain");
// }

// //falsy values
// false , 0 ,  -0 , BigInt 0n , "" , undefined, null, NaN (not a number)

// // true values
// "0" , 'false' , " " , [] , {}, function(){}

// if(userarray.length == 0){
//     console.log("array is empty");
// }// good practise

// const emptyobj = {}
// if(Object.keys(emptyobj).length == 0){
//  // Object.keys(emptyobj) array banake dedega keys ki
// console.log("object is empty");
// }

// //fale == 0 // true
// // false == '' //true
// // 0 == '' //true



//  Nullish coalescing Operator (??): null undefined
// let val1;
// val1 = 5 ?? 10 // 5 do hi value ayeg iisem ya to 5 ya 10
// // default jo pehle ata h vo asign 
// val2 = null ?? 10 // ya safety k liye 10 assign ho jaye
// val3 = undefined ?? 29 // 29 assign hogi for saf\ety

// val4 = null ? 10 ? 34 // 10 hogi first deffault ecept null for safety ignoring nul and undefined
// // console.log(val1); //last valu is 5//

// database se 2 values aa skti h to maybe undefined  ya null bhi aa skta h output vaha se

// value aayi h to first agar nahi ayi h to >?? second 

//ternary operator
//condition ? expression1 (true): expresstion2 (false)