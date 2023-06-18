// It is perfectly okay for a function to call itself, as long as it doesn’t do it so
// often that it overflows the stack. A function that calls itself is called recursive.
// Recursion allows some functions to be written in a different style.

function power(base , exponent) {
    if (exponent == 0) {
        return 1
    }
    else{
        return base * power(base,exponent-1)
    }
}

console.log(power(2,4))

// Consider this puzzle: by starting from the number 1 and repeatedly either
// adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
// would you write a function that, given a number, tries to find a sequence of
// such additions and multiplications that produces that number?

function findSequence(target){
    function find(current,sequence){
        if(current === target){
            return sequence
        }
        else if( current >target)
        {
            return null
            }
        else {
            return  find(current + 5 , `(${sequence} + 5)`)|| find(current*3 , `(${sequence} *3)`) 
                }
            }
    return find(1,"1")
}

console.log(findSequence(24))