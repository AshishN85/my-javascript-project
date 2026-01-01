// OOPs concept

// Creating a 'class'
class Student {

    // Global variables
    firstName = "Siva";
    lastName = "Reddy";
    age = 37;

    // Creating a 'method'
    setDetails() {
        // Local variables
        // If I want to make these variables belong or available to the class,
        // we have to use 'this' keyword
        // 'this' is always represents a 'class'
        this.sID = 102;
        this.sName = "Ashish";
        this.sGrade = 'A'
    }

    display() {
        console.log(this.sID, this.sName, this.sGrade)
    }

        setDetails1(ID, Name, Grade) {
        this.sID = ID;
        this.sName = Name;
        this.sGrade = Grade
    }
}

// Creating a 'object'
let stu = new Student();

// Accessing 'methods' of a 'class' using created 'object'
stu.setDetails();
stu.display();

// Accessing 'method' which has arguments
stu.setDetails1(999, "Prashanth", "F");
stu.display();

console.log("*********************************************")

// Accessing 'global variables' of a class using created 'object'
console.log(stu.firstName)
console.log(stu.lastName)
console.log(stu.age)

console.log("********************************************************************")

// Multiple objects created for the same class
let stu1 = new Student();
let stu2 = new Student();
let stu3 = new Student();

stu1.setDetails1(222, "Dilip", "D");
stu1.display();

stu2.setDetails1(56, "Arun", "B");
stu2.display();

stu3.setDetails1(97, "Naveen", "C");
stu3.display();

console.log("********************************************************************")

console.log(stu2.firstName)
console.log(stu2.lastName)
console.log(stu2.age)
