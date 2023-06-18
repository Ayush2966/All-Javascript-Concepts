// A class defines the shape of a
// type of object—what methods and properties it has. Such an object is called
// an instance of the class.

// Prototypes are useful for defining properties for which all instances of a class
// share the same value, such as methods.

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
};

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

// JavaScript provides a way to make defining this type of function easier. If
// you put the keyword new in front of a function call, the function is treated as
// a constructor. This means that an object with the right prototype is automat-
// ically created, bound to this in the function, and returned at the end of the
// function

/*
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
};
*/

// class notation

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let wierdRabbit = new Rabbit("wried");
wierdRabbit.speak("heyyyyyyyyyyyyyyyyyyyyyy!");

let wildRabbit = new Rabbit("wild");
wildRabbit.speak("woooooooooooooooo");

let object = new (class {
  getword() {
    return "helllo";
  }
})();

console.log(object.getword());

console.log(Object.getPrototypeOf(object));

console.log(Object.getPrototypeOf(wierdRabbit) == Rabbit.prototype);

// Overriding derived properties

Rabbit.prototype.teeth = "small";

console.log(Object.getPrototypeOf(wildRabbit));

wildRabbit.teeth = "sharp teeths";
console.log(wildRabbit.teeth, Object.getPrototypeOf(wildRabbit));
console.log(wierdRabbit.teeth);

let sym = Symbol("name");

console.log(sym);
console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55;

console.log(Rabbit.prototype);
console.log(Rabbit.prototype[sym]);

// getters and settters

// Interfaces often consist mostly of methods, but it is also okay to include prop-
// erties that hold non-function values.

// ven properties that are accessed directly
// may hide a method call. Such methods are called getters, and they are defined
// by writing get in front of the method name in an object expression or class
// declaration.

class Student {
  constructor(name) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }

  set setName(value)
  {
    this.name = value
  }

  static newName(value)
  {
     return new Student(value)
  }
}

console.log(Student.getName) // undefined

// You can do a similar thing when a property is written to,
// using a setter.

let ahmed = new Student

ahmed.setName = "ahmed"

console.log(ahmed.getName)
console.log(ahmed.name)

// inside a class declaration, methods that have static written before their
// name are stored on the constructor.

console.log(Student.newName("ali"))

