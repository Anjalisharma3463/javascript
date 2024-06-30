class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    //static laga k ab ye function na child class kor naa parent class ko access krne degaa
// is method ya property koa access nahi dena chahte har object ko 
    static createId(){
        return `123`
    } 
}
//i  want ki har baar jese hi user bane to usko  unique user ID mil jaye using static
const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());