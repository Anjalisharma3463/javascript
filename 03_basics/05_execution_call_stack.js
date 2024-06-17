//JAVASCRIPT EXECUTION CONTEXT

//GLOABAL EXECUTION CONTEXT (this me kra ata h first)
//FUNCTION EXECUTION CONTEXT 
//EVAL EXECUTION CONTEXT


// 1st - memory creation phase(for variables n all)
// 2nd - execution phase (+ - execution0)

// code:-
let val1  = 10;
let val2 = 34
function addnum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1 , val2)
let result2 = addnum(3 , 4)


// execution kese hota h in memory

// 1st memory creation phase me of this code:;

// val1 = undefined allocate hoti h
// val2 = undefined allocate hoti h
// addnum = defination of function jaati h 
// result1 = undefined
// result2 = undefined

// 2nd execution phase.
// val1 = 10
// val2 = 10
// addnum --> Box ((memory creation phase + execution phase for this function )new variable environment + execution thread)

// In this box (memory phase ---> val1 = undefined , val2 = undefined , total = undefined) ( execution contect for the boz--> num1 = 10 , num2 = 5 , total = 15 , -> jaha se call kra tha vaha return hoga it means global execution context me .. after execution of this boz . it will be deleted auto)

// Again box banega for addnum(3 , 4) next function k liye for result 2 global execution context


//CALL STACK

// global execution context to hogaa hi 
// we can code in browswer in source sniippet..