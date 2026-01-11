// #8

let cars = ['volvo', "BMW", 'Benz', "Audi"]

// let cars = new Array('volvo', "BMW", 'Benz', "Audi")
console.log(cars);
console.log(cars[2]);

console.log("********************************************************************")

// Update the element in an array
cars[0] = 'Opel';
console.log(cars);

console.log("********************************************************************")

let myArray = [100, 12.34, "Ashish", 'N', true, false, function multiply(a, b) {
    console.log(a * b)
}, person = {
    firstName : "Ashish",
    lastName : "Naidu",
    age : 39,
    weight : 67.5,
    active : true,
    "e-mail" : "test.best@example.com" 
}]

console.log(myArray);

console.log("********************************************************************")

let person1 = {
    firstName : "Ashish",
    age : 39
}
let person2 = {
    firstName : "Avinash",
    age : 37
}

let employee = [person1, person2];
console.log(employee)

console.log("********************************************************************")

console.log(employee[1])

console.log("********************************************************************")

console.log(employee[1].age)

console.log("********************************************************************")

// Length of an array
let fruits = ["Banana", "Orange", 'kiwi', 'apple', "grapes", 'jackfruit', "pineapple"];
console.log(fruits.length);

console.log("********************************************************************")



// for-of loop***
for(energy of fruits) {
    console.log(energy)      
}

console.log("********************************************************************")

console.log(typeof(fruits))
console.log(Array.isArray(fruits))

let x = 100;
console.log(Array.isArray(x))

console.log("********************************************************************")



// Array Methods:-
console.log(myArray.toString());
console.log(myArray.join("*"));

console.log("********************************************************************")

// pop()
console.log(fruits.pop())
console.log(fruits)

console.log("********************************************************************")

// push()
console.log(fruits.push("guava"))
console.log(fruits)

console.log("********************************************************************")

// shift()
console.log(fruits.shift())
console.log(fruits)

console.log("********************************************************************")

// unshift()
console.log(fruits.unshift("tomato"))
console.log(fruits)

console.log("********************************************************************")

// Deleting elements from an array
delete fruits[3]
console.log(fruits)

console.log("********************************************************************")

// Merging of arrays
console.log(fruits.concat(myArray));
console.log(fruits.concat(myArray, cars))

console.log("********************************************************************")

// slice()
console.log(fruits.slice(1));       // created a new array
console.log(fruits);
console.log(fruits.slice(2));       // created a new array
console.log(fruits);

console.log("********************************************************************")

// sort()
console.log(fruits.sort());     // Capital letter is given importance here

let nums = [9, 4, 6.78, 2.34, 100, 500, 333.33]
console.log(nums.sort()); 

console.log("********************************************************************")

// reverse()
console.log(fruits.reverse())       // created a new array
console.log("After reversing array elements are: " + fruits)  
