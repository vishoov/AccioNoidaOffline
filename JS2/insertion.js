//Insertion Sort

// it builds the final array one element at a time

let arr = [4,3,5,6,2,1];


//cureent element 
//first pass 3,4,5,6,2,1
//second pass 3,4,5,6,2,1
//third pass 3,4,5,6,2,1
//fourth pass 2,3,4,5,6,1
//fifth pass 1,2,3,4,5,6


//initial - 23,1,10,5,2
//first pass 1,23,10,5,2
//second 1,10,23,5,2
//third 1,5,10,23,2
//fourth 1,2,5,10,23


// Algorithm

//this divides the array into two parts

//Sorted portion -> initally contains only the first element
//unsorted portion -> contains remaining elements

//for each element in UNSORTED PORTION 
//1. remove the element from its current position
//2. find the correct position in the sorted
//3. shift the elements as needed to make space 
//4. insert the element at the correct position

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let key = arr[i]; //current element to be compared and inserted into the sorted portion
        let j = i-1;  //this is the bound of the sorted array

        //move the elements greater than key, one position ahead 
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=key;
    }
    return arr;
}




console.log(insertionSort([2,5,4,3,8,7,6,0,9,12,34,76]))

//Time Complexity Analysis

//Best Case -> sorted array -> O(n) -> because the outer for loop will necessarily check all the elements once 
//average and worst -> O(n2) -> elements random order amd the array is sorted in revese order


//Space Complexity O91) -> in place sorting

// Properties


function insertionSortBinary(arr){
    for(let i=1; i<arr.length; i++){
        let key = arr[i]; //current element to be compared and inserted into the sorted portion

        let left=0, right=i;
        //binary search
        while(left<right){
            let mid = Math.floor(left+(right-left)/2);
            if(arr[mid]<=key){
                left=mid+1;
            }else{
                right=mid;
            }
        }

        //shifting
        for(let j=i-1; j>=left; j--){
            arr[j+1]=arr[j];
        }

        arr[left]=key;
    }
    return arr;
}

//benifits-> reduces the comparisons from O(n) to O(logn) per insertion
//limitation -> overall time complexity remains same

console.log(insertionSortBinary([3,4,5,8,7,6,11,99,77,55,43,56,76]))


function insertionSortEarly(arr){
    for(let i=1; i<arr.length; i++){
        let key = arr[i]; //current element to be compared and inserted into the sorted portion

        if(key>=arr[i-1]) continue;

        let j = i-1;  //this is the bound of the sorted array

        //move the elements greater than key, one position ahead 
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=key;
    }
    return arr;
}



//recusrive implementation of insertion sort 

function insertionSortRecursion(arr, n=arr.length){
    
    if(n<=1) return arr;

    insertionSortRecursion(arr, n-1)

        let key = arr[i]; //current element to be compared and inserted into the sorted portion

        let last = arr[n-1];

        let j = n-2;  //this is the bound of the sorted array

        //move the elements greater than key, one position ahead 
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=last;

        return arr;
    

}


// Question 1: Real-time Leaderboard System
// Scenario: You're building a gaming leaderboard that receives score updates in real-time. New scores arrive frequently, and you need to maintain a sorted top-5 list efficiently.

// Problem: Implement a leaderboard system that can handle incoming scores and maintain sorted order.

let topScores = []; //update this array making sure only 5 elements are here that are top scores 

function addScore(score){

    let j = topScores.length-1;

//shifting
    while(j>=0 && topScores[j]>score){
        topScores[j+1]=topScores[j];
        j--;
    }


  
    topScores[j+1] = score;

        if(topScores.length>5){
            topScores=  topScores.slice(-5);
        }

    

        // console.log(topScores)
}

addScore(10)
addScore(20)
addScore(100)
addScore(60)
addScore(80)
addScore(70)

addScore(30)
addScore(40)
addScore(50)
addScore(90)


console.log(topScores)


//This is an ONLINE algorithm 


//Optimal use cases

//small arrays (n<50)
//nearly sorted data 
//online algorithms 
//memory constrained elements