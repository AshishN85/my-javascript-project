// #13

// OOPs concept

class Student {

    // Creating a 'constructor'
        constructor(ID, Name, Grade) {
        this.sID = ID;
        this.sName = Name;
        this.sGrade = Grade
    }

        display() {
        console.log(this.sID, this.sName, this.sGrade)
    }

    //     constructor() {         //SyntaxError: A class may only have one constructor
    //     this.sID = 654;
    //     this.sName = "Crazy";
    //     this.sGrade = 'M'
    // }
}

// Calling a 'constructor' method while 'object' creation only
// At the time of 'object' creation, 'constructor' will automatically invoke
let stu = new Student(103, "Ashish", "A");
stu.display();
