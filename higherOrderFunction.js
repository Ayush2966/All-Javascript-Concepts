// Functions that operate on other functions, either by taking them as arguments
// or by returning them, are called higher-order functions.

// Higher-order functions allow us to abstract over actions, not just values.
// They come in several forms. For example, we can have functions that create
// new functions.

const noisy = func => {
  return (...args) => {
    console.log(`calling with args  ${args}`);
    const result = func(...args);
    console.log(`result = ${result}`);
    return result;
  };
};

console.log(noisy(Math.min)(1, 2, 3, 4));

// new types of control flow

// const unless = (test,then) => {
//     if(!test){
//         then()
//     }
// }

// repeat(3,unless(n => {
//     unless(n%2==0, () => {
//         console.log(n,"is even")
//     })
// }))

// There is a built-in array method, forEach , that provides something like a
// for / of loop as a higher-order function.

const chr = ["a", "b", "c", "d"];

chr.forEach(x => {
  console.log(x);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter(n => {
  return n % 2 == 0;
});
console.log(even);

const square = numbers.map(n => n * n);

console.log(square);

const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);

// The some method is another higher-order function. It takes a test function
// and tells you whether that function returns true for any of the elements in the
// array.

const max =chr.some((ch)=> ch == "a")
console.log(max)

