// Functions are the bread and butter of JavaScript programming. The concept
// of wrapping a piece of program in a value has many uses. It gives us a way
// to structure larger programs, to reduce repetition, to associate names with
// subprograms, and to isolate these subprograms from each other.

// defining a function 

const square = function(x)
{
    return x*x;
}

console.log(square(5))  // invoking a function


// return keyword is used to return a value from 
// function body if nothing is returned against return undefined is returned


// binding defined inside the function body are only used by function scope not outside it
// binding defined outside the function body is global and can be used anywhere

let x= 8
const changeValue = function() {
    let x = 10; 
    console.log(x) // print 10
} 
changeValue()

console.log(x) // return 8