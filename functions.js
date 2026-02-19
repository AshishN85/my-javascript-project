// #6

// DRY - Don't Repeat Yourself

// A 'Function' created outside the 'Object' is called a function.
// A 'Function' created inside the 'Object' is called a method.

// Creating a function
function multiply(a, b) {
    console.log(a * b)
}

//Using the function
multiply(3, 5)

console.log("********************************************************************")

// "return" keyword is needed only when using a function body with curly braces.

function add(a, b) {
    return(a + b)
}

let res = add(3, 5)
console.log(res)

console.log("********************************************************************")

function greetings() {
    console.log("Hey Good Morning!!")
}

greetings()

console.log("********************************************************************")

// "return" keyword is needed only when using a function body with curly braces.
function chao() {
    return("How you doin!!")
}

console.log(chao())

console.log("********************************************************************")

// "return" keyword is needed only when using a function body with curly braces.
function square(num) {
    return(num * num)
}

console.log(square(134))    // '134' is the argument passed to the function 'square'

console.log("********************************************************************")

function simpleInterest(p, r, t) {
    let result = (p * r * t) / 100
    console.log("Simple Interest is: " + result)
    return result
}   

let ans = simpleInterest(10000, 2, 3)
console.log("The answer is: " + ans)

// console.log(result * 2)    // It is giving an error because 'result' is a local variable and it is not accessible outside the function
console.log(ans * 2)    // We can use the returned value of a function for further calculations

console.log("********************************************************************")

// Named function
function areaOfCircle(radius) {
    return(3.14 * radius * radius)
}

console.log(areaOfCircle(5))

// Anonymous function
let areaOfCircle2 = function(radius) {
    return(3.14 * radius * radius)
}

console.log(areaOfCircle2(5))

console.log("********************************************************************")

// Arrow function
let areaOfCircle3 = (radius) => {
    return(3.14 * radius * radius)
}
console.log(areaOfCircle3(5))

// Arrow function with implicit return (when there is only one expression in the function body, we can omit the 'return' keyword and the curly braces)
let areaOfCircle4 = radius => 3.14 * radius * radius
console.log(areaOfCircle4(5))

// Anonymous Arrow function 
// // We can also create an anonymous arrow function and assign it to a variable
let areaOfCircle5 = (radius) => 3.14 * radius * radius
console.log(areaOfCircle5(5))

console.log("********************************************************************")

// Nested function (A function defined inside another function is called a nested function)
function outerFunction() {
    console.log("This is the outer function")
    function innerFunction() {
        console.log("This is the inner function")
    }
    innerFunction()
}
outerFunction()

console.log("********************************************************************")

function countVowels(str) {
    const vowels = "aeiouAEIOU"; // String containing all the vowels (both lowercase and uppercase)
    let count = 0; // Variable to keep track of the number of vowels
    for (let char of str) { // Loop through each character in the input string 'str'
        if (vowels.includes(char)) { // Check if the current character 'char' is a vowel by checking if it is included in the 'vowels' string
            count++; // If it is a vowel, increment the 'count' variable by 1
        }
    }
    return count; // Return the total count of vowels found in the input string 'str'
}
let str = "Hello World";
console.log("Number of vowels in '" + str + "' is: " + countVowels(str))
