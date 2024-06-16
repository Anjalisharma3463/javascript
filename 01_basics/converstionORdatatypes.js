let score = 33
 let scores = "33abc"

// //kahi baar we dont know what data someone sent to us . is it string or number
// //so do this
 console.log(typeof score);
console.log(typeof(score));
 console.log(typeof scores);
 console.log(typeof(scores));


 let valueInNumber = Number(scores) // keep capital N capital n
console.log(typeof valueInNumber); //Number
 console.log(valueInNumber); // NAN

 

//ALL THESE CONVERSION LIKE BOOLEAR , NUMBER ETC. are datatypes

  let isloggedIn = "anjali"
 let bolleanIsloggedin = Boolean(isloggedIn)// keep capital B capital b
 console.log(bolleanIsloggedin); // true
       

         let somenumber = 33
         let stringnumber = String(somenumber) // keep capital S capital s
         console.log(stringnumber); // 33
         console.log(typeof(stringnumber)) // string

         // if you convert string to number and then print it and output will be NaN.
         // but if you convert a number to string and then print it and then output will be that value (int).
         