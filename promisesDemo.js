// Extras - #8

// Promises in JavaScript
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises are used to handle asynchronous operations in JavaScript, such as fetching data from an API or reading a file.
// A Promise has three states: pending, fulfilled, and rejected.
// When a Promise is pending, it means the operation is still in progress.
// When a Promise is fulfilled, it means the operation was successful and the result is available.
// When a Promise is rejected, it means the operation failed and an error is available.

// Example of creating and using a Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
// In the above example, we create a new Promise that simulates an asynchronous operation using setTimeout.
// The Promise takes a function as an argument, which has two parameters: resolve and reject.
// Inside the setTimeout, we check if the operation was successful (simulated by the success variable).
// If it was successful, we call resolve with a success message. If it failed, we call reject with an error message.
// We then use the .then() method to handle the fulfilled state of the Promise and log the success message to the console.
// We also use the .catch() method to handle the rejected state of the Promise and log the error message to the console.

// Promises can also be chained together to handle multiple asynchronous operations in a more readable way.
myPromise.then((message) => {
    console.log(message);
    return "Next operation completed!";
}   ).then((nextMessage) => {
    console.log(nextMessage);
}).catch((error) => {
    console.log(error);
});
// In this example, we chain another .then() method to handle the next operation after the first Promise is fulfilled.
// The .catch() method will catch any errors that occur in any of the Promises in the chain.
// Promises provide a cleaner and more manageable way to handle asynchronous operations compared to callback functions, 
// especially when dealing with multiple asynchronous operations that depend on each other.
// Note: Promises are a fundamental part of modern JavaScript and are widely used in various libraries and frameworks for handling asynchronous operations.     

// A Promise object is defined as a constructor function that takes a function as an argument, which has two parameters: resolve and reject.
// The resolve function is called when the asynchronous operation is successful, and it takes a value as an argument that represents the result of the operation.
// The reject function is called when the asynchronous operation fails, and it takes an error as an argument that represents the reason for the failure.
// The .then() method is used to handle the fulfilled state of the Promise, and it takes a function as an argument that will be called with the value passed to resolve.
// The .catch() method is used to handle the rejected state of the Promise, and it takes a function as an argument that will be called with the error passed to reject.

// Another example of Promises purely related to automation testing with Playwright
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
// navigate to a webpage, retrieve the page title, and then close the browser.
// The await keyword is used to wait for each asynchronous operation to complete before moving on to the next one.
// This allows us to write asynchronous code in a more synchronous and readable manner, 
// without the need for chaining .then() methods as we would with Promises. 

// So async/await is a syntactic sugar built on top of Promises that allows us to write 
// asynchronous code in a more synchronous and readable way.
// The async keyword is used to declare an asynchronous function, 
// and the await keyword is used to wait for a Promise to resolve before moving on to the next line of code.
// And async/await is widely used in modern JavaScript for handling asynchronous operations, 
// especially in scenarios like automation testing with Playwright, 
// where we often need to perform a series of asynchronous actions in a specific order.
// So async/await provides a cleaner and more intuitive way to handle asynchronous code 
// compared to traditional Promises, 
// making it easier to read and maintain.

console.log("===============================================================")

// npm i -D @playwright/test
const { chromium } = require('@playwright/test');

let browser, page;

chromium.launch()
  .then(b => {
    browser = b;
    return browser.newPage();
  })
  .then(p => {
    page = p;
    return page.goto('https://example.com');
  })
  .then(() => page.title())
  .then(title => {
    console.log('Page title:', title);
    return browser.close();
  })
  .catch(err => {
    console.error('Error:', err);
    if (browser) return browser.close().catch(() => {});
  });
// In this example, we use Promises to handle the asynchronous operations of launching the browser, 
// creating a new page, navigating to a URL, retrieving the page title, and closing the browser.
// Each step is handled in a .then() method, 
// and any errors that occur during the process are caught in the .catch() method.
// This approach allows us to manage asynchronous operations without using async/await syntax, 
// but it can become less readable as the number of chained operations increases.
