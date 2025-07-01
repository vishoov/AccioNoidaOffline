//SCOPE 

//visibility 

// var number = 10;
//Global Scope -> variables declared outside any function or black have global scope, these variables are ACCESSIB:E anywhere in the javascript program considering the concept of hoisting.

// // Global scope
// var globalVar = "I am global";
// let globalLet = "I am also global";
// const globalConst = "I am global too";

// function displayGlobal() {
//     console.log(globalVar); // Accessible from inside function
//     console.log(globalLet); // Accessible from inside function
//     console.log(globalConst); // Accessible from inside function
// }

// displayGlobal(); // Works fine
// console.log(globalVar); // Works fine - accessible outside function


//characteristics 
//the variables declared in global scope can be accessed from anywhere in the program, including inside functions and blocks.
//all the global variables are stored in the window object in the browser environment.


// let number; //undefined

// function printsomething(){
//     number = 20; // Local Scope
//     console.log("Inside printsomething function: " + number); // 20
// }

// printsomething();
// console.log(number)

//FUNCTION SCOPE
// Function Scope -> Variables declared inside a function are only accessible within that function. They are not visible outside the function.
//charactestics
//variables are only accessible inside the function where they are declared.
//each function has its own scope, meaning variables declared in one function are not accessible in another function unless passed as parameters or returned.
//variables are destroyed when the function execution is completed, meaning they are not available after the function has finished executing.


//Examples

// function createUserProfile(name, email) {
//     var isValid = true; // Function-scoped validation flag
    
//     function validateEmail(email) {
//         // Helper function with access to parent scope
//         return email.includes('@') && email.includes('.');
//     }
    
//     if (!validateEmail(email)) {
//         isValid = false;
//         console.log("Invalid email format");
//         return null;
//     }
    
//     return {
//         name: name,
//         email: email,
//         isValid: isValid
//     };
// }

// var user = createUserProfile("John Doe", "john@example.com");
// // isValid and validateEmail are not accessible here
// console.log(user)
// console.log(isValid


//Variable Pollution // -> When multiple functions declare variables with the same name, it can lead to confusion and bugs. To avoid this, use unique variable names or block scope (using let or const).



// function calculateTotal() {
//     var price = 100; // Function-scoped
//     let tax = 0.08; // Function-scoped
//     const discount = 0.1; // Function-scoped
    
//     function applyDiscount() {
//         // Nested function can access parent function's variables
//         return price * (1 - discount);
//     }
    
//     var total = applyDiscount() * (1 + tax);
//     console.log(`Total: $${total.toFixed(2)}`);
//     return total;
// }

// calculateTotal(); // Works fine
// console.log(price); 


// // var x = 10;
// function foo() {

//     console.log(x);
//     let x = 20;
// }
// foo();





//Block Scope -> ES6 (2015)  introduced block scope with the `let` and `const` keywords. Variables declared with `let` or `const` inside a block (e.g., inside `{}`) are only accessible within that block.


// function blockScope(){
//     if(true){
//         var x="I am var";
//         let y = "I am let";
//         const z = "I am const";

//         console.log(x);
//         console.log(y); 
//         console.log(z); 
//     }

//     console.log(x);
//     // console.log(y); 
//     console.log(z); 

// }


// blockScope();
// i=0;

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log('var:', i), 0);
// }
// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log('let:', j), 100);
// }

// // A 
// var: 0
// var: 1
// var: 2
// let: 0
// let: 1
// let: 2

// B
// var: 3
// var: 3
// var: 3
// let: 0
// let: 1
// let: 2


// C
// var: 0
// var: 1
// var: 2
// let: 3
// let: 3
// let: 3


///4 Module Scope -> ES6 introduced modules, which allow you to create separate files with their own scope. Variables declared in a module are not accessible outside that module unless explicitly exported.


//1 line of code-> 1second 
//100000000 -> 100000000 seconds
//1lakh * 1lakh 

//modules '


import { myModule } from './module.js'; // Importing the function from module.js

// myModule(); // Calling the imported function

//Module -> A module is a self-contained piece of code that can be reused across different parts of an application. It can export functions, objects, or variables, and other modules can import them to use in their own code. This helps in organizing code and avoiding global scope pollution.

//Module Scope  -> Variables declared in a module are scoped to that module and are not accessible outside unless explicitly exported. This prevents naming conflicts and keeps the global scope clean.

// const num = Math.random(); // Example of a module-scoped variable

//Lexical Scope -> Lexical scope refers to the scope of variables based on their physical placement in the code. In JavaScript, functions are lexically scoped, meaning they can access variables from their parent scope, but not from child scopes. This is different from dynamic scope, where the scope is determined by the call stack at runtime.

// function outerFunction(x) {
//     // Outer function's scope
//     let outerVariable = x;
    
//     function innerFunction(y) {
//         // Inner function has access to outer function's variables
//         console.log(`Outer: ${outerVariable}, Inner: ${y}`);
//         return outerVariable + y;
//     }
    
//     return innerFunction; // Return the inner function
// }

// const closure = outerFunction(10); // outerFunction execution completes
// closure(5); // But innerFunction still has access to outerVariable
// // Output: "Outer: 10, Inner: 5"

// Lexical scope allows inner functions to access variables from their parent function, even after the parent function has finished executing. This is a key feature of closures in JavaScript.


// function createCounter() {
//     let count = 0; // Private variable
    
//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// console.log("counter ", counter.increment()); // 1
// console.log("counter ", counter.increment()); // 2
// console.log("counter ", counter.getCount()); // 2
// console.log(count); // ReferenceError: count is not defined


// let x = 1;
// function tricky(y = x) {
//     let x = 2;
//     return y;
// }
// console.log(tricky());

// var foo = function bar() {
//     console.log(typeof bar);
// };
// foo();
// console.log(typeof bar);



// var a = 10;
// (function() {

//     console.log(a);
//     if (true) {
//         var a = 20;
//         let b = 30;
//         console.log(a, b);
//     }
//     console.log(a, typeof b);
// })();


//10
//20 30
//20 undefined



let value = 100;
(function(value) {
    (function() {
        value += 10;
        console.log(value);
    })();
    console.log(value);
})(50);
console.log(value);



function makeMatrix() {
    let matrix = [];
    for (let i = 1; i <= 3; i++) {
        matrix[i] = [];
        for (let j = 2; j >= 0; j--) {
            matrix[i][j] = function() { return i * j; };
        }
    }
    return matrix;
}
let m = makeMatrix();
console.log(m[1][2](), m[3][0]());
