// When such a function is called, the rest parameter is bound to an array
// containing all further arguments. If there are other parameters before it, their
// values aren’t part of that array. When, as in min , it is the only parameter, it
// will hold all arguments.
// You can use a similar three-dot notation to call a function with an array of
// arguments.
const min = (...numbers) => { //takes the rest values
    let result = numbers[0]
    for (const number of numbers) {
        if(result > number)
        {
            result = number
        }
    }
    return result
}
let numbers = [22,33,4,6,8]
console.log(min(3,4,7,8,44,33,2,8,17,23))


console.log(...numbers , 7, 4) // spread the value