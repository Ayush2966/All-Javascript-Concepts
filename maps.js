
let ages = new Map()

ages.set("julia",63)
ages.set("henry",62)
ages.set("joo",44)
ages.set("alia",19)

console.log(ages)
console.log(ages.has("julia"))

ages.set(4,4)

console.log(ages)

console.log(`the age of julia is ${ages.get("julia")}`)
