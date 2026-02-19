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
let q = 98.7654321;

console.log(Number.toString(n))
console.log(Number.toString(q))
console.log(q.toFixed())
console.log(q.toPrecision(4))
console.log(q.toExponential())  // toExponential() => converts a number into exponential form
console.log(typeof(Number.toString(n)))
console.log(typeof(Number.toString(q)))

console.log("********************************************************************")

console.log(Math.round(12.845678))
console.log(Math.ceil(12.36789))
console.log(Math.floor(12.85678))
console.log(Math.min(22, 34, 56, 78, 90))
console.log(Math.max(12, 34, 56, 78, 90))
console.log(Math.random())   // generates a random number between 0 and 1
console.log(Math.floor(Math.random() * 6 + 1))   // generates a random integer between 1 and 6
console.log(Math.pow(2, 3))   // 2 raised to the power of 3
console.log(Math.sqrt(16))    // square root of 16

console.log("********************************************************************")

let min = 10, max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// Explanation: Math.random() generates a random number between 0 and 1.
// Multiplying it by (max - min + 1) scales it to the range of possible values (in this case, 11).
// Adding min shifts the range to start from the minimum value (10 in this case).
// The Math.floor() function is used to round down the result to the nearest integer, ensuring that the final output is an integer between 10 and 20 (inclusive).
// For example, if Math.random() generates 0.5, the calculation would be:
// Math.floor(0.5 * (20 - 10 + 1)) + 10
// Math.floor(0.5 * 11) + 10
// Math.floor(5.5) + 10
// 5 + 10
// 15
// Therefore, the output would be 15, which is a random integer between 10 and 20 (inclusive).
console.log(randomNum)   // generates a random integer between 10 and 20 (inclusive)
