// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ///sum using map
// let sum = 0;
// const newmap = array.map(num => {
//     sum += num
// });
// console.log("Sum using map:", sum); 
// console.log("New map:", newmap); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

const jeemarks = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// console.log("Students who are going to jee:",
//     jeemarks.filter(
//         (marks)=>{
//             marks>=0 && marks<=100

//     )
// )

console.log("Students who cleared jee",
    jeemarks.reduce(
        (krishna, curr)=>{
            if(curr>60){
                krishna++;
            }
            return krishna;
        },
        0
    )
)


//if you do not initialise the value of accumulator, it will take the first element of the array as the initial value