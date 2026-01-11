// #16

// OOPs concept

// Single Inheritance:-
class A {       // Parent class, Super class, Base class
    a = 100;

    display() {
        console.log(this.a)
    }
}

class B extends A       // Child class, Sub class, Derived class
{           
    b = 300;

    show() {
        console.log(this.b)
    }
}

let bobj = new B();
bobj.display();
bobj.show();
