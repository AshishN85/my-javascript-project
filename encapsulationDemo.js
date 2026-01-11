// #15

// OOPs concept

// class Student {

//     constructor() {
//         let name, marks;
//     }

//     // Setters & Getters:-
//     getName() {
//         return this.name;
//     }

//     setName(name) {
//         this.name = name;
//     }

//     getMarks() {
//         return this.marks;
//     }

//     setMarks(marks) {
//         this.marks = marks;
//     }
// }

// let stu = new Student();
// stu.setName("John")
// stu.setMarks(90)

// console.log(stu.getName())
// console.log(stu.getMarks())

// // this.name and this.marks are public properties. That means anyone could still do this:-
// stu.name = "Hacker";
// stu.marks = 0;
// // True encapsulation in JavaScript requires private fields, 
// // so the internal data cannot be accessed directly. In modern JS, this is done with #

// console.log(stu.getName())
// console.log(stu.getMarks())

console.log("********************************************************************")

class Student {
    // Private fields
    #name;
    #marks;

    // Setters & Getters
    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getMarks() {
        return this.#marks;
    }

    setMarks(marks) {
        if(marks >= 0 && marks <= 100){         // validation example
            this.#marks = marks;
        } else {
            console.log("Invalid marks!");
        }
    }
}

let stu = new Student();
stu.setName("John");
stu.setMarks(90);

console.log(stu.getName());  
console.log(stu.getMarks()); 

// stu.#name = "Hacker"; // ❌ Error! Cannot access private field
