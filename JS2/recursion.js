

// // function factorial(n){
// //     //base case
// //     if(n<=1){ 

// //         return 1;
// //     }

// //     //recursive statement

// //     return n*factorial(n-1);
// // }


// // console.log(factorial(5))


// function fibonacci(n){
//     //base case 
//     if(n<=1){
//         return n;
//     }


//     //recursive case
//     return fibonacci(n-1) + fibonacci(n-2);
// }


// console.log(fibonacci(5))


// // array sum
// let array = [1,2,3,4,5,6,7,8,9]

// //1. identify the problem 
// //2. define the recursive statement 
// //3. defne the base case 
// //4 test and debug

// function arraySum(arr, index=0){
//     //base case
//     if(index>arr.length-1){
//         return 0;
//     }

//     //recursive call
//     return arr[index]+arraySum(arr, index+1)
// }


// console.log(arraySum(array))

function BinarySearch(arr, target, left=0, right=arr.length-1){

    //base case
    if(left>right) return -1;

    let mid = Math.floor(left+(right-left)/2);

    console.log(left, right, mid);
    //2nd base case: answer found
    if(arr[mid]==target) return mid;

    //recusrive calls
    if(arr[mid]>target){
    return BinarySearch(arr, target, left, mid-1);
}
    
return BinarySearch(arr, target, mid+1, right);
}    





const arr = [1,3,5,7,9,11,13,15,2312425252];
console.log(BinarySearch(arr, 13));