// #3

// Control Statements =>
    //1. Conditional Statements
    //2. Looping Statements
    //3. Jumping Statements

let person_Age = 10;
if(person_Age >= 18) {
    console.log("Eligible to vote!!")
}
else {
    console.log("Need to grow older!!")    
}

let math = 28;
if(math % 2 === 0) {
    console.log("Even number")
}
else {
    console.log("Odd number")
}

console.log("***********************************")

let weekNo = 4;
if(weekNo === 1) {
    console.log("Sunday!!")    
}
else if(weekNo === 2) {
    console.log("Monday!!")      
}
else if(weekNo === 3) {
    console.log("Tuesday!!")      
}
else if(weekNo === 4) {
    console.log("Wednesday!!")      
}
else if(weekNo === 5) {
    console.log("Thursday!!")      
}
else if(weekNo === 6) {
    console.log("Friday!!")      
}
else if(weekNo === 7) {
    console.log("Saturday!!")      
}
else {
    console.log("Not sure which day it is!!")
}

console.log("***********************************")

let weekDay = "Dryday";
switch(weekDay) {
    case "Sunday" : console.log(1); break;
    case "Monday" : console.log(2); break;
    case "Tuesday" : console.log(3); break;
    case "Wednesday" : console.log(4); break;
    case "Thursday" : console.log(5); break;
    case "Friday" : console.log(6); break;
    case "Saturday" : console.log(7); break;
    default : console.log("Invalid week name you have provided.")
}
