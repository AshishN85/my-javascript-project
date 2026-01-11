// #18

// OOPs concept

class Animal {

    // Constructor of Animal class
    // It initializes the color property
    constructor(color) {
        this.color = color;
    }

    // Method to print the animal's color
    printColor() {
        console.log(this.color)
    }
}

class Dog extends Animal {

    // Constructor of Dog class
    // It receives color and food as parameters
    constructor(color, food) {

        // Calls the parent class (Animal) constructor
        // This is mandatory before using 'this' in a child constructor
        super(color);

        // Initializes the food property specific to Dog
        this.food = food;
    }

    // Method specific to Dog class
    // Displays what the dog is eating
    eating() {
        console.log("Eating:", this.food)
    }

    // Method that uses both parent and child class methods
    display() {

        // Calls inherited method from Animal class
        this.printColor();

        // Calls Dog's own method
        this.eating();
    }
}

let dog = new Dog("Black", "Chicken");
dog.printColor();
dog.eating();
