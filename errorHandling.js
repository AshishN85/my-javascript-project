// Extras - #4

// Error handling in JavaScript
// JavaScript provides a way to handle errors gracefully using try...catch...finally statements.

// 1. Try...Catch...Finally
try {
    console.log("try block will throw an error and the catch block will handle it")
    console.log(z)  // ReferenceError: z is not defined 
} catch (error) {
    console.log("An error occurred: " + error)
    console.log(error.name)
    console.log(error.message)
} finally {
    console.log("This block will always execute")
}

console.log("********************************************************************")

// Custom Errors
const customError = new Error("Ashish is not defined")
// "Error" is a built-in constructor function in JavaScript that creates an error object. 
// We can create a custom error by using the Error constructor and passing a message as an argument. 
// We can also set the name property of the error object to give it a custom name.
customError.name = "AshishError"

try {
    throw customError
} catch (error) {
    console.log(error.name)  // AshishError
    console.log(error.message)
}

//=============================================================================

try {
  await page.click('#submit');
} catch (err) {
  console.log("Button not found!");
}
