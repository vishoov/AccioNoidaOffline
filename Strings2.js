//Strings 2

//implement toUpperCase() from scratch

// function toUpperCase(str){}
//lowercase alphabets-> 97 to 122
//subtract 32 from the ascii value of lowercase alphabets to get uppercase alphabets
//to convert ascii value to character use String.fromCharCode(asciiValue)
//ascii for space is 32


// function toUpperCase(str){
//   //error handling
//   if(str.length===0) return str;
// //main logic 

// let result = "";

// for(let i=0; i<str.length; i++){
//   const char = str.charAt(i);

//   const ascii= char.charCodeAt(0);
// //check if the character is a lowercase alphabet
//   if(ascii>=97 && ascii<=122){

//     const upperAscii = ascii-32;
//     result+=String.fromCharCode(upperAscii);

//   }else{
//     result+=char;
//   }

// }

// return result;


// }


//charAt(i)-> returns the character at index i
//charCodeAt(i)-> returns the ascii value of the character at index i



// console.log(toUpperCase("hello world")) 



// String Transformation
//toUpperCase90
//toLowerCase()


//trim()-> removes whitespace from both ends of a string
const str = "   hello world   ";
console.log(str.trim());

//trimStart()-> removes whitespace from the start of a string
//trimEnd()-> removes whitespace from the end of a string


//String PAdding MEthods 

//padStart(length, string)-> pads the string with the given string until the string reaches the given length from the start
//padEnd(length, string)-> pads the string with the given string until the string reaches the given length from the end


// let strong = "5";
// console.log(strong.padStart(3, "0"))
// console.log(strong.padEnd(3, "0"))


// const spaces= "   Hello";
// console.log(spaces.trim())


// let string = "Hello           world          how      are     you?"

// console.log(string.split(" "))

// function removeSpaces(string){
//     const words = string.split(" ").filter(word => word!== "").join(" ")
// }

// console.log(removeSpaces(string))


//String Repition Methods

// const strr= "Hello "
// console.log(strr.repeat(3))

// STRING SEARCHING METHODS 

// let str2 = "Hello world how are you I am from another world!";

//indexOf(substring) -> returns the index of the first occurrence of the substring, or -1 if not found  
// console.log(str2.indexOf("world"))


//lastIndexOf(substring) -> returns the index of the last occurrence of the substring, or -1 if not found

// console.log(str2.lastIndexOf("world"))


// let arr = ["Hello", "world", "how", "are", "you", "I", "am", "from", "another", "world"];
// console.log(arr.indexOf("world"))


//search(substring) -> returns the index of the first occurrence of the substring, or -1 if not found

// const ste = 'abcd'
// const pal = 'bab'

// console.log(ste.indexOf(pal))


//String Testing Methods 

//includes(substring)-> returns true if the substring is found in the string, false otherwise
// console.log(str2.includes("world! "))

let str2 = "Hello world how are you I am from another world!";

console.log(str2.startsWith("Hello", 0)) 
console.log(str2.startsWith("World")) 

//startsWith(substring, position) -> returns true if the string starts with the substring at the given position, false otherwise

//endsWith(substring, length) -> returns true if the string ends with the substring, false otherwise, length is optional and specifies the length of the string to consider

console.log(str2.endsWith("Hello", 5))


//split(seperator, limit)-> splits the string into an array of substrings using the given separator, limit is optional and specifies the maximum number of substrings to return


//concat(string1, string2, ...)-> concatenates the given strings and returns a new string

console.log(str2.concat(" ", "How are you?"))



//name@provider.com
//vishoo@acciojob.com
//@acciojob.com
//@vishoo
//.com@acciojob


//match(regex)-> returns an array of matches for the given regular expression, or null if no matches are found
//RegEx -> regular expression-> patterns 

let newone = "Hellow world 123"


console.log(newone.match(/\d+/)) //matches all alphabetic characters
// [ '123', index: 13, input: 'Hellow world 123', groups: undefined ]