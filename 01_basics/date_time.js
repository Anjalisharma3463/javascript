//Temporal is an new API (as gloabal object like math namespacee)

//DATES
let mydate = new Date()
// console.log(mydate); // 2024-03-24T17:22:35.0972z
// console.log(mydate.toString());// sun mar 24 2024 17:24:16 GMT+0000(COORDINATE UNIVERSL TIME)
// console.log(mydate.toDateString()); //sun mar 24 2024
// console.log(mydate.toISOString()); // 2024-02-24T17:28:430z
// console.log(mydate.toJSON()); // ""
// console.log(mydate.toLocaleDateString()); // 3/24/2024
// console.log(mydate.toLocaleString()); // 2/24/2024, 5:28:43 PM
// console.log(mydate.toLocaleTimeString()); //5:28:43 PM
// console.log(mydate.toTimeString());//5:28:43 GMT+0000 (COORDINATE UNIVERSAL TIME) 
// console.log(mydate.toUTCString()); // SUN, 24 mar 2024 17:28:43 GMT
// console.log(mydate.getTimezoneOffset()); //0
// console.log(mydate.getTimezoneOffset());// 0

// console.log(typeof mydate); //object

// let mycreateddate = new Date(2023 , 0 , 23)   //0 = jan
// console.log(mycreateddate.toDateString()); // mon jan 23 2023


// let mycreateddate1 = new Date(2023 , 0 , 23 , 5 , 3)   //0 = jan
// console.log(mycreateddate1.toLocaleDateString()); // 1/23/2023
// console.log(mycreateddate1.toLocaleString()); //1/23/2023, 5:03:00 AM


// let mycreateddate = new Date("2023-01-14")   //01 = jan in  
// console.log(mycreateddate.toLocaleString()); // 1/14/2023 , 12:00:00 AM
  

let mycreateddate = new Date("01-14-2023")   //0 = jan
// console.log(mycreateddate.toLocaleString()); //1/14/2023 12:00:00 AM  

let mytimestamp = Date.now()
console.log(mytimestamp); // 171130524545
console.log(mycreateddate.getTime());

console.log(Math.floor(Date.now()/1000)); // to get second

let newdate = new Date()
console.log(newdate); //2024-03-24T18:41:340Z
console.log(newdate.getMonth() +1); //3
console.log(newdate.getDate()); //24

//string interpulation
// `${newdate.getDay()}` and the time is
// console.log(`${newdate.getDate()} is new date today`);


//To customize order of date and time
newdate.toLocaleString('default', {
    // ctrl + space
    weekday: 'long',       
})