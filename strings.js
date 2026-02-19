// #10

let s = "Ashish"
let p = "Naidu"
// let s = new String();

// string interpolation or template literals
console.log(`My fullname is ${s} ${p}`)

// indexing of a string
console.log(s[0])
console.log(s[1])

// length of a string
console.log(s.length)



// String Methods:-
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
// trimEnd() & trimStart()
let space = "           welcome         "
console.log(space)
console.log(space.trim())

console.log("********************************************************************")

// includes()
let str = "Welcome to JavaScript training"
console.log(str.includes("JavaScript"))
console.log(str.includes("Training"))

console.log("********************************************************************")

// startsWith() & endsWith()
console.log(str.startsWith("Welcome"))
console.log(str.startsWith("welcome"))
console.log(str.endsWith("training"))
console.log(str.endsWith("Training"))

console.log("********************************************************************")

// indexOf()
console.log(str.indexOf("JavaScript"))
console.log(str.indexOf("Python"))     // -1 means element is not present in a string
console.log(str.indexOf("a"))          // it will give the index of first occurrence of a character in a string
console.log(str.indexOf("o", 5))    // it will give the index of first occurrence of a character in a string after the given index

console.log("********************************************************************")

// slice()
console.log(str.slice(11, 21))
console.log(str.slice(11))     // it will slice the string from the given index to the end of the string    

console.log("********************************************************************")

// split() & join()
let str1 = "Hi, how you doin!! Hey, welcome to JavaScript training!!"
let arr1 = str1.split(" ")
console.log(arr1)
console.log(arr1.join("-"))
