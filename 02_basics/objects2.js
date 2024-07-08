// //  // const tinderuser = new Object() // singleton - object
const tinderuser = {} // non-single object
 
 tinderuser.id = "2213abc"
 tinderuser.name = "anjali"
 tinderuser.isloggedIn = false

 console.log(tinderuser);

 const regularUser = {
    email: "somegaim2@gmal.com",
    fullname: {
          userfullname: {  
             firstname: "anjali",
            lastname: "sharma"
          }
    }
 }
// if full name me kchh values h to print kro like if conditions
//  console.log(regularUser.fullname?.userfullname);
//  if userfullname will be empty then output will be {}
//   ?.: The optional chaining operator checks if fullname is not null or undefined before trying to access userfullname. If fullname is null or undefined, the expression will short-circuit and return undefined without throwing an error.
//   userfullname: Accesses the userfullname property inside fullname.



  const obje1 = {1: "a", 2: "b"}
  const obje2 = {3: "a", 4: "b"}

//  const obje3 = { obje1, obje2}
//  console.log(obje3); //{ obje1: { '1': 'a', '2': 'b' }, obje2: { '3': 'b' } }

  // const obje3 = Object.assign({}, obje1 , obje2) // target is {} otheres are source but we can consider target obje1 also at first place
  // console.log(obje3); //{ '1': 'a', '2': 'b', '3': 'a', 4: 'b' }

// const obj3 = {...obje1, ...obje2} // spread liek array 
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users  =  [ 
    {
        id: 1,
        email: "h1@gmail.com"
    },

    {
        id: 2,
        email: "h2@gmail.com"
    },

    {
        id: 1,
        email: "h3@gmail.com"
    },
  ];

  


console.log(users[1].email); //h2@gmail.com
// console.log(tinderuser); //{ id: '2213abc', name: 'anjali', isloggedIn: false }

// console.log(Object.keys(tinderuser));
// console.log(Object.entries(tinderuser));  //[ [ 'id', '2213abc' ], [ 'name', 'anjali' ], [ 'isloggedIn', false ] ]
// console.log(Object.values(tinderuser));

// console.log(tinderuser.hasOwnProperty('islogged')); // false // ye prpoperty h ki nh
// //In JavaScript, hasOwnProperty is a method available on all objects. It is used to check whether an object has a property with a specific name (key).

//Key: Unique string identifier for a property within an object.
// Property: Combination of a key and its associated value within an object.
// Value: Data assigned to a property key within an object.


const course = {
  coursename: "jsinhindi",
  price: "999",
  course_teacher: "hitesh"
}

console.log(course.course_teacher); 
  //OR 
const {course_teacher } = course // course obje se value extract krni h
   //console.log(course_teacher); //hitesh 
 
const {course_teacher : ins} = course // course obje se value extract krni h
 console.log(ins); //..hitesh 

const {course : print} = course
console.log(print);

 //har baar props. propas. nah likhna ho to use curly braces like this 
 //const navbar = ({company}) => {
  //}
  //objects ko destructure krna
 const navbar = ( props.company) => {

 }
   
 navbar(company = "anjali" )


 //apna kaam kisi or pe dallna is called APIs
 /// values ko dena by backend khud dko .. pehle xml k format me atti th values by backend
 
 //json object ki h bass naam nahi h 
 //bass json me key and value both string hoti h
 {
  
  "name": "anjali",
  "coursename": "js in hndi",
 " price": "free"
 }
 //API K andar fetch method use krke url use kre k respones me koi data milega in json format
 // kahi baar apis array ki format me bhi milti h nor only n object
 
 //Randonuserme.api
//api k data (result ko smjhne k liye . we can use json formatter tools) 





 
function listAllProperties(Math) {
  let objectToInspect = Math;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

   console.log(result);
}

listAllProperties(Math)



