

//Array is a collection of items, which can be of any type
//number, alphabets, strings, objects, arrays 


// [[], [], [], [], [], [], [], [], []]
// [[], [], [], [], [], [], [], [], []]
// [[], [], [], [], [], [], [], [], []]
// [[], [], [], [], [], [], [], [], []]
// [[], [], [], [], [], [], [], [], []]
// [[], [], [], [], [], [], [], [], []]
// [[], [], [], [], [], [], [], [], []]



//whenever we have to store a photo in computer, we store it in a 2d array
//0 to 255 

// let arr = [4, "hello"];

//properties 

//resizable and mutable 


//javascript object based 


// let arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: 5,
//     5: 6,
//     6: 7,
//     7: 8,
//     8: 9
// }


//Array methods 
let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Length", arr.length); 
//returns the length of the array
// console.log(arr.reverse())

// const reverseArr = [...arr].reverse();
// console.log("Reverse", reverseArr);
console.log(arr)
//reverses the array


arr.push(10);
//adds an element to the end of the array
console.log("Push", arr);
arr.pop();
//removes the last element of the array
console.log("Pop", arr);
arr.unshift(10);
//adds an element to the beginning of the array
console.log("Unshift", arr);
arr.shift();
//removes the first element of the array
console.log(arr);
//indexOf -> returns the index of the first occurrence of an element in the array
console.log(arr.indexOf(1));

// for(let i=0; i<arr.length; i++) {
//     if(arr[i]===5){
//         console.log(i)
//     }
// }
//includes -> returns true if the element is present in the array, otherwise false
console.log(arr.includes(5));

function includes(arr, element){
    let index = -1;

    index = arr.indexOf(element);

    if(index === -1) {
        return false;
    } else {
        return true;
    }
}


// function length(arr){
//     let count = 0;
//     while(arr[count] !== undefined) {
//         count++;
//     }
//     return count;
// }


//adding and removing elements from the array
//add -> push, unshift
//remove -> pop, shift

//splice-> removes elements from the array and returns the removed elements

// arr.splice(2, 3, 11, 12, 13);
//removes 3 elements from index 2
//arr.splice(startIndex, deleteCount, ...itemsToAdd)

console.log("Arr", arr);


arr.splice(2, 0, 11, 12, 13, 14)

console.log("Splice", arr);



let arr2= [1, 2, 3, 1, 1, 2, 3, 1];

console.log(arr2.indexOf(1));


//join -> joins the elements of the array into a string
console.log(arr2.join(" ")); // "1 2 3 1 1 2 3 1"


console.log(Math.min(...arr)); // NaN



// Create Arrays

//empty array 
const emptyArray = [];

const fruits = ["apple", "banana", "cherry"];

const mixedArray = [1, "hello", true, null, undefined, { key: "value" }, [1, 2, 3]];

//Using constructor 
//class 

const newarr = new Array(); //dynamic length 

const newarrfixed = new Array(5); //fixed length of 5

const arrayfixx = new Array(1, 2, 3, 4, 5); //array with elements 1, 2, 3, 4, 5

console.log(arrayfixx[0]);


//array.at(index) -> returns the element at the given index, if index is negative, it returns the element from the end of the array
console.log(arrayfixx.at(-2))


//Array Transformation Methods 
const numbers = [1, 2, 3, 4, 5];

// for(let i=0; i<numbers.length; i++) {
//     console.log(2*numbers[i]);
// }


//map -> creates a new array with the results of calling a provided function on every element in the calling array

const doubled = numbers.map(function(num){
    console.log( num * 2);
});
//we always input a function to map


//amazon -> search page 
//products array -> [product1, product2, product3, product4, product5]
// product{
    // name: "product1",
    // price: 100,
    // rating: 4.5,
    // category: "electronics"
// }
const condition =  function(num){
    if(num % 2 === 0) {
        return true; //keep the element
    }
    return false; //remove the element
}

//filter() -> creates a new array with all elements that pass the test implemented by the provided function
const unfiltered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = unfiltered.filter(
   condition
)
console.log(typeof condition); // object
console.log("Filtered", filtered); // [2, 4, 6, 8, 10]



const nos= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
// let num = 

const primeNumbers = nos.filter(isPrime)
console.log("Prime Numbers", primeNumbers); // [2, 3, 5, 7]



//reduce() -> executes a reducer function (that you provide) on each element of the array, resulting in a single output value

//find the sum of all elements in the array

const callback = function(accumulator, num){
    return accumulator + num;
}

const sum = nos.reduce(callback, 0)
//syntax -> array.reduce(callback, initialValue)
console.log("Sum", sum); // 55


