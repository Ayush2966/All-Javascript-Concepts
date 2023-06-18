// One of the most confusing topics for JS developers is defining the context that this referred to. We will try to explain 4 rules which help you to define the context of this.

////////////////////////////

function foo() {
  let a = 2;
  this.bar();
}

function bar() {
  console.log(this.a);
}

foo(); // undefined will be return

//////////////////////////////////

// 4 rules to understand the .this

// 1) default binding
// 2) implicit binding
// 3) explicit binding
// 4) new binding

/////////////////////// 1 default binding ///////////////////

var x = 2;
let y = 4;
function myFunc() {
  var x = 3;
  console.log(this.x); //2// refer to x because its global not scope defined
  //but why 2 because it taking the global value
  console.log(this); // refer to window object because called in window
  console.log(x); //3// this will give 3
  console.log(y); //4//
}

myFunc();

/////////////////////// 2 implicit binding ///////////////////

// In this case, The object that is standing before the dot
// is what this keyword will be bound to.

let name = "window";

function myFunc2() {
  console.log(`my name is ${this.name}`);
}

let obj = {
  name: "abdulqadir",
  myFunc2
};

obj.myFunc2();

function greet(person) {
  console.log(`hi ${person} , my name is ${this.name}`);
}

let ali = {
  name: "ali",
  greet
};

ali.greet("abdulqadir"); // hi ali , my name is abdulqadir

let fc = ali.greet;

fc("abdulqadir"); // hi ali , my name is

// now fc will be the Reference to the greet function
// and it point to the window object

/////////////////////// 3 explicit binding ///////////////////

// In this case, you can force a function call to use a particular object for this binding,
// without putting a property function reference on the object. so we explicitly say to a function what object it should use for this — using functions such as call, apply and bind

let person = {
  name: "alex"
};

greet.call(person, "abdul");

greet.apply(person, ["abdul"]);

// The bind function creates a new function that will act as the original function but with this predefined.

let person2 = {
  name: "shaheer"
};

this.greet = greet.bind(person2);

greet("abdul");

/////////////////////// 4 new  binding ///////////////////

function fooo() {
  /*
        1 - create a new object literal 

        var this = {       }

    */

  // 2- add properties and methods

  this.name = "osama";
  this.say = function() {
    return "i am " + this.name;
  };

  // 3- return this
}

let result = new fooo();

console.log(result.name);

// You don’t rebind the value of this when you use an arrow function inside of another function:

let group = {
  title: "Our group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(student => {
      console.log(this.title + ":" + student);
    });
  }
};

group.showList();

//////////////////////////////////////////////

function Cat(name) {
  this.name = name;
  console.log(this); // Cat {name: "felix"}
}
let cat = new Cat("tom"); // Cat {name: "felix"}

console.log(cat);

function food(kind) {
  this.kind = kind;
  this.cook = cook; // functions are hoisted, so it's perfectly
  // fine to call or assign function names
  // before they are defined.
  function cook(sec) {
    let that = this;
    setTimeout(function() {
      console.log(that.kind + " cooked for " + sec + " seconds.");
    }, sec * 1000);
  }
}

let soup = new food("soup"); // <--- this.kind = "soup"
soup.cook(2); // undefined cooked for 2 seconds.

function delivery(food) {
  this.food = food;
  this.deliveryTime = deliveryTime;

  function deliveryTime(sec) {
    setTimeout(() => {
      console.log(this.food + " will take " + sec + "mins to deliver");
    }, sec * 1000);
  }
}

let pizza = new delivery("pizza");
pizza.deliveryTime(4);
