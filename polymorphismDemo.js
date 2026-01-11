// #20

// OOPs concept

class Shape {

    draw() {
        return "I'm the generic shape";
    }
}

class Square extends Shape {

        draw() {
        return "I'm a square";
    }
}

class Circle extends Shape {

        draw() {
        return "I'm a circle";
    }
}

let s = new Shape();
console.log(s.draw());

s = new Square();
console.log(s.draw());

s = new Circle();
console.log(s.draw());

console.log("********************************************************************")

// Polymorphism for a function:-
// a) Method overriding (runtime polymorphism)
class Animal {
    speak() {
        return "Animal sound";
    }
}

class Dog extends Animal {
    speak() {
        return "Bark";
    }
}

let a = new Animal();
console.log(a.speak());

let d = new Dog();
console.log(d.speak());
