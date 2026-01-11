// #14

// OOPs concept

class Test {
    static a = 10;      // static variable
    b = 20;             // non-static variable

    static m1() {
        console.log("This m1 is a static method")
    }

        m2() {
        console.log("This m2 is a non-static method")
    }
}

// We can directly access 'static variables and methods' using 'class' name
console.log(Test.a);
Test.a = 999;
console.log(Test.a);
Test.m1();

// We cannot directly access 'non-static variables and methods' using 'class' name
console.log(Test.b);        // undefined
// Test.m2();               // TypeError: Test.m2 is not a function
