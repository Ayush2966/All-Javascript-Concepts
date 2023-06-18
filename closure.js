// The ability to treat functions as values, combined with the fact that local
// bindings are re-created every time a function is called, brings up an interesting
// question. What happens to local bindings when the function call that created
// them is no longer active?

const wrapValue = (n) => {
    let local = n
    return () => local
}

let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)
let wrap3 = wrapValue(3)

console.log(wrap1())
console.log(wrap2())
console.log(wrap3())

// This feature—being able to reference a specific instance of a local binding in
// an enclosing scope—is called closure.
