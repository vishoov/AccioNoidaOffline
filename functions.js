//any set of code that will be reused many times

let arr=[5,4,3,2,1]

//initial data input -> argument 
//function is a keyword used to declare a function

//modular -> breaking big code into smaller chunks of codes

//CODE ON DEMAND 




function sort(arr){
    //logic 
    arr.sort()


}
console.log(arr)
sort(arr)
console.log(arr)

// Function Syntax
// function keyword -> that declares a function to js
//functio name -> identifier 
//parameters or arguments -> the data that we input in the function
//that is required to implement the function logic 
//function body -> {} -> logic 
//return statement -> output from the function 

let user = {
    name:"Vishoo",
    address:"delhi"
}

// user.name
//destructuring

const { name } = user
console.log(name)

// import { useState } from React;


let arr1 = [
    {
        name:"Accio",
        address:"Noida"
    },
    {
        name:"Google",
        address:"Cali"
    },
    {
        name:"Amazon",
        address:"Gurgaon"
    }
]

for(let i=0; i<arr1.length; i++){
    greet(arr1[i])
}







const user1 = {
    name:"Accio",
    address:"Delhi"
}



//Hello my name is Accio, and I am from Delhli


function greet(object){
    // const { name, address }= object;
    const name = object.name;
    const address = object.address
    console.log(`Hello my name is ${name}, and I am from ${address}`)
}

// console.log(address)
// const value = greet(object)
greet(user1)

//Here we called the function before its declaration and it did not give any error
//this is because the functions are HOISTED!!!


// Types of Functions

// 1. function declaration

// 2 function expression

// function name(argument){
//     logic
// }
//anonymous function expression
const greeet = function(){
    console.log("Hello World")   
}

greeet()


//named function expressions

const gret = function xyz(){
    console.log("xyz")
}

// gret()

//3 Arrow Functions 
let add = (a,b) => a+b;


const fruits = ["Apple", "Banana", "Pineapple"]

console.log(fruits.map((fruit)=>fruit.length))


// ES6 arrow functions
//no this keyword binding 
//cannot be used as constructors 
//no arguments object 



//IIFE -> Immediately Invoked Functions

// const printt = (function(name) {
//     return ("IIFE executed");
// })("John");

// console.log(printt)


// Function Parameters/Arguments

// const greet = "Namaste"

const funnc = function hello(name, greet="Namaste"){
    console.log(greet,name)
}



funnc("Accio")

//rest parameters
// Rest parameters allow functions to accept indefinite number of arguments as an array
function sum(...numbers){
    let sum = 0;
    
    for(i=0; i<numbers.length; i++){
        sum+=numbers[i]
    }
    return sum;

}



console.log(sum(1, 2, 3, 4, 5, 6))
console.log(sum(1, 2, 3,4, 2, 4, 2, 3, 2, 4, 2, 4))



// Higher Order Functions

// function power(n) {
//     return function(x) {
//         return x ** n;
//     };
// }

function calculatePower(fn, number) {
    return fn(number);
}

// Example usage:
const square = power(2);        // returns a function: x => x ** 2
const cube = power(3);          // returns a function: x => x ** 3

console.log(calculatePower(square, 5)); // 25
console.log(calculatePower(cube, 2));   // 8


// function greet(name) {
//     return "Hello, " + name + "!";
// }

// function namaste(name){
//     return "Namase "+ name
// }


// function processUserInput(callback) {
//     const name = "Vishoo";
//     return callback(name);
// }

// console.log(processUserInput(greet)); // Output: "Hello, Vishoo!"



//Closure


function outerFunction(x){
  //x active
    
    function innerFunction(y){
        //y
        return x+y
    }
    return innerFunction;
}

const addFive = outerFunction(5);
console.log("output", addFive(3))
// (3) => 5 + 3 = 8

//what is the difference between function declaration and function expression

//difference between arrow function and function declaration

//what is a pure function 


//create a function that remembers it previous calls 

function createCounter(){
let num = 0;

    return function counter(){

    return ++num
}

}


const counter = createCounter()
console.log(counter()) //1
console.log(counter()) //2



//hello
//hey
//how are you
//fine 
