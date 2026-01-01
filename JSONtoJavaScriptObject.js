// Converting a JSON text to a JavaScript object
// Parent object containing a JSON array
let companyJSON = `
{
  "companyName": "Tech Solutions",
  "location": "Bangalore",
  "employees": [
    {
      "id": 1,
      "name": "Ashish",
      "age": 35,
      "role": "Tester"
    },
    {
      "id": 2,
      "name": "David",
      "age": 30,
      "role": "Developer"
    },
    {
      "id": 3,
      "name": "Murray",
      "age": 28,
      "role": "Manager"
    }
  ],
    "address" : {
        "streetAddress" : "103 2nd Avenue",
        "city" : "NewYork"
    }
}
`;

// Convert JSON string to JS object to use it
let companyData = JSON.parse(companyJSON);
console.log(companyData.employees[1].name); 
console.log(companyData.companyName); 
console.log(companyData["address"].streetAddress)



// Right now, companyData is already a JavaScript object, not JSON.
// ✅ Fix 2 (If you really want to use JSON.parse)

// You must first convert the object to a JSON string using JSON.stringify():

// let jsonString = JSON.stringify(companyData);
// let obj = JSON.parse(jsonString);

// console.log(obj.employees[1].name);
