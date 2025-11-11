//Call Stack
// its a data structure that tracks function execution using the LIFO principle 


function firstFunction(){
    console.log("First function completed")
}

function secondfunction(){
    firstFunction();
    console.log("Second function completed")
}

function thirdfunction(){
    secondfunction()
    console.log("Third function completed")
}


thirdfunction();


// Call stack visualisation
// Step1: [Global Execution Context]
// Step 2: [Global, thirdFunction]
// Step3: [Global, thirdFunction, secondFunction]
// Step4: [Global, third, second, firstFunction]
//output -> First function completed
// Step5: [global, third, second] - firstFunction is popped
//output: Second function completed
// Step5: [global, third]
// output: third function completed
// step6: [Global]
// step7: [] Global popped, execution of the script complete

'use strict';

// Global variables
var globalVar = 'I am global';
let result = 0;

function multiply(a, b) {
  console.log(`Multiplying ${a} * ${b}`);
  const product = a * b;
  return product;
}

function calculate(x) {
  console.log(`Calculate called with ${x}`);
  
  const localVar = 10;
  
  function innerCalc(y) {
    console.log(`Inner calc: ${y}`);
    const innerResult = multiply(y, localVar);
    return innerResult + x;
  }
  
  const firstResult = innerCalc(x + 5);
  console.log(`First result: ${firstResult}`);
  
  return firstResult;
}

function processData(data) {
  console.log(`Processing data: ${data}`);
  
  if (data <= 0) {
    console.log('Base case reached');
    return 1;
  }
  
  const calculated = calculate(data);
  const recursive = processData(data - 2);
  
  return calculated + recursive;
}

console.log('=== Program Start ===');
result = processData(2);
console.log(`=== Final Result: ${result} ===`);
