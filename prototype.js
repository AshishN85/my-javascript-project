// OOPs concept

function Student() {
    this.name = "Ashish"
    this.gender = "Male"
}

Student.prototype.age = 35;

stu1 = new Student();
console.log(stu1.name, stu1.gender, stu1.age)

stu2 = new Student();
console.log(stu2.name, stu2.gender, stu2.age)

console.log("********************************************************************")

class Employee {

    constructor(eID, eName) {
        this.eID = eID;
        this.eName = eName;
    }
}

Employee.prototype.sal = 50000;

Employee.prototype.display = function() {
    console.log(this.eID, this.eName, this.sal)
}

emp1obj = new Employee(101, "David");

console.log(emp1obj.eID, emp1obj.eName, emp1obj.sal)
emp1obj.display();

emp2obj = new Employee(109, "Murray");

console.log(emp2obj.eID, emp2obj.eName, emp2obj.sal)
emp2obj.display();
