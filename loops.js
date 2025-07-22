//specific logic repeatedly implement 


//print counting from 1 to 10 

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)


for(let i=1; i<=10; ++i){
console.log(i)
}


//for(initialisation, cndition, increment/decrement){
//     logic
// }

// let array = [1,2,3,4,5,6,7,8,9]
// for(let i=0, j=array.length-1; i<array.length; i++){

//     console.log(array[i], array[j]);
//     j--;
// }

//5 table
//5x1=5
//5x2=10
//5x3=15
//5x4=20
//5x5=25

// for(let i=1;i<=10;i++){
//     console.log(`5x${i}=${5*i}`)   
// }

//1 to 80 -> print even numbers 
// for(let i =2 ; i<=80; i+=2){
//     console.log(i)
// }

// for(let i=1; i<=80; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(let i=1; i<=40; i++){
//     console.log(2*i)
// }


//inital number = 3
//3^1, 3^2, 3^3....3^10

// for(let i=1; i<=10; i++){
//     console.log(3**i)
// }

let arr = [1, 3, 5, 3, 6, 36, 3,6, 3, 5, 3, 3, 6];
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...
// return index of 36

// arr[i]
//arr.length or arr.size

for(let i=0 ; i<arr.length; i++){
    let value = arr[i];
    if(value===36){
        console.log(i)
    }
}


// arr=[2, 4, 6, 3, 5, 7, 11, 22, 33, 44, 55];

// //multiples of 3 
// //print the number that is a multiple of 3 and its index 

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%3==0){
//         console.log(arr[i], i)
//     }
// }


// 1 to 100 

// let sum = 0

// for(let i=1; i<=100; i++){
//     sum+=i
// }
// console.log(sum)


let arr1 = [-10, 33, -10, -20, 4, 6, 35, 2, 5, 3,5 ]

// //print the largest number using for loop 

 max = arr1[0];

for(let i=1; i<arr1.length; i++){
    if(arr1[i]>max){
        max=arr1[i]
    }
}


for(let i=1; i<10; i++){
    console.log(i)
}


console.log(max);



// for(let i= arr.length; i>=0; i--){

// }

// *
// **
// ***
// ****
// *****

// for(let i=0; i<6; i++){
// console.log("*".repeat(i));
// }

// for(let i=0; i<6; i++){
//     let line = ""
//     for(let j=0; j<=i; j++){
//         line+="*"
//     }
//     console.log(line)
// }


//1 to 100, you have to count number of multiples of 3 or 5 
//1
//2
//3 count = 1
//4
//5 count = 2
//6 count 3 