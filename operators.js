//Arithmetic Operators
//Assignment Operators
//Relational or Comparison Operators
//Logical Operators

//Arithmetic Operators => +, -, *, **, /, %, ++, --

//Assignment Operators => =, +=, -=, *=, /=, %=

//Relational or Comparison Operators => ==, ===, !=, !==, >, <, >=, <=, ?

//Logical Operators => &&, ||, !
let x = 22, y = 10;
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)
console.log(x++)
console.log(x)
console.log(x--)
console.log(x)
console.log("***********************************")
console.log(++x)
console.log(x)
console.log(--x)
console.log(x)

console.log("=================================================================")

let m = 103, n = 50;
m += n    // m = m + n
console.log(m)

m -= n    // m = m - n
console.log(m)

m *= n    // m = m * n
console.log(m)

m /= n    // m = m / n
console.log(m)

m %= n    // m = m % n
console.log(m)

console.log("=================================================================")

let p = 35, q = 16;
console.log(p == q)
console.log(p === q)
console.log(p != q)
console.log(p !== q)
console.log(p > q)
console.log(p < q)
console.log(p >= q)
console.log(p <= q)

// Ternary Operator
console.log(p < q ? p : q)      // it will print 'q' value as condition is 'False'
console.log(p > q ? p : q)      // it will print 'p' value as condition is 'True'

console.log("=================================================================")

let a=89, b=67, c=42;
console.log((a > b) && (b > c))
console.log((a < b) && (b > c))
console.log((a < b) || (b > c))
console.log((a > b) || (b < c))
console.log("***********************************")
// Negation operator
console.log((a > b))
console.log(!(a > b))
console.log((a < b))
console.log(!(a < b))
