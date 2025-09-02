// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]
let arr= [1,2,4,6,3,4,5,6,7,78,8]
function products(arr){

    let product = 1;
    for(let i=0; i<arr.length; i++){
        product=product*arr[i];
    }

    let result =[];

    for(let i=0; i<arr.length; i++){
        result.push(product/arr[i])
    }

    return result;

}

console.log(products(arr))


function productwodiv(arr){
    let n = arr.length;
    const result = new Array(n).fill(1);

    let leftproduct = 1;
    //left elements' product 
    for(let i=0; i<n; i++){
        result[i]= leftproduct;
        leftproduct=leftproduct*arr[i];
    }
    

    //right elements' product
    let rightproduct =1;
    for(let i=n-1; i>=0; i--){
        result[i]= result[i]*rightproduct;
        rightproduct= rightproduct*arr[i];
    }
    return result;
}

console.log(productwodiv(arr))