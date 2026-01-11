// #10

let s = "Ashish"
// let s = new String();

// charAt()
console.log(s.charAt(3))

console.log("********************************************************************")

// concat()
console.log(s.concat(" Naidu"));
console.log(s.concat(" Naidu").concat(" Munni"));

console.log("********************************************************************")

// replace()
let su = "Welcome to JavaScript training"
console.log(su.replace("JavaScript", "Python"))

console.log("********************************************************************")



// substring()
// let(keyword) su(variable): string(class)*****
// (method) String.substring(start: number, end?: number | undefined): string*****
console.log(su.substring(11, 15))

console.log("********************************************************************")

// toLowerCase() & toUpperCase()
let sum = "WELCOME"
let num = "hiring"

console.log(sum.toLowerCase())
console.log(num.toUpperCase())

console.log("********************************************************************")

// spilt()
let text = "Hi, how you doin!! Hey, welcome to JavaScript training!!"
console.log(text.split(","))
let arr = text.split(",")
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log("********************************************************************")

// trim()
let space = "           welcome         "
console.log(space)
console.log(space.trim())
