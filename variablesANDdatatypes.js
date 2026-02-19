// #1

// Dynamically typed programming language
// Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (ES6) ==> NEVER USED
// 7. BigInt (ES2020) ==> NEVER USED

//multi-line
let x; //declaration
x = 10; //initialization or assignment

// single line
x = 20; //declaration + initialization

x = 300;
let y = 12.34, z = 'Siva', m = true, n = "Q";

console.log(x, y, z, m, n)

const firstName = "Ashish";
// firstName = "Avinash";      TypeError: Assignment to constant variable.

console.log(firstName)

let lastName;
console.log(lastName)

let middleName = null;
console.log(middleName)

console.log("=================================================================")

console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(z))
console.log(typeof(m))
console.log(typeof(n))
console.log(typeof(lastName))
console.log(typeof(middleName))

var xyz = 20
var xyz = "Ashish"
console.log(xyz)

let mnp = 20
// let mnp = "Ashish"
console.log(mnp)

const pqr = 70
// pqr = "Ashish"      TypeError: Assignment to constant variable.
console.log(pqr)

console.log("=================================================================")

console.table([x, y, z, m, n, lastName, middleName, firstName, pqr])

console.log("=================================================================")

let tat = 9/0
console.log(tat) // Infinity

let cat = "Hello" / 2
console.log(cat) // NaN

let bat = 10 / "Hello"
console.log(bat) // NaN

let rat = 0 / 9
console.log(rat) // 0

let mat = 0 / 0
console.log(mat) // NaN

// Non-Primitive Data Types
// 1. Object
// 2. Array
// 3. Function

let person = {
    name: "Ashish",
    age: 30,
    city: "Pune"
}
console.log(person)

let arr = [1, 2, 3, 4, 5]
console.log(arr)

function greet(name) {
    return `Hello, ${name}!`
}
console.log(greet("Ashish"))
