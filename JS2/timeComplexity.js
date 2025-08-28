//complexity Analysis is the study of how an algorithm's resource requirement's (time, and memory) growth related to the input size 


//Why is complexity analysis important
//Performance optimization -> when we need to identify what is causing our code to be executed slowly
//Scalability -> ensures that a large number of users can use our application
//Resource Management -> helps optimise time and memory 

//[2,3,4,8,7,6,1]
//loop-> find the samlled element -> add it to the result array

//selection sort 

//Algorithm Selection -> helps in choosing the algorithm based on the constraint 
//code reviews -> provides objective criteria for evaluating the code quality 


// Time Complexity
// how much time is the algorithm taking as compare to the size of input

//Space Compleexity
// tells how much space except for the input we need to accomplish the working of solution

// Complexity

//Big O Notation (O)
//big o represents the upper bound or worst-case scenario of an algorithm's complexity





//1 second
//arr.length seconds
//0 seconds 



function getFirstElement(arr) {
    console.log("Hello")
    return arr[0]; //it will always take one second


}


//n
//Time complexity -> O(1)

// constant Time


//exanple 2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9  => 1
// let arr2 = [1, 23, 4, 5, 3,5 3, 5, 3,5 ,3 5, 3, 5,3 ,5 3, 5, 3, 5,3 ,5 ,3 5, 3, ,4 5, 6, 4,3 ,5 ,5 3, 5, ,5, 5 ]]




function findMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

// Time y = 1500n

//O(n)


// Time directly proportional to arr.length
//linear time 

// y, n

// y=kn

// arr=10


function findPairs(arr) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {       // n iterations
        for (let j = i + 1; j < arr.length; j++) { // n iterations
            pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}

//time = n*n

//y= k*n*n
// k=1
//k=100

//Time = O(n^2)

//quadratic 

function countElements(arr){
    count=0;
    for(let i=0;i<arr.length; i++){
        count+=1
    }
    return count
}


//Big O -> tells the worst case scenario -> helpful 
// Big Q Notation -> average case 
//Big Omega -> tells best case of the algorithm

//lower bound

function countVowels(str){
    let count =0;
    const vowels="aeiouAEIOU";

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

//O(n)

let userProfile = "abcdefghijklmnopqrstuvwxyz";
let map = new Set();

for (let i = 0; i < userProfile.length; i++) {
  for (let j = i + 1; j < userProfile.length; j++) {

    map.set(userProfile.slice(i, j));
  }
}

const doubled = arr.map(x=>x*2)

const evens = arr.filter(x=>x%2==0)



function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {           
        for (let j = 0; j < n - i - 1; j++) {   
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function powerSet(arr) {
    if (arr.length === 0) return [[]];
    
    const first = arr[0];
    const rest = powerSet(arr.slice(1));
    
    return rest.concat(rest.map(subset => [first, ...subset]));
}

function fibonnaci(n) {
    if (n <= 1) return n;
    return fibonnaci(n - 1) + fibonnaci(n - 2);
}


//[1, 2, 3, 4, 5]

//n-> n/2-> n/4-> n/8.....1
//n/2^k=1
// k=log(n) -> logn-> O(logn) 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


function matrixMultiplication(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {        // n iterations
        result[i] = [];
        for (let j = 0; j < b[0].length; j++) {  // n iterations
            result[i][j] = 0;
            for (let k = 0; k < b.length; k++) { // n iterations 
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}



function complexExample(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }//O(n)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + arr[j]);
        }
    }//O(n2)
    arr.forEach(element => {
        console.log(element * 2);
    });//O(n)
    
    return sum;
}



//Time Complexity = O(n)+O(n2)+O(n) => O(n2) + 2*O(n)


function hasSubsetSum(arr, target) {
    const n = arr.length;
    const dp = Array(n + 1).fill().map(() => Array(target + 1).fill(false));
    
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    } //n
    
    for (let i = 1; i <= n; i++) { //n
        for (let j = 1; j <= target; j++) {  //target
            dp[i][j] = dp[i-1][j];
            
            if (j >= arr[i-1]) {
                dp[i][j] = dp[i][j] || dp[i-1][j - arr[i-1]];
            }
        }
    }
    
    return dp[n][target];
}



function floydWarshall(graph) {
    const V = graph.length;
    const dist = Array(V).fill().map(() => Array(V).fill(Infinity));
    for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
            if (i === j) dist[i][j] = 0;
            else if (graph[i][j] !== 0) dist[i][j] = graph[i][j];
        }
    }
    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}










// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // log n levels
    const right = mergeSort(arr.slice(mid));   // log n levels
    
    return merge(left, right); // O(n) to merge
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}



//Space Complexity -> how much extra space we want?
// input->n

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
//O(1) -space 


function inorderTraversal(root) {
    if (!root) return [];
    
    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);
    
    return [...left, root.val, ...right];
}



function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}
