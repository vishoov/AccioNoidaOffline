// //2D Arrays 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let Twoarray = [
//     [1, 2, 3, 4],
//     [2, 3, 4, 5],
//     [3, 4, 5, 6],
//     [4, 5, 6, 7]
// ]

// "black"
// "white"

// let chess = [
//     ["black", "white", "black", "white", "black", "white", "black", "white"],
//     ["white", "black", "white", "black", "white", "black", "white", "black"],
//     ["black", "white", "black", "white", "black", "white", "black", "white"],
//     ["white", "black", "white", "black", "white", "black", "white", "black"],
//     ["black", "white", "black", "white", "black", "white", "black", "white"],
//     ["white", "black", "white", "black", "white", "black", "white", "black"],
//     ["black", "white", "black", "white", "black", "white", "black", "white"],
//     ["white", "black", "white", "black", "white", "black", "white", "black"]
// ]

// console.log(chess[3][4])


// console.log(Twoarray[0][0])

// const first = Twoarray[0][0]


// for(let i=0; i<Twoarray.length; i++){
//     // console.log(Twoarray[i])
//     for(let j=0; j<Twoarray[i].length; j++){
//         console.log(Twoarray[i][j])
//     }
// }


// // user-> name, age, email
// let users = [
//     ["John", 25, "john@gmail.com"],
//     ["Jane", 30, "jane@gmail.com"]
// ]

// console.log(users[1][2])


// // Inialize a 2D array
// //direct initialisation 
// // let chess = [
// //     ["black", "white", "black", "white", "black", "white", "black", "white"],
// //     ["white", "black", "white", "black", "white", "black", "white", "black"],
// //     ["black", "white", "black", "white", "black", "white", "black", "white"],
// //     ["white", "black", "white", "black", "white", "black", "white", "black"],
// //     ["black", "white", "black", "white", "black", "white", "black", "white"],
// //     ["white", "black", "white", "black", "white", "black", "white", "black"],
// //     ["black", "white", "black", "white", "black", "white", "black", "white"],
// //     ["white", "black", "white", "black", "white", "black", "white", "black"]
// // ]

// //Array.from() method

// //You have to create a 2D array of size 3x4
// const matrix = Array.from({ length: 3 }, () => Array(4).fill("Heloo"));

// console.log(matrix);

// //using nested for loop
// const rows = 3;
// const cols = 4;
// const matrix2 = [];
// const name = "Hello";
// const age = 20;



// for (let i = 0; i < rows; i++) {
//     matrix2[i] = [];
//     for (let j = 0; j < cols; j++) {
//         matrix2[i][0]=name;
//         matrix2[i][1]=age;
//     }
// }

// console.log(matrix2);

// //using Array constructor with fill and map


// const matrix3 = Array(rows).fill().map(() => Array(10).fill("Hell"));

// const matrix5 = Array(5).fill(0)
// console.log(matrix5)

// let matrix6=[]
// for(let i=0; i<5; i++){
//     matrix6[i] = Array(5).fill(i+1);
// }

// console.log(matrix6);

// let col =3;
// let row = 2;
// const map = [
//     ["col 0", "col 1", "col 2"],
//     ["col 0", "col 1", "col 2"],
//     ["col 0", "col 1", "col 2"],
//     ["col 0", "col 1", "col 2"]
// ]


// for(let i=0; i<4; i++){
//     console.log(map[i][1])
// }

// //dynamic 2D array generation
// function generateArray(rows, cols){
//     let value = 1;
//     const arr = Array.from({length:rows}, ()=>
//      Array.from({length:cols}, ()=> value++)
//     )

//     return arr;
// }

// const seqMatri = generateArray(3, 4);
// console.log(seqMatri);





// // Problem: Create the following 2D arrays using different initialization methods:

// // A 3x3 matrix filled with zeros

// // let zeroMat = [];
// // for(let i=0; i<3; i++){
// //     zeroMat[i] = [];
// //     for(let j=0; j<3; j++){
// //         zeroMat[i][j] = 0;
// //     }
// // }

// // console.log(zeroMat);

// // let zeroMat = Array.from({
// //     length:3
// // },
// // ()=>{
// //     return Array(3).fill(0);
// // })

// // console.log(zeroMat);

// // let zeroMat = Array(3).fill().map(()=>Array(3).fill(0));
// // console.log(zeroMat);


// // let zeroMat = [
// //     [0, 0, 0],
// //     [0, 0, 0],
// //     [0, 0, 0]
// // ]




// // A 2x4 matrix with sequential numbers (1-8)
// // [[1,2,3,4],
// // [5,6,7,8]]


// let seqArray = []
// let value = 1;
// for(let i=0;i<2; i++){
//     seqArray[i]=[];
//     for(let j=0; j<4; j++){
//         seqArray[i][j]=value++;
//     }
// }

// console.log(seqArray);
// let value =1;
// let seqArray = Array(2).fill().map(()=>{
//     return Array(4).fill().map(() => value++);
// })


// console.log(seqArray);

// let value=1;
// let seqArray = Array.from({length:2}, ()=>
//     Array.from({length:4}, ()=> value++))
// console.log(seqArray);







// // A 4x4 identity matrix

// [
//     [1, 0, 0, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1]
// ]


//for loop 
// let identity = []
// for(let i=0; i<4; i++){
//     identity[i]=[];
//     for(let j=0; j<4; j++){
//     if(i==j){
//         identity[i][j]=1;
//     }
//     else{
//         identity[i][j]=0;
//     }
//     }
// }

// // console.log(identity);
// let identity = Array.from({length: 4}, (_, i) => 
//     Array.from({length: 4}, (_, j) => (i === j ? 1 : 0))
// );
// console.log(identity);




