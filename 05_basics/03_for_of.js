//for of

//["" ,"" ]
// [{} , {}]

// const array = [1 , 2 ,3, 4 , 5]

// // for ( const iterator of object) {
    
// // }

// for (const num of array) {
//     console.log(num);
// }

// const greetings = "hellow world!"

// for(const greet of greetings){
//     console.log(`each char is  ${greet}`);
// }


//Maps
const map = new Map() // it will store only unique values
map.set('IN' , "India")
map.set('USA' , "unites states of America")

map.set('IN' , "India")
// console.log(map);


//  for (const key of map) {
//     console.log(key);
//  }
//  [ 'IN', 'India' ]
// [ 'USA', 'unites states of America' ]

//Not executing nothibng with no error using for in on map
for (const key in map) {
   console.log(key);
   console.log(map[key]);
}


for (const [key , value] of map) {
    console.log(key, ':-' , value);
 }
 IN :- India
 USA :- unites states of America

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const [key , value] of myObject) {
    console.log(key, ':-' , value);
}
// //object can't be iterable like this by using for of...
