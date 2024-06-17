//  let a = 300

// //default value is false
// if(true) {
//     let a = 10
//     const b = 20
//     console.log("Inner: ", a); //10
 
// }

// //console.log(a); // error // anar schope k
// //console.log(b); // error
//  //console.log(c); // print 30


//  //var is global data type
//  //console.log(a); // 300

// // browser me aake scope alag hota h and node k through global schope alag h


function one(){
    const username = "Anjali"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }

    //console.log(website); // error not in scope . kyu ki ye to andar tha
    two()
}

//one()



if(true){
    const username = "hitesh"

    if(username === "hitesh"){
        const website = "  youtube"
        console.log(username + website);
    }
   /// console.log(website); // error
}

// console.log(username); errror



//
// &&&&&&&&&&&&& interesting )))))))))
const ans = addone(4)
function addone(value){
    return value + 1
}


console.log(ans);


addtwo(3) // error ata h expression me ese
//expression bhi h or function bhi
const addtwo = function(num){
    return num + 2;
}

 


