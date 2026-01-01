// while loop
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
{
    console.log(n)
}
