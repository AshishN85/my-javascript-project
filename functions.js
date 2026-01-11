// #6

// A 'Function' created outside the 'Object' is called a function.
// A 'Function' created inside the 'Object' is called a method.

// Creating a function
function multiply(a, b) {
    console.log(a * b)
}

//Using the function
multiply(3, 5)

console.log("********************************************************************")

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

function chao() {
    return("How you doin!!")
}

console.log(chao())
