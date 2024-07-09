//function along with its lexical scope bundeled together forms a closure


// A closure is a function combined with its lexical scope. In simpler terms, a closure gives you access to an outer function's variables from an inner function, even after the outer function has finished executing.


function x(){
    var a = 7;
    function y( ) {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x()

// Jab y return hoga vaha se to z me store ho jayega and y ne a variable ko still yaad rakha h even x fun is vanished. This is closure.
//Since a was updated to 100 before y was returned, y retains access to a with its updated value, resulting in 100 .

console.log(z);


z(); // 100


// Closure: The inner function y forms a closure with the outer function x. This means y retains access to the variables of x even after x has finished executing.
// Lexical Scope: The function y has access to the variable a because it was defined within the scope of x.