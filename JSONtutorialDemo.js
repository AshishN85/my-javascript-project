// Extras - #5

// JSON tutorial demo
// JSON stands for JavaScript Object Notation. 
// It is a lightweight data-interchange format that is easy for humans to read and write, 
// and easy for machines to parse and generate. 
// JSON is often used to transmit data between a server and a web application as text.

const obj = {
    name: "Ashish",
    age: 39,
    city: "Hyderabad",
    state: "Telangana",
    country: "India"
}

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(obj)
console.log(jsonString)

// Convert JSON string back to JavaScript object
const jsonObj = JSON.parse(jsonString)
console.log(jsonObj)
