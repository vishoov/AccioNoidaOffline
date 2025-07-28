let matrix1=[
    [1,2],
    [3,4]
]

let matrix2=[
    [5,6],
    [7,8]
]



//add these matrices
// Output: [[6, 8], [10, 12]]


let result =[]

for(let i=0; i<matrix1.length; i++){
    result[i]=[];
    for(let j=0; j<matrix1[i].length; j++){
        result[i][j]=matrix1[i][j] + matrix2[i][j];
    }

}



// result -> transpose
// [
// [6, 8],
// [10, 12]
// ]

//[
//     [6, 10],
//     [8, 12]
// // ]

// [
//     [6, 8],
//     [10, 12]
// ]

console.log(result)

let transposed =[]

for(let i=0; i<matrix1.length; i++){
    transposed[i]=[];
    for(let j=0; j<matrix1[0].length; j++){
        transposed[i][j]=result[j][i]
    }
}

console.log(transposed);


//print the diagonal elements of the transposed matrix

for(let i=0; i<transposed.length; i++){
    for(let j=0; j<transposed[i].length; j++){
        if(i===j){
            console.log(transposed[i][j]);
        }
    }
}
