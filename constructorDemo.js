// Creating a 'class'
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
}

// Calling a 'constructor' method while 'object' creation only
// At the time of 'object' creation, 'constructor' will automatically invoke
let stu = new Student(103, "Ashish", "A");
stu.display();
