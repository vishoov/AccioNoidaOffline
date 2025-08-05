

// function factorial(n){
//     //base case
//     if(n<=1){ 

//         return 1;
//     }

//     //recursive statement

//     return n*factorial(n-1);
// }


// console.log(factorial(5))


function fibonacci(n){
    //base case 
    if(n<=1){
        return n;
    }


    //recursive case
    return fibonacci(n-1) + fibonacci(n-2);
}


console.log(fibonacci(5))


// array sum
let array = [1,2,3,4,5,6,7,8,9]

//1. identify the problem 
//2. define the recursive statement 
//3. defne the base case 
//4 test and debug

function arraySum(arr, index=0){
    //base case
    if(index>arr.length-1){
        return 0;
    }

    //recursive call
    return arr[index]+arraySum(arr, index+1)
}


console.log(arraySum(array))