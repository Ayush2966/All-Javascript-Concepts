// Looping control flow allows us to go back to some point in the program where
// we were before and repeat it with our current program state. If we combine
// this with a binding that counts, we can do something like this:

// while loop 

let number = 0
let sum = 0;
 
while(number <= 10)
{   
    sum+=number
    number++
}
console.log(sum)

// do while 

let yourAge = 0;

do{
   yourAge = Number(prompt("enter your age "))
}while(yourAge <= 18)

console.log(yourAge)

