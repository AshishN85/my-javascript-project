// Creating a object
let person = {
    firstName : "Ashish",
    lastName : "Naidu",
    age : 39,
    weight : 67.5,
    active : true,
    "e-mail" : "test.best@example.com" 
}

// Accessing Object properties
console.log(person["firstName"])

// module person
// let person: {
//     firstName: string;
//     lastName: string;
//     age: number;
//     weight: number;
//     active: boolean;
//     "e-mail": string;
// }
console.log(person.age)
console.log(person.active)
console.log(person["e-mail"])

console.log("********************************************************************")

// Add new property to existing object
person["height"] = 5.6;
person.state = "Telangana";

console.log(person)

console.log("********************************************************************")

// Update existing property value
person["weight"] = 63.5;
person.age = 40;

console.log(person)

console.log("********************************************************************")

// Remove existing property from an object
delete person.age;
delete person["e-mail"];

console.log(person)

console.log("********************************************************************")



// for-in loop***
for(let x in person) {
    console.log(x)      // It is printing only property 'Keys'
}

console.log("********************************************************************")

for(let y in person) {
    console.log(person[y])      // It is printing only property 'Values'
}

console.log("********************************************************************")

for(let z in person) {
    console.log(z + "  = " + person[z])      // It is printing both property 'Keys & Values'
}

console.log("********************************************************************")



// A 'Function' created outside the 'Object' is called a function.
// A 'Function' created inside the 'Object' is called a method.
// A 'Method' is also a kind of a property in an object.

let employee = {
    empName : "Siva",
    empID : 102,
    empJobProfile : "Senior Consultant",
    empSalary : 330000,
    empStatus : false,
    bonus : function () {
            // 'this' keyword refers to the current object (employee) that invokes this method
            // The 'this' keyword is used to access properties of the same object.
            return((this.empSalary * 10)/100)
    },
    access : function () {
                if (this.empStatus === true) {
            return {
                name: this.empName,
                id: this.empID,
                role: this.empJobProfile,
                salary: this.empSalary,
                bonus: this.bonus()
            };
        } else {
            return "Access denied: Employee is inactive.";
        }
    }
};

console.log(employee.bonus);
console.log(employee.bonus());
console.log("*****************************")
console.log(employee.access);
console.log(employee.access());
