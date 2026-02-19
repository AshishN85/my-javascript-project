// Converting one datatype to another is called Type Conversion or Type Casting. 
// It can be done in two ways:
// 1. Implicit Type Conversion (Type Coercion)
// 2. Explicit Type Conversion (Type Casting)

// Type Casting
// 1. String(variableName) - Converts a value to a string
// 2. Number(variableName) - Converts a value to a number
// 3. Boolean(variableName) - Converts a value to a boolean

let num = 42;
let str = String(num);
console.log(str); // "42"
console.log(typeof str); // "string"

let bool = Boolean(num);
console.log(bool); // true
console.log(typeof bool); // "boolean"  

console.log("=================================================================")

let firstname = "John";
let firstnameNum = Number(firstname);
console.log(firstnameNum); // NaN (Not a Number)
console.log(typeof firstnameNum); // "number"

let active = true;
let activeNum = Number(active);
console.log(activeNum); // 1
console.log(typeof activeNum); // "number"

let perfect = false;
let perfectNum = Number(perfect);
console.log(perfectNum); // 0
console.log(typeof perfectNum); // "number"

console.log("=================================================================")

let emptyStr = "";
let emptyStrBool = Boolean(emptyStr);
console.log(emptyStrBool); // false
console.log(typeof emptyStrBool); // "boolean"

let zero = 0;
let zeroBool = Boolean(zero);
console.log(zeroBool); // false
console.log(typeof zeroBool); // "boolean"

let nullValue = null;
let nullBool = Boolean(nullValue);
console.log(nullBool); // false
console.log(typeof nullBool); // "boolean"

let undefinedValue = undefined;
let undefinedBool = Boolean(undefinedValue);
console.log(undefinedBool); // false
console.log(typeof undefinedBool); // "boolean"

let nanValue = NaN;
let nanBool = Boolean(nanValue);
console.log(nanBool); // false
console.log(typeof nanBool); // "boolean"

// value.toString() - Converts a value to a string
// parseInt() - Converts a string to an integer
// parseFloat() - Converts a string to a floating-point number

// value.toInt() - Converts a value to an integer
// value.toFloat() - Converts a value to a floating-point number

// value.toBoolean() - Converts a value to a boolean

// truthy and falsy values in JavaScript
// Falsy values:
// 1. false
// 2. 0
// 3. -0
// 4. 0n (BigInt)
// 5. "", '', `` (empty string)
// 6. null
// 7. undefined
// 8. NaN

// All other values are truthy, including:
// 1. "0"
// 2. "false"
// 3. []
// 4. {}    
// 5. function() {}
// 6. true
// 7. Any non-zero number
