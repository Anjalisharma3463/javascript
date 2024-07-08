// const coding = ["js" , "ruby" , "java"]

// const values = coding.forEach( (item) => {
//     console.log(item);    
//     // js
//     // ruby
//     // java
//     return item;  // koi bhi value return nahi karegaa

//for each values return anhi krta h
// }
// )

// console.log(values); //undefined

//for - in loop shouldbe used o object only not on array
// for =--of and for loop can be used for Array....
//While for...in iterates over property names, for...of iterates over property values:

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7


// const obj = { foo: 1, bar: 2 };

// for (const [key, val] of Object.entries(obj)) {
//   console.log(key, val);
// }
// // "foo" 1
// // "bar" 2


// Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

 //Function \Expression
// const square = function (number) {
//   return number * number;
// };

// console.log(square(4)); // 16

// In function Expression, we can also give name to the function
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3)); // 6
  

  function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }

  map(cube , 2)
  map.call(cube , 2)
const myNums = [1 , 2 ,3 , 4 , 5 , 6 , 7 ,8 ,9,10]

const newnums = myNums.filter( (num) =>   {num > 4 })
//abhi using {} in fucntion , it will print [] so use return num > 4 instead of {num > 4}
// not using { } but just a simple line like this :->   const newnums = myNums.filter( (num) => num > 4 ) , it will print arra [ 5, 6 , 7 ,8 9, 10]
//abhi using ( ) in fucntion , it will print  [ 5, 6, 7, 8, 9, 10 ]

// console.log(newnums);

const newnumss = []

myNums.forEach( (num) => {
    if(num > 4){
        newnumss.push(num)
    }
})

console.log(newnumss); // [ 5, 6, 7, 8, 9, 10 ]


const books = [
    {title: 'book one' , genre: 'friction', publish: 1981, edition: 1916},
    {title: 'book two' , genre: 'science', publish: 2323, edition: 2034},

];
console.log(2+3);

const userBooks = books.filter( (bk) => bk.genre == 'friction')
console.log(userBooks);

//OUTPUT:-
// [
//     {
//       title: 'book one',
//       genre: 'friction',
//       publish: 1981,
//       edition: 1916
//     }
//   ]

const userBooks1 = books.filter( (bk) => { return bk.publish >= 1000 && bk.genre == 'science'})
console.log(userBooks1); //[]

// output:--
// {
//     title: 'book one',
//     genre: 'friction',
//     publish: 1981,
//     edition: 1916
//   },
//   { title: 'book two', genre: 'science', publish: 2323, edition: 2034 }
// ]


