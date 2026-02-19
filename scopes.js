// Scopes definition

// Global scope
var x = 10; //global variable

function myFunction() {
    console.log(x) //accessing global variable inside a function
}
myFunction()
console.log(x) //accessing global variable outside a function

console.log("********************************************************************")

// Local scope
function myFunction2() {
    var y = 20; //local variable
    console.log(y)
}
myFunction2()
// console.log(y) //ReferenceError: y is not defined

console.log("********************************************************************")

// Block scope
function myFunction4() {
if(true) {
    let z = 30; //block-scoped variable
    const w = 40; //block-scoped variable
    console.log(z)
    console.log(w)
    }
    // console.log("Outer z:- ", z) //This line will cause a ReferenceError because z is block-scoped
    // console.log("Outer w:- ", w) //This line will cause a ReferenceError because w is block-scoped
}
myFunction4()

console.log("********************************************************************")

// function scope
function myFunction3() {
    if(true) {
        var a = 50; //function-scoped variable
        console.log("Inner a:- ", a)
    }
    console.log("Outer a:- ", a)
}
myFunction3()
// console.log("Outside function a:- ", a)      //ReferenceError: a is not defined
