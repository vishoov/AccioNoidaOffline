

// function partition(arr, left, right){
//     let pivot = arr[right]; //last element as pivot

//     let i=left-1;

//     for(let j=left; j<=right-1; j++){
//         if(arr[j]<pivot){
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]]; //swap
//         }
//     }

//     swap(arr, i+1, right); //swap pivot with element at i+1
//     return i+1; //return the index of the pivot
// }

// function swap(arr, i, j){
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }



// function quickSort(arr, left, right){
//     if(left<right){
// //main algo

// let pi = partition(arr, left, right);

// quickSort(arr, left, pi - 1); //before partition
// quickSort(arr, pi + 1, right); //after partition
//     }
// }




// let arr = [10, 7, 8, 9, 1, 5];
// let n = arr.length

// quickSort(arr, 0, n-1);




//quickSort better code provided by mr. krishnanand yadav ji
let arr = [2,3,45,56,3,4,5,6,7,6,65,55]

function quicksort(arr){
  
if(arr.length<=1){
  return arr
}
  let pivot = arr[0]
  let left = []
  let right = []
  for(i=1;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quicksort(left),pivot,...quicksort(right)]
}
console.log(quicksort(arr))