// Extras - #10(2)

// modules in node js

// we can create a module in node js by creating a new file 
// and exporting the functions or variables that we want to use in other files
// we can use the require function to import the module in another file

import { add, subtract } from './modulesDemo1.js';

console.log(add(5, 3));
console.log(subtract(5, 3));
