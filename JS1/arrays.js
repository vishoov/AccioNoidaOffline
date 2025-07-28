

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


function splice(array, startIndex, deleteCount, ...itemsToAdd){
    const newArray = [];
    //array before the startIndex
    for(let i=0; i<startIndex; i++){
        newArray.push(array[i])
    }
    //new elements to be added
    // for(let i=0; i<itemsToAdd.length; i++){
    //     newArray.push(itemsToAdd[i]);
    // }

    newArray.push(...itemsToAdd)

    //array after the startIndex + deleteCount
    for(let i=startIndex+deleteCount; i<array.length; i++){
        newArray.push(array[i]);
    }

    return newArray;
}

let arree = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Splice", splice(arree, 2, 3, 11, 12, 15))


// arr.splice(2, 3, 11, 12, 13);
//removes 3 elements from index 2
//arr.splice(startIndex, deleteCount, ...itemsToAdd)

console.log("Arr", arr);

const arrx = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("spliced array", arrx.splice(2, 3, 11 ))

// arr.splice(2, 0, 11, 12, 13, 14)

console.log("Splice", arrx);



let arr2= [1, 2, 3, 1, 1, 2, 3, 1];

// console.log(arr2.indexOf(1));

function includes(arr, element){
    //indexOf
    if(arr.indexOf(element) !== -1) {
        return true;
    }
    return false;
}



//join -> joins the elements of the array into a string
console.log(arrx.join(" ")); // "1 2 3 1 1 2 3 1"


console.log(Math.min(...arr)); // NaN

// console.log("To String", arr.toString(" "))

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
let arr10= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredArray = arr10.map(function(num){
    return num*3
})

function map(array, callback){
    const newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(callback(array[i], i, array))
    }
    return newArray;
}
console.log("Doubled", map(numbers, function(num){
    return num * 2;
}))

console.log("Squared Array", squaredArray); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
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

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]

//find out the average age of users

// user.age

//1. i find out the sum of all ages
//2. divide the sum by the number of users

const calc = (avg, user)=>avg + user.age

let avgAge = users.reduce(calc, 0)/ users.length
console.log(avgAge)


// const doubled = numbers.map(function(num){
//     console.log( num * 2);
// // });


// const callback = function(accumulator, num){
//     return accumulator + num;
// }

// const sum = nos.reduce(callback, 0)



let numb= [100, 5, 50, 30, 53, 44, 3, 2, 4, 3]
//identify numbers that are greater than 10
// and return the sum of those numbers


//return the sum of numbers greater than 10

// let greaterThan10 = numb.map(num=>num>10?num:0)

// console.log("Greater than 10", greaterThan10)

// const sumsss = greaterThan10.reduce((acc, num)=>acc+num, 0)

// console.log("Sum of numbers greater than 10", sumsss) // 237


const sumGreaterThan10 = numb.filter(function(num){
    
    if(num > 10) {
        console.log("Greater than 10", num);
        return num; //keep the element
    }
    
}).reduce((acc, num) => acc + num, 0);

console.log("Sum of numbers greater than 10", sumGreaterThan10); // 237


const events = [
    { name: "A", date: "2023-01-01" },
    { name: "B", date: "2024-05-10" },
    { name: "C", date: "2022-12-31" }
  ];


const nearest = mostrecent(events)

function mostrecent(events) {
    return events.reduce((latest, event)=>{
const currentDate = new Date(event.date);
const earliestDate = new Date(latest.date);
if(currentDate < earliestDate) {
    return event;
}
return latest;
    }, events[0])
}

console.log("Most Recent Event", nearest); // { name: "B", date: "2024-05-10" }



let arr3= [1, 2, 6, 3, 4, 5, 7, 8, 9, 10];

// const evens = arr3.map(function(num){
//     if(num % 2 === 0) {
//         return num; //keep the element
//     }
//     // return null; //remove the element
// }).filter(num=>num!==null)

// console.log("Evens", evens); // [null, 2, null, 4, null, 6, null, 8, null, 10]

const oods = arr3.filter(function(num){
    if(num % 2 !== 0) {
        return num; //keep the element
    }
    // return null; //remove the element
})

console.log("Odds", oods); // [1, 3, 5, 7, 9]


//reduce 

function partitionOddEven(arr){
    return arr.reduce((acc, num)=>{
        if(num%2==0){
            acc[0].push(num); //even numbers
        }else{
            acc[1].push(num); //odd numbers
        }
        return acc;
    }, [[],[]])
}

console.log("Partition Odd Even", partitionOddEven(arr3)); 


//arr.map()
//when to use map?
//map is used when we want to transform each element of the array into a new value
//for example, if we want to double each element of the array, we can use map
//arr.map(num => num * 2)
//the size of input and output arrays are the same
//map output-> array of fixed size

//arr.filter()
//when to use filter?
//filter is used when we want to remove some elements from the array based on a condition
//for example, if we want to remove all even numbers from the array, we can use filter
//filter output -> array of variable size

//arr.reduce()
//when to use reduce?
//reduce is used when we want to reduce the array to a single value
//for example, if we want to find the sum of all elements in the array, we can use reduce
//reduce output -> single value

//arr.find() -> returns the first element in the array that satisfies the provided testing function


console.log(arr3.find(num => num > 5)); // 6

//arr.findIndex() -> returns the index of the first element in the array that satisfies the provided testing function
console.log(arr3.findIndex(num => num > 5));

//arr.some() -> tests whether at least one element in the array passes the test implemented by the provided function

console.log(arr3.some(num => num > 500)); // true