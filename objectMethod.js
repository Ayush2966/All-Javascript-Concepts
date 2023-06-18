// Usually a method needs to do something with the object it was called on.
// When a function is called as a method—looked up as a property and immedi-
// ately called, as in object.method() —the binding called this in its body auto-
// matically points at the object that it was called on.

function speak() {
    console.log(`my name is ${this.name} and i am ${this.age} years old`)
}

let person1 = {name: "abdul" , age : "22", speak}
let person2 = {name: "ali" , age : "19", speak}

person1.speak()
person2.speak()

function talk(line)
{
    console.log(`the ${this.color} rabbit says : ${line}`)
}

let whiteRabbit = { color: "white",talk}
let brownRabbit = { color: "brown",talk}

whiteRabbit.talk("hello i am a white rabbit")
brownRabbit.talk("hello i am a brown rabbit")

// Since each function has its own this binding, whose value depends on the
// way it is called, you cannot refer to the this of the wrapping scope in a regular
// function defined with the function keyword.
// Arrow functions are different—they do not bind their own this but can see
// the this binding of the scope around them. Thus, you can do something like
// the following code, which references this from inside a local function:
function normalize() {
    console.log(this)
}
normalize.call({coords : [1,2,3], length: 5})

const normalize2 = (value) => {
    let value = 2
    console.log(this.value,value)
}

normalize2.call({coords : [1,2,3], length: 5})

