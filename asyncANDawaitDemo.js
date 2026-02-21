// Extras - #9

// async and await in JavaScript
// await is a keyword that can only be used inside an async function. 
// It is used to wait for a Promise to resolve or reject before proceeding with the execution of the code.

// Example of async and await in JavaScript
async function fetchData() {
    try {
        console.log('Fetching data...');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data fetched, processing...');
        const data = await response.json();
        console.log('Data processed, logging to console...');
        console.log(data);
        console.log('Data fetched successfully!');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
// In this example, we define an asynchronous function called fetchData that uses the await keyword 
// to wait for the fetch operation to complete before proceeding to the next line of code.
// The fetch function returns a Promise that resolves to a Response object, 
// which we then call the json() method on to parse the response body as JSON.
// If any of the operations fail, the error is caught in the catch block and logged to the console.
