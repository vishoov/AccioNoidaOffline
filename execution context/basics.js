// console.log(name); //undefined 
// console.log(greet) 

// // var name = "salman"
// const age = 20

// function greet(){
//     return 'Hello!'
// }

// what happens during the creation phase?

// global object (Window in browser, global in Node.js) is created 
// this keyword will be bound to the global object 
// Memory space will be allocated for variables and functions
// var variables are initialised with undefined
// let and const variables ar ehoisted but remain unitialised (TDZ)
// Function declarations are stored with their entire code 



// EXECUTION PHASE
// after memory allocation, javascript is executing code line by line in this phase

// variables will recieve their assigned values and functions are invoked creating new execution contexts


// Global object and this 
// global objects serves as a container for all the global variables and built in objects 


//global scope 
var globalVar = 'I am global'
let blockscoped = 'I am block scoped'


console.log(global); //output : I am global
console.log(global.blockscoped); //output: undefined

// console.log(this===window) //output: true


//Strict mode  removes the boundation of this keyword from the window (global scrope)


// 'use strict'
// function abc(){
//     console.log(this===window);
// }
// abc()

//output = false



// Variable Environment 

// this is the memory component of our execution context where variables and functions are stored as key value pairs

// Environment Variables 

// variables that are limited to the current environment 


// Function execution context

// each function invocation will create a new Function Execution Conext (FEC) that becomes a child of its calling context

function caller(){
    console.log("tring tring")
}

caller();

// whenever a function is called, a new execution context is created with its own memory and execution phases 

// Function execution includes:
// Local variables and parameters
// Arguments object 
// scope chain reference 
// its own this binding 

function outer(){
    const outervar = 'I am outer'

    function inner(){
        const innervar = ' I am inner';

        console.log(outervar) //Accessible via scope chain
        console.log(innervar) //Local variable 
    }

    inner() //creates a new FEC for inner()
}

outer(); //create a new FEC for outer()


// Arguments objects

// functions have an arguments object containing all passed argument 
//except for arrow functions
// this ia array like but not an array

function sumAll(){
    let total =0

    console.log(arguments.length)

    for(let i=0; i<arguments.length; i++){
        total+=arguments[i]
    }

    return total;
}


console.log(sumAll(1, 2, 3, 4, 5, 6, 7))


// Modern approach -> rest parameters
function sumAllModern(...numbers){
    return numbers.reduce((sum, num)=>sum + num, 0)
}


console.log(sumAllModern(1,2,3,4,5,6,7,8))


const arrowSum = ()=>{
    console.log(arguments)
}

arrowSum(1,2,3,4,5,6,7)