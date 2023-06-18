// There is a construct called switch that is intended to express such a “dis-
// patch” in a more direct way.

let  yourAge = Number(prompt("enter your age "))

switch (yourAge) {
    case 18:
        console.log("accesed")        
        break;
    default:
        console.log("under Aged")        
        break;
}

console.log(yourAge)