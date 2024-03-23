// const score = 900
// console.log(score);

// const balance = new Number(100) //BY Number , it is definately a number
// console.log(balance); // Number {100}
// console.log(balance.toString()); // 100 now it is string
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00 precision value

const otherNumber = 1123.9485

// console.log(otherNumber.toPrecision(3)); //23.9 for 23.9484 number
// console.log(otherNumber.toPrecision(3));//124 for 123.9484 number
// console.log(otherNumber.toPrecision(3));//1.12e+3 for 1123.9484

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000 according to US
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 accord to india

//++++++++++++++++maths**********************

// console.log(Math); //default h like Number // object [Math] {} // object ye in whic hthere are so many funcctions
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.6)); ///5
// console.log(Math.floor(4.2)); //4
// console.log(Math.min(4,564,3)); //3
console.log(Math.random()); // 0.307011999920.. random vlaues b/w 0 to 1
console.log(Math.random()*10); //right shift ho gya now it is 1.223..
console.log(Math.random())*10+1; // now after adding 1, value will definately be > 0
console.log((Math.random()*10) + 1); // now here precedence is conffiremed
console.log(Math.floor(Math.random()*10)+1); // 4 suupose if ans is 0.4 and random will give 0 that's why to ignore this  i added 1
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // so that 0 naa aaye ..
// here i want min no. 10 . min no. is i want 10 so  i added min
// mac - min gives range







