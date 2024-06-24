// const MyNumbers =  [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
// //usig map function , we can use it insted of for each
// const newnumsss = MyNumbers.map( (nums) => nums + 10)
 
// //console.log(newnumsss);
// // [
// //     11, 12, 13, 14, 15,
// //     16, 17, 18, 19, 20
// //   ]

// //agar scope { use} kro toh return kr dena otherwise udnefined dega

// //const newnumsssp = MyNumbers.map( (nums) => nums * 10).map( (nums) => nums = 1 )

// // const newnumsssp = MyNumbers
// // .map( (nums) => nums * 10) // yaha pehle num me 10 ka multipy ho gya
// // .map( (nums) => nums + 1 ) // aha num me 10 ka multiply hokar values num me ayega ab + 1 hoga like 1*10 + 1

// // console.log(newnumsssp);
// // [
// //     11, 21, 31, 41,  51,
// //     61, 71, 81, 91, 101
// //   ]

// const newnumsssp = MyNumbers
// .map( (nums) => nums * 10) // yaha pehle num me 10 ka multipy ho gya
// .map( (nums) => nums + 1 ) // aha num me 10 ka multiply hokar values num me ayega ab + 1 hoga like 1*10 + 1
// .filter ( ( nums) => nums>= 40)

// console.log(newnumsssp);

// // [
// //     41, 51,  61, 71,
// //     81, 91, 101
// //   ]




// Reduce method


const myNums = [1, 2 ,3]

const myTotal = myNums.reduce( function (accumulator, currentvalue) {
   console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
//    acc: 0 and currval: 1
//    acc: 1 and currval: 2
//    acc: 3 and currval: 3
   
   
   return accumulator + currentvalue
} , 0) // yaha 0 intialization value h jo ki acuumulator me ayegi ek baar starting me or accumultor ek sotring variavle h

//console.log(myTotal); //6


//using arrow funcion
const mytotal = myNums.reduce( (ACC, CURR) => (ACC + CURR), 0)
console.log(mytotal); //6



//SHOPPING EXAMPLE:

const shopping_cart =  [
    {
        itemname: " js course",
        price : 2999

    },
    {
        itemname: " python course",
        price : 3999

    },
    {
        itemname: " mobile app course",
        price : 5999

    },
    {
        itemname: " data scientist course",
        price : 12999

    }
]

const pricetopay = shopping_cart.reduce( (acc , item) => (acc + item.price), 0)

console.log(pricetopay); //25996


