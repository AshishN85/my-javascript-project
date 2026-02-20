// Extras - #3

// Map, Filter and Reduce are three powerful array methods in JavaScript 
// that allow you to manipulate and transform arrays in different ways.

// "return" keyword is needed only when using a function body with curly braces.

// "Callback function" is a function that is passed as an argument to another function 
// and is executed after some operation has been completed.

// "Arrow function" is a concise way to write functions in JavaScript.

/* map() method takes a callback function as an argument and applies it to each element of the array, 
returning a new array with the results. The original array remains unchanged.

filter() method takes a callback function as an argument and returns a new array 
containing only the elements that satisfy the condition specified in the callback function. 
The original array remains unchanged.

reduce() method takes a callback function and an optional initial value as arguments. 
It applies the callback function to each element of the array, accumulating a single result. 
The original array remains unchanged. */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Map: The map() method creates a new array 
// by applying a function to each element of the original array.
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Filter: The filter() method creates a new array 
// with all elements that pass a test implemented by a provided function.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Reduce: The reduce() method executes a reducer function on each element of the array, 
// resulting in a single output value.
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 55

// In summary, map() is used to transform each element of an array, 
// filter() is used to select elements based on a condition, 
// and reduce() is used to combine all elements into a single value.

console.log("================================================================")

// You can also chain these methods together for more complex operations.
let result = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * num) // Square the filtered numbers
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum the squared numbers
console.log(result); // Output: 220 (4 + 16 + 36 + 64 + 100)

let result1 = numbers
  .map(num => num * 2) // Double each number
  .filter(num => num > 10) // Filter numbers greater than 10
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result1); // Output: 110 (12 + 14 + 16 + 18 + 20)

console.log("================================================================")

let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let nameLengths = names.map(name => name.length);
console.log(nameLengths); // Output: [5, 3, 7, 5, 3]

let longNames = names.filter(name => name.length > 4);
console.log(longNames); // Output: ["Alice", "Charlie", "David"]

let totalLength = names.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
console.log(totalLength); // Output: 23 (5 + 3 + 7 + 5 + 3)

console.log("================================================================")

let result2 = names
  .filter(name => name.length > 4) // Filter names longer than 4 characters
  .map(name => name.toUpperCase()) // Convert the filtered names to uppercase
  .reduce((accumulator, currentValue) => accumulator + currentValue + " ", "");
console.log(result2.trim()); // Output: "ALICE CHARLIE DAVID"

let result3 = names
  .map(name => name.toLowerCase()) // Convert each name to lowercase
  .filter(name => name.includes("a")) // Filter names that include the letter "a"
  .reduce((accumulator, currentValue) => accumulator + currentValue + " ", "");
console.log(result3.trim()); // Output: "alice charlie david"

console.log("================================================================")

let employees = [
  { id: 1, name: "Alice", department: "HR", salary: 50000, yoj: 2015 },
  { id: 2, name: "Bob", department: "IT", salary: 45000, yoj: 2018 },
  { id: 3, name: "Charlie", department: "Finance", salary: 60000, yoj: 2012 },
  { id: 4, name: "David", department: "Marketing", salary: 48000, yoj: 2019 },
  { id: 5, name: "Eve", department: "Operations", salary: 55000, yoj: 2016 },
];

let salary = employees.map(emp => emp.salary);
console.log(salary); // Output: [50000, 45000, 60000, 48000, 55000]
let increment = employees.map(emp => emp.salary * 1.5);
console.log(increment); // Output: [ 75000, 67500, 90000, 72000, 82500 ]
let salaryDetails = employees.map(emp => `${emp.name}: ${emp.salary}`);
console.log(salaryDetails); // Output: ["Alice: 50000", "Bob: 45000", "Charlie: 60000", "David: 48000", "Eve: 55000"]

console.log("================================================================")

let highEarners = employees.filter(emp => emp.salary > 50000);
console.log(highEarners);
let recentHires = employees.filter(emp => emp.yoj > 2015);
console.log(recentHires);
let itEmployees = employees.filter(emp => emp.department === "IT");
console.log(itEmployees);

console.log("================================================================")

let totalSalary = employees.reduce((acc, currVal) => acc + currVal.salary, 0);
console.log(totalSalary);
