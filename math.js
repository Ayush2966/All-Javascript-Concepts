const randomPoints = radius => {
  const angle = Math.random() * 2 * Math.PI
  console.log(angle)
  return { x: Math.cos(angle), y: Math.sin(angle) };
};

console.log(randomPoints(30))

console.log(Math.random())
console.log(Math.min(2,4,5,7,1))
console.log(Math.max(45,22,77,11,1100))
console.log(Math.sqrt(4))

console.log(Math.floor(Math.random() * 10))
