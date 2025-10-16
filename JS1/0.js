// // let animal = "Lion";

// // console.log()

// // 5n^2+4 || 5n^2-4 check kar lenge only if any of these values are a perfect square then only the number is a fibonacci



// function isFib(n, a=0, b=1){
//     if(n===a || n===b) return true; //base case
//     if(b>n) return false;
//     return isFib(n, b, a+b)
// }

// // console.log(isFib(0));

// // function find_substrings(input){
// //     let results = [];
// //     for(let i=0; i<input.length; i++){
// //         for(let j=i+1; j<=input.length; j++){
// //             const current = input.slice(i, j)
// //             if(results.includes(current)){
// //                 continue;
// //             }
// //             results.push(current);
// //         }
// //     }
// //     return results;
// // }

// // console.log(find_substrings('banana'));

// function find_substrings(str, i=0, j=1, result=new Set()){
//     if(i===str.length) return Array.from(result);
    
//     if(j>str.length) return find_substrings(str, i+1, i+2, result); 
//     result.add(str.slice(i, j))

//     return find_substrings(str, i, j+1, result);
// }


// console.log(find_substrings("acciojob"))



// function mergeSorted(arr1, arr2){
//     const final = [];
//     let i=0, j=0;

//     while(i<arr1.length && j<arr2.length){
//         //compare if an element from first array is smaller
//         if(arr1[i]<arr2[j]){
//             final.push(arr1[i]);
//             i++
//         } else{
//             final.push(arr2[j]);
//             j++
//         }}
//     //after atleast one array is exhausted
//     while(i<arr1.length){
//         final.push(arr1[i]);
//         i++;
//     }
//     while(j<arr2.length){
//         final.push(arr2[j]);
//         j++;
//     }
//     return final;
// }


// console.log(
//     mergeSorted([1,2,3,4,5,6,7], [2,3,4,6,8,9])
// )


const employees = [
    { department: "HR", name: "Anjali", age: 32 },
    { department: "Tech", name: "Aman", age: 28 },
    { department: "HR", name: "Rahul", age: 25 },
    { department: "Tech", name: "Sneha", age: 24 },
    { department: "Finance", name: "Kunal", age: 30 },
    { department: "Tech", name: "Divya", age: 28 },
  ];

  employees.sort(
    (a,b)=>{
        //department
        if(a.department<b.department) return -1;
        if(a.department>b.department) return 1;

        //if departments are same, compare age
        return a.age-b.age
    }
  )

  console.log(employees)