// //strings

// //primitive data types 
// //immutable 


// //Creating a string
// const str = 'Hello, world!';

// const str1 = "Hello, world!";


// //Template Literals


// const number = 42;


// const templatestring= `The answer is ${number}`;

// //whenever we have to use a string with variables, we can use template literals -> for including a variable we use ${variableName} inside the backticks


// //string Constructor

// const str2 = new string('Hello, world!');

// //Length
// console.log(str2.length)


// // string Methods  -> Reference

// //charAt() -> returns the character at a specified index

// console.log(str.charAt(0)); // 'H'
// console.log(str.charAt(7)); // 'w'


// //const arr[i]
// //const char = str.charAt(0); -> this would not let me change the value of char, because strings are immutable

// //Hello, world! -> Hello, Accio! 

// //charCodeAt()-> returns the Unicode of the character at a specified index
// //ASCII = Unicode 
// const string ="abc";
// //a-> 97
// //b-> 98
// let charCode = string.charCodeAt(0)
// console.log(charCode); 

// //codePointAt()-> returns the Unicode code point of the character at a specified index
// console.log(string.codePointAt(0));


// //Accessor method 
// //at()

// console.log(str.at(0));

// //string Extraction Methods -> extract parts of a string 

// //slice() -> extracts a section of a string and returns it as a new string


// const sliced = str.slice(0, 5); // 'Hello
// console.log(sliced); // 'Hello'

// const sliced2 = str.slice(7);

// //arg1, arg2 -> if(arg2==undefine){ arg2 = str.length 


// const sliced3 = str.slice(-6)
// console.log(sliced3)


// const stringz = "Hello my name is groot, and I am groot"

// // extract 'my name is groot'

// console.log(stringz.slice(22))

// //the first argument in slice is inclusive


// //build a function named slicenew -> -ve -> 

// const slicedex = str.slice(-5)
// console.log(slicedex)

// function Slice(string, index){
//     //error handling 
   
    
//     if(string===undefined){
//         return "Invalid string, Please enter a valid string"
//     }



//     if(index===undefined){
//         return "Invalid Index, please write a whole number index "
//     }

//     //case 1 = -ve

//     if(index<0){
//         //calculate the position from end

//         const length = Math.abs(index);

//         if(length>=string.length){
//             return string;
//         }

//         //Hello -> -2 -> lo -> starting position 

//         const starting = string.length-length;

//         let result = '';
//         for(let i=starting; i<string.length; i++){
//             result+=string.at(i);
//         }

//         return result;
//     }else{
//         let result = "";
//         for(let i=index; i<string.length; i++){
//             result+=string.at(i)
//         }

//         return result;
//     }


//     //case 2 = +ve
// }


// console.log("Function output",Slice("Hello"))


//substring() -> part of a string 

const str = "Hello World"

console.log(str.substring(0, 5));
console.log(str.substring(-4)) 
//if you enter a negative value inside substring it converts it to 0
console.log(str.substring(5, 0))



//substr -> deprecate

// console.log(str.substr(0,5))


// string Replacement Methods


//replace() -> replaces the FIRST OCCURENCE of a substring with anothe rstring 

let string = "Hello Hello Hey"

console.log(string.replace("Hello", "Bye"))

//replaceAll()

console.log(string.replaceAll("Hello", "Bye"))

console.log(string)


//"Hello world how are you I am from world world" -> world -> country

function replaceAll(string, find, replacement){
    const words = string.split(" ");
    let count = 0;

    for(let i=0; i<words.length; i++){
    
        if(words[i]==find){
            count++
            if(count>1){
            words[i]=replacement
            }
        }
    }
    return words.join(" ")
}

console.log(replaceAll("Hello world I am from world world", "world", "country"))


//String Transformation Method

//"hello how are you"

//toUpperCase() -> this capitalises each alphabet in the string

//toLowerCase() -> to convert each alphabet into lowercase

console.log(str.toUpperCase())


//capitalise first alphabet of a string

// "hello" -> "Hello"

function capitalisefirstalphabet(str){
    return str.charAt(0).toUpperCase()+str.slice(1)
}

// function capitalizefirstalphabet(str){
//     const alphabets = str.split("");
    
//     const first =alphabets[0].toUpperCase();
//     alphabets[0]=first;
//     return alphabets.join("");
// }

// console.log(capitalisefirstalphabet("hello"))

// "hello world how are you" -> "Hello World How Are You"


function capitalizeWords (str){
    const words = str.split(" ");

    for(let i=0; i<words.length; i++){
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1)
    }
    return words.join(" ");
}

console.log(capitalizeWords("hello hello hey hey haha"))

