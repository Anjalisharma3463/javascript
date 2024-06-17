const coding = ["js", "ruby", "python"]

// array.forEach(element => {
    
// });

//Array.forEach( function( ) {}) 
// here function (each value in array ) {definaitng code execution } 
// this function is in for each loop on array 
//call back h syntax for this lloop iso thre is no name for function

coding.forEach( function  (item) {
   console.log(item);
})

// js
// ruby
// python


//anothr way to write funciotn i mean write arrow function for this loop
coding.forEach( (item) => {
    console.log(item);
})
// js
// ruby
// python


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


coding.forEach((item, index , array) => {
    console.log(item , index , array);
})
// js 0 [ 'js', 'ruby', 'python' ]
// ruby 1 [ 'js', 'ruby', 'python' ]
// python 2 [ 'js', 'ruby', 'python' ]

//iterating on obects
const mycoding =  [
    {
    languagename: "javascript",
    languagefilename: "js"
    },

    {
     languagename: "kava",
      languagefilename: "js"
     },

     {
        languagename: "python",
         languagefilename: "py"
     }
 
    ]

    mycoding.forEach ((item) => {
        console.log(item.languagename);
    })
