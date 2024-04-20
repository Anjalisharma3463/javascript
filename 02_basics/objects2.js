 // const tinderuser = new Object() // singleton - object
const tinderuser = {} // non-single object
 
 tinderuser.id = "2213abc"
 tinderuser.name = "anjali"
 tinderuser.isloggedIn = false

 // console.log(tinderuser);

 const regularUser = {
    email: "somegaim2@gmal.com",
    fullname: {
          userfullname: {
            firstname: "anjali",
            lastname: "sharma"
          }
    }
 }
//if full name me kchh values h to print kro like if conditions
  // console.log(regularUser.fullname?.userfullname);

//   const obje1 = {1: "a", 2: "b"}
//   const obje2 = {3: "a", 4: "b"}

//  // const obje3 = { obje1, obje2}
//  // console.log(obje3); //{ obje1: { '1': 'a', '2': 'b' }, obje2: { '3': 'b' } }

//   const obje3 = Object.assign({}, obje1 , obje2) // target is {} otheres are source but we can consider target obje1 also at first place
//   console.log(obje3); //{ '1': 'a', '2': 'b', '3': 'a', 4: 'b' }

// const obj3 = {...obje1, ...obje2} // spread liek array 
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users  = {
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
}
users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));