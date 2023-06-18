function count() {
  "use strict";
  for (index = 0; index < 10; index++) {
    console.log(index);
  }
  console.log(this)
}

count();

"use strict"

function person(name)
{
    this.name = name
}

let hello = person("hello")

console.log(hello.name)