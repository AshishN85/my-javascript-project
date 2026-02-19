// #4

// while loop or controlled loop
// do-while loop
// for loop
// for-in loop
// for-of loop

let i = 1;      // Starting point or Initialization
while(i <= 10)      // Condition need to be false at certain point of time
{
    console.log(i)
    i++;    // i = i + 1    // Increment
}

console.log("*************************")

let j = 10;      // Starting point or Initialization
while(j >= 1)      // Condition need to be false at certain point of time
{
    console.log(j)
    j--;    // j = j - 1    // Decrement
}

console.log("*************************")

let k = 0;      // Starting point or Initialization
while(k <= 10)      // Condition need to be false at certain point of time
{
    console.log(k)
    k+=2;    // k = k + 2    // Increment
}

console.log("********************************************************************")

let m = 100;
do 
{
console.log(m)
m++;
}
while(m <= 10);     // Condition is checked after executing the statement at least once

console.log("********************************************************************")

for(n = 0; n <= 20; n+=3)       //(initialization; condition; increment or decrement)
/* first step:- assign the initial value to the variable(only once)
second step:- check the condition
third step:- execute the statement inside the loop body
fourth step:- increment/decrement the variable
fifth step:- go back to second step */
{
    console.log(n)
}

console.log("********************************************************************")

let ipl = 1;          // Initialization
let total = 0;      // Variable to store sum
while (ipl <= 10) {   // Condition
    total = total + ipl;   // Add current value to total
    ipl++;                 // Increment
}
console.log("Total:", total);

console.log("********************************************************************")

let total1 = 0;   // Variable to store sum
for (let i = 1; i <= 5; i++) {
    total1 = total1 + i;   // Add current value to total1
}
console.log("Total:", total1);

console.log("********************************************************************")

for (let i = 1; i <= 23; i++) {
    if (i % 2 === 0) {   // Check if the number is even
        console.log(i);   // Print the even number
    }
}

console.log("********************************************************************")

let kpo = 0;      // Starting point or Initialization
while(kpo <= 11)      // Condition need to be false at certain point of time
{
    if (kpo % 2 === 0) {   // Check if the number is even
        console.log(kpo);   // Print the even number
    }
    kpo++;    // Increment
}

console.log("********************************************************************")

// Nested for loop
for(i = 1; i <= 3; i++) {
    for(j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

console.log("********************************************************************")

let firstName = "Ashish"
for(let i = 0; i < firstName.length; i++) {
    // console.log(firstName[i]);
    console.log(firstName.charAt(i));
}

console.log("********************************************************************")

let lastName = "Naidu"
for(let i = lastName.length - 1; i >= 0; i--) {
    console.log(lastName[i]);
    // console.log(lastName.charAt(i));
}
