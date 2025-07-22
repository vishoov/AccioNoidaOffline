

// //for(initialisation, condition, operation)
// for(let i=0; i<10; i++){
//     console.log(i)
// }

// let i=1


// let result = ""
// while(i<10){
//     result+=i
//     i++;
// }

// console.log(result)
//checks the condition before implementing the operation

// do{
// }while(i<100)


// while(i<=10){
//     console.log(i*5);
//     i++;
// }





// let arr=[1, 2, 3, 4, 5, 6, 2, 1, 2, 3, 4];

// let max = arr[0];
// let i=1;

// while(i<arr.length){
//         if(arr[i]>max){
//                 max=arr[i]
//             }
//             i++;
//         }
        
//         console.log(max)
        
        let arr1=[1, 4, 5, 68, 9, 4, 5, 4, 9]
        
        //Control Flow Statements

        //break statement 


        // let i=0; 
        // while(i<arr1.length){
        //     if(arr1[i]%2==0){
        //         console.log(arr1[i]);
        //         break;
        //     }
        //     console.log('index: ', i)
        //     i++;
        // }

//         let i=0;
//         while(i<arr1.length){
//                 if(arr1[i]%2==0){
//                     i++;
//                     continue;
//                 }
//                 console.log(i);
//                 i++
//         }



// // //4969643
// let number = 90408308 
// // / %
// let i=0;
// while(i<2){
//     number= number/10;
//     console.log(number)
//     i++;
// }

// // console.log(parseInt(number%10))



// let number = 9963963964
// let i=0;
// while(number>0){
//     number=(number/10)
//     console.log(number)
//     i++
// }

// console.log(i)

let m=0;
let n =160;


// for(let i=m; i<=n; i++){
//     let digits =0;
//     let temp = i

// while(temp>0){
//     temp=parseInt(temp/10); 
//     digits++;
// }
// temp=i;
// let sum=0;
// while(temp>0){
//     let last= temp%10;
//      let value = last**digits
//      sum+=value;
//      temp=parseInt(temp/10)
// }


// }

// //i=0
// for(let i=m; i<n; i++){
//     let count=0;
//     while(i>0){
//         i=parseInt(i/10);
//         count++;
//     }
//     console.log(count);

// }

// // // Write the code here
// for(let i=m; i<=n; i++){
//     let digits=0;
//     let temp=i;
//     //1. count the number of digits in each number
//     while(temp>0){
//         temp=parseInt(temp/10)
//         digits++;
//     }
    

    // 2.extract each digit and raise it to power digits 
//     temp=i;
//     let sum=0;
//     while(temp>0){
//         let last= temp%10
//         let value = last**digits;
//         sum=sum+value;
        
//         temp=parseInt(temp/10)
        
//     }

//     //3 check if the number is armstrong
//     if(i==sum){
//         console.log(i)
//     }
// }

//     let m =1
//     let n =20
//     console.log(calculatePower(m,n))

//     function calculatePower(m, n){
//         return m**n;
//     }



let stars = 5;

for(let i=1; i<=stars; i+=2){
    let spaces = " ".repeat((stars-i)/2)
    let starr="*".repeat(i)
    const line = spaces+starr;
    console.log(line)
}


for(i=stars-2; i>=1; i-=2){
    let spaces = " ".repeat((stars-i)/2)
    let starr="*".repeat(i)
    const line=spaces+starr;
    console.log(line)
}


// do{

// }while()