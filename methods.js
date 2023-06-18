let c = console.log;
let str = "hello";

c(str.toUpperCase());
c(str.toLowerCase());

let arr = [1, 2, 3,2,1];

c(arr.push(4));
c(arr.push(5));
c(arr.pop(4));

c(arr.includes(3))
c(arr.indexOf(2))
c(arr.lastIndexOf(2))
c(arr.slice(2,3))
c(arr.slice(2))



let obj = {
  day: "wednesday",
  work: ["pizza", "js", "jsClock"]
};

c(obj.day);
let anObj = { left: 1, right: 2 };
c(anObj);
delete anObj.right;
c(anObj.right);
c("right" in anObj);
c("left" in anObj);
c(anObj);

c(Object.keys(obj));
c(Object.values(obj));

let obj2 = {};
Object.assign(obj2, obj);
c(obj2);


// normally data formet in applications

let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth"
    ],
    squirrel: false
  },
  { events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true }
  /* and so on... */
];



c("cocunut".slice(3))
c("cocunut".indexOf("n"))
c("     trim    \n   ".trim())
c(String(6).padStart(3,"0"))

let sentence = "hello world mann"
let word = sentence.split(" ")
c(word)
c(word.join(". "))
c("ha".repeat(3))

let strr = "abc"
c(str.length)

c(str[2])
