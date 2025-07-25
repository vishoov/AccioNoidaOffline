// Problem: Print Hollow Diamond Pattern
// Problem Statement
// Given an integer n, print a hollow diamond pattern of stars with 2n - 1 total rows. The pattern should have stars (*) only on the boundary of the diamond and spaces inside.

// Input
// A single integer n (1 ≤ n ≤ 50) representing the number of rows in the upper half of the diamond (including the middle row).

// Output
// Print the hollow diamond pattern made of 2n - 1 rows.

// Example
// Input: 4

// Output:


// /n=4 -> i=1 -> 3
//n=4 -> i=2 ->2 
//   *
//  * *
// *   *
//*     *
// *   *
//  * *
//   *

// 2*5-1=>9

//    * 
//   * * 
//  *   *
// *     *
//*       * 
// *     * 
//  *   *
//   * *
//    *

// 7= 4*2-1
//0-> 1-> 3-> 5-> 3-> 1-> 0
// 2*(n-spaces)
//3-> 2-> 1->0 outer spaces
//

//4 



// *******
// *** ***
// **   **
// *     *
// **   **
// *** ***
// *******

function printHollowDiamond(n){
    const totalRows = 2*n-1;

    for(let i=1; i<=totalRows; i++){
        let row = '';
        let space = Math.abs(n-i);
        let innerspaces = 2*(n-space)-3;

        
        row+=' '.repeat(space);

        if(innerspaces<0){
            row+="*"
        }else{
            row+="*"
            row+=' '.repeat(innerspaces)
            row+="*"
        }

        console.log(row)
    }
}

printHollowDiamond(4)
printHollowDiamond(5)
printHollowDiamond(6)



let array = [1,2,3,4,5,5];


console.log(array["a"]=10);
console.log(array)

//type coercion 