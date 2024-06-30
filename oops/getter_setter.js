class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
        //_ underscore use kra h kyu ki dono jagah values set ho ri h ... constructor me and setter me
    }
}
//ab getter setter values ko override kr rhe h jo constructor k dvara set karii gayi hh..

//MAXIMUM call stack exceeded kyu ki constructor me bhi set krdi value or seetter me bh.. errror ayega toh.....

//agr getter define kra jh to setter bh honA CHAHiYE
const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);