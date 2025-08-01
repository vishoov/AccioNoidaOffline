let arr = [1, 2, 3, 4, 5];
let target =4;


function binarySearch(arr, targer){
    let left =0;
    let right = arr.length-1;
    let i = 1;
    while(left<=right){
        console.log("step number:", i++)
        let mid = Math.floor(left+(right-left)/2) //to prevent overflow of variable

        if(arr[mid]===target){
            return mid; //found the target
        } else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }

    return -1;


}


console.log(binarySearch(arr, target));



// let dupes = [1,2,2,2,2,4,5,5]
//target = 2;

function firstOccurence(arr, targer){
    let left =0;
    let right = arr.length-1;
    let i = 1;
    while(left<=right){
        console.log("step number:", i++)
        let mid = Math.floor(left+(right-left)/2) //to prevent overflow of variable
        let firstIndex = -1;
        if(arr[mid]===target){
            firstIndex = mid;
            right = mid - 1; //continue searching in the left half
        } else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }

    return firstIndex;


}


//find the last occurence 


//Find element just greater than target
let arr2 = [1, 2, 3, 4,4, 5];
let target2 = 4; //output should be 4

function nextgreater(arr, target2){
    let left =0;
    let right = arr.length-1;
    let i = 1;
    let result =-1;
    while(left<=right){
        console.log("step number:", i++)
        let mid = Math.floor(left+(right-left)/2) //to prevent overflow of variable
    if(arr[mid]>target2){
            result = arr[mid]; 
            right = mid - 1; 
        } else{
            left=mid+1; 
        }

}
    

    return result;


}

console.log(nextgreater(arr2, target2));