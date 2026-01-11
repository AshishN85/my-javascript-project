// #11

let num = 19
let dec = 12.34
// let x = new Number();
let z = 10e2        // exponential value '10 square'

console.log(z)

// isInteger()
let m = "Ashish"

console.log(Number.isInteger(num))
console.log(Number.isInteger(dec))
console.log(Number.isInteger(z))
console.log(Number.isInteger(m))

console.log("********************************************************************")

// isNaN()
console.log(Number.isNaN(num))
console.log(Number.isNaN(dec))
console.log(Number.isNaN(z))
console.log(Number.isNaN(m))

console.log("********************************************************************")

// parseInt() => converts a string into number
let s = "Welcome"
let x = "10"
let y = "12.34"

console.log(Number.parseInt(s))
console.log(Number.parseInt(x))
console.log(Number.parseInt(y))

console.log("*********************************")

console.log(Number.parseFloat(s))
let p = Number.parseFloat(s)
console.log(Number.parseFloat(x))
console.log(Number.parseFloat(y))

console.log(Number.isNaN(p))

console.log("********************************************************************")

// toString()
let n = 1234;
let q = 98.76;

console.log(Number.toString(n))
console.log(Number.toString(q))
console.log(typeof(Number.toString(n)))
console.log(typeof(Number.toString(q)))
