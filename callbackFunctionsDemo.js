// Extras - #7

// Callback functions in JavaScript

// A callback function is a function that is passed as an argument to another function 
// and is executed after some operation has been completed. 
// Callback functions are commonly used in asynchronous programming to handle operations that take time, 
// such as fetching data from an API or reading a file.   

// Example of a callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Ashish", age: 39 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Data fetched:", data);
});

// Another example of a callback function without using setTimeout
function greet(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}
greet("Ashish", (message) => {
    console.log(message);
});

// The callback is called a "callback" because it is called back by the function that receives it as an argument.
// The callback is used to ensure that a certain piece of code is executed only after another piece of code has finished executing.
// The callback function can be defined as a named function or an anonymous function, as shown in the examples above.
// The callback function can also accept parameters, which can be used to pass data from the main function to the callback function.
// We can also use arrow functions as callbacks, which provide a more concise syntax for writing functions in JavaScript.
// We pass callback functions as references, 
// which means that we can reuse the same callback function in multiple places in our code, 
// making it more modular and easier to maintain.

// The mechanics of above code is that the greet function constructs a greeting message using the provided name and then calls the callback function, 
// passing the greeting message as an argument. 
// The callback function then logs the greeting message to the console.
// (message) => { console.log(message); } is an anonymous function that serves as the callback for the greet function.
// Relation between callback and (message) => { console.log(message); } 
// is that the callback function is defined as an anonymous function that takes a single parameter message and logs it to the console.

// Callback functions are essential for handling asynchronous operations in JavaScript and are widely used in various libraries and frameworks.

// Note: Callback functions can lead to "callback hell" if not managed properly, 
// where multiple nested callbacks can make the code difficult to read and maintain. 
// To avoid this, developers often use Promises or async/await syntax for better readability and error handling in asynchronous code.

// Another example of callback functions purely related to automation testing with Playwright
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const title = await page.title();
    console.log('Page title:', title);
    await browser.close();
})();
// In this example, we use an asynchronous function to launch a Chromium browser, 
// navigate to a webpage, retrieve the page title, and log it to the console. 
// The use of async/await allows us to handle asynchronous operations in a more readable way 
// compared to traditional callback functions.    

// So async/await is a syntactic sugar built on top of callback functions 
// that allows us to write asynchronous code in a more synchronous and readable way.
// The async keyword is used to declare an asynchronous function, 
// and the await keyword is used to wait for a Promise to resolve before moving on to the next line of code.
// And async/await is widely used in modern JavaScript for handling asynchronous operations, 
// especially in scenarios like automation testing with Playwright, 
// where we often need to perform a series of asynchronous actions in a specific order.
// So async/await provides a cleaner and more intuitive way to handle asynchronous code 
// compared to traditional callback functions, 
// making it easier to read and maintain.
