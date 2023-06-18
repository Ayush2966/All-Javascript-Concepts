table = {n00: 4 , n01 :6 , n10: 7 ,n11: 13};

let {n00,n01,n10,n11 }= table;
const phi = (n00,n01,n10,n11) => {
    return ((n00*n11-n10*n01 )/ Math.sqrt(n10*n11 +n00*n01 +n00*n10+n01*n11))
}
console.log(n00,n01,n10,n11)

const card = {name: "abdulqadir" , age : 18 , depatment : "bcit"}
const {name} = card

console.log(name)
