
let todo = []

const remember = (task) =>{
    todo.push(task)
}

const getTask = () => {
   return todo.shift()
}

const rememberUrgently= (task) => {
    todo.unshift(task)
}

remember("js challenge 1")
remember("js challenge 2")
remember("js challenge 3")
console.log(todo)
console.log(getTask())
console.log(todo)
rememberUrgently("js challenge 4")
console.log(todo)
console.log(getTask())
console.log(todo)
