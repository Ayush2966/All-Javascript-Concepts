let obj1 = {value : 10}
let obj2 = obj1
let obj3 = {value : 10}

console.log(obj1==obj2) // thats because obj1 and obj2 refer to some object in the memory
console.log(obj1==obj3)

Object.assign(obj1,{value:15})

console.log(obj1) 
console.log(obj2)
console.log(obj3)



