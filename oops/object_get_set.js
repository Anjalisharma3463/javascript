//object se getter setter

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
// underscore mtlb ek private property define kr rhe h . ye normal users k liye nahiiiii h

//Using factory functon (object.create) insted of constructve function (new) for creating object.

const tea = Object.create(User)
console.log(tea.email); //yes it is accessible 
// i know uper underscore h or input me  nahii.