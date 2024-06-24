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


