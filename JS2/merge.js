

//DIVIDE
function mergeSort(arr, left, right){
    //base case
    if(left >=right) return;


    //recursive case
    const mid = Math.floor((left+right)/2);

    //left half
    mergeSort(arr, left, mid);

    //right half
    mergeSort(arr, mid + 1, right);

    //merge the two halves
    merge(arr, left, mid, right);

}

//CONQUER-> individual elements are sorted

//MERGE
function merge(arr, left, mid, right){
    const n1 = mid-left+1; //size of left subarray
    const n2 = right - mid; //size of right subarray

    //create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);


    //Copy data to temp arrays
    for( let i=0; i<n1; i++){
        L[i] = arr[left + i];
    }

    for( let j=0; j<n2; j++){
        R[j] = arr[mid + 1 + j];
    }

    //merge the temp arrays back into arr
    let i=0; //initial index of first subarray
    let j=0; //initial index of second subarray
    let k=left; //initial index of merged subarray


    while(i<n1 && j<n2){
        if(L[i]<R[j]){
            arr[k]=L[i];
            i++;
        }else{
            arr[k]= R[j];
            j++;
        } 
        k++;
    }

    while(i<n1){
        arr[k]= L[i];
        i++;
        k++;
    }

    while(j<n2){
        arr[k]= R[j];
        j++;
        k++;
    }
    
}

const arr = [38, 27, 43, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr)

