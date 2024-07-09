const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  
//   An object like this is referred to as an object literal — we've literally written out the object contents as we've come to create it.
// In JavaScript, an object literal is a way to define an object using a simple, concise syntax. It allows you to create objects and assign properties and methods to them in a straightforward manner.

// Here, the const person is an example of an object literal.



const person = {
    name: ["Bob", "Smith"],
  };

  person.age;
  person.name.first;
  

  const person = {
    name: {
      first: "Bob",
      last: "Smith",
    },
    // …
  };
  
  person["age"];
person["name"]["first"];


//setting 
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};



// //THIS
// const person1 = {
//     name: "Chris",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };
  
//   const person2 = {
//     name: "Deepti",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };
  
  //person1.introduceSelf()
  //outputs "Hi! I'm Chris.

  // e this keyword typically refers to the current object the code is being executed in.

  // constructor function to create as many  object as i want to create...

  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }

  
  const salva = new createPerson("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."


 


 
 