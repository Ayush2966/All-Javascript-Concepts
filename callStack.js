// The way control flows through functions is somewhat involved. Let’s take a
// closer look at it. Here is a simple program that makes a few function calls:

const greet = (name) => console.log(`hello ${name}`)
greet("Abdul")

console.log("Bye")

// The place where the computer stores this context is the call stack. Every
// time a function is called, the current context is stored on top of this stack.

function chicken() {
    return egg()
}
function egg() {
    return chicken()
}
console.log(chicken() + "came first...")

// maximun call stack achieved