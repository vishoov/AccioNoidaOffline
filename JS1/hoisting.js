//Javascript
//object based
//interpretor 
//highly typed 
//single threaded 

// max = 10


// let max;


// console.log(max)
// max=10
// var max


// var



// let
// const


//initialisation -> reserve some memory space in that variable's name 
// let num;
// const num;
// var num;
//declaration -> assign some value

// console.log(number);
// let number = 10;
// console.log(number)


//if you try to acces let or const before initialisation
// it throws an error


//if you try to access var before initialise it returns undefined value 


console.log(num)
let num = 10
console.log(num)


//TEMPORAL DEAD ZONE 


// sayHi()
// const sayHi = function(){
//     console.log("Hello there")
// }
console.log(hello); 

var hello;
hello="this is the value"

if(true){
    console.log(hello)
}

//keyword name 
//let number 
//function calculatesum
//+, -, / 
//let, const, var 


//explain me the difference in hoisting behaviour of different variables 
// variable         var         let         const
// initialisation   Y           N               N
//Declared          N           N               N


// Temporal Dead Zone


// arr=[2, 4, 5, 6, 2, 4, 3, 5, 4, 3];



// for(let i=0; i<arr.length; i++){
//    arr[i]=arr[i]**2
// }
// console.log(arr)


let arr=[1, 2, 3,3, 1];


for(let i=0; i<arr.length/2; i++){
    if(arr[i]!=arr[arr.length-1-i]){
        console.log("false")
    }else{
        console.log("true", `${arr[i]} is eqal to ${arr[arr.length-1-i]}`)
    }

}


let arr2 = arr.reverse();
if(arr==arr2){
    console.log("true")
}


//pseudo code 