
// A prototype is another object that is used as a fallback
// source of properties
let str = {};

console.log(str.toString)
console.log(str.toString())

console.log(Object.getPrototypeOf({}) == Object.prototype)
console.log(Object.getPrototypeOf(Math.max))

// When an object gets a request for a property that it does
// not have, its prototype will be searched for the property, then the prototype’s
// prototype, and so on.
// So who is the prototype of that empty object? It is the great ancestral
// prototype, the entity behind almost all objects, Object.prototype .

let protoRabbit = {
    speak(line)
    {
        console.log(`The ${this.type} rabbit says ${line}`)
    }
}

let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "killer"
killerRabbit.speak("helloooooooooooooooooooooooooo!!!!")

console.log(Object.getPrototypeOf(killerRabbit))

// The “proto” rabbit acts as a container for the properties that are shared by all
// rabbits. An individual rabbit object, like the killer rabbit, contains properties
// that apply only to itself—in this case its type—and derives shared properties from its prototype


// Prototypes are useful for defining properties for which all instances of a class
// share the same value, such as methods.













