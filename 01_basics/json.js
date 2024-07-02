const users = {
    name: "anjali",
    age: 18,
    
}


// now i want to sent this objec data somewhere for that you need to convert this to sring..
const user = '{"name": "harkirat", "age":"18"}' // its like an object
console.log(user["name"]); // undefined coz now user is string not an object and object is like array


//JSON.parse // covnerted to object from string
//JSON.stringify // convert to string from object

const user1 = JSON.parse(user)
console.log(user1["name"]); //harkirat

const useral = {
    name: "harkirat",
    age: "13"
}


const finalstring = JSON.stringify(useral)
console.log(finalstring["name"]); // undefined