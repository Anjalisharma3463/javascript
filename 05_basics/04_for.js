const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by aply"
}

  for (const key in myObject) {
        console.log(key);
  }

//   js
// cpp
// rb
// swift

for (const key in myObject) {
     console.log(myObject[key]);
}
// javascript
// c++
// ruby
// swift by aply

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py"]

for (const key in programming) {
     console.log(key); // 0 , 1 , 2
}

