// Conditional execution is created with the if else keyword in JavaScript. In the
// simple case, we want some code to be executed if, and only if, a certain condition
// holds. We might, for example, want to show the square of the input only if the
// input is actually a number.

let number = Number(prompt("enter a number"))

if(number >= 100){
    console.log("higher then 100")
}
else if (number <= 100){
   console.log("lower then 100")
}
else {
    console.log("hellooo")
}