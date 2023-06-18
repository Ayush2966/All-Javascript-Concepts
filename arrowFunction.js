// There’s a third notation for functions, which looks very different from the
// others. Instead of the function keyword, it uses an arrow ( => ) made up of an
// equal sign and a greater-than character (not to be confused with the greater-
// than-or-equal operator, which is written >= )


const square = x => x*x

console.log(square(2))

const alert = () => console.log("alertttttttt....")

alert()