const todoList = {
    monday : "js",
    tuesday : "react",
    firday : "node"
}
console.log(todoList)

const jsontodo = JSON.stringify(todoList)
console.log(jsontodo)
const backTodo = JSON.parse(jsontodo)
console.log(backTodo)