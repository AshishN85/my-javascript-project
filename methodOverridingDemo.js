// #17

// OOPs concept

// In JavaScript, when a child class provides its own implementation of a method that already exists 
// in the parent class, 
// it is called method overriding.

// Why this is method overriding:-
// Bank defines roi()
// AXISBank and SBIBank redefine the same method name
// JavaScript decides at runtime which roi() to execute based on the object type

// Multi-level Inheritance:-
class Bank {

    // Method defined in the parent class
    // This method returns a default rate of interest
    roi() {
        return 0;
    }
}

class AXISBank extends Bank {

    // Overriding the roi() method of the parent class
    // This version returns AXIS Bank's rate of interest
    roi() {
        return 10.5;
    }
}

class SBIBank extends Bank {

    // Overriding the roi() method of the parent class
    // This version returns SBI Bank's rate of interest
    roi() {
        return 7.5;
    }
}

let sbi = new SBIBank();
// Calls the overridden roi() method from SBIBank
console.log(sbi.roi());

let axis = new AXISBank();
// Calls the overridden roi() method from AXISBank
console.log(axis.roi());
