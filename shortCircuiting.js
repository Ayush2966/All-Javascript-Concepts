// The logical operators && and || handle values of different types in a peculiar
// way. They will convert the value on their left side to Boolean type in order
// to decide what to do, but depending on the operator and the result of that
// conversion, they will return either the original left-hand value or the right-
// hand value.

console.log("" || "hello") //  "" yields as false and "hello" be generated

console.log("aqua" || "hello") //  "aqua" yields as true and "aqua" be generated

console.log( NaN || "hello") //  NaN yields as false and "hello" be generated

