if(10=="10"){
    console.log("if condition is true")
    console.log("10 is equal to '10'");
}else{
    console.log("10 is not equal to '10'");
}

// Truthy FinalizationRegistry
// if(condition){
//     then do this
// }
// else{
//     then do that
// }

let input =10
console.log("hello", "world", input);

//if age is > 18 then you can vote
//else you cannot vote

let age = 2;

// //if else
// if(age>18){
//     console.log("You can vote");
// }else{
//     console.log("You cannot vote");
// }


//switch case
switch(!true){
    case age>18:
        console.log("You can vote");
        break;
    case age<18:
        console.log("You cannot vote");
        break;
    default:
        console.log("Invalid age");
        break;
}



//ternary operator

let output = (age>18)?"You can vote":"You cannot vote";
console.log(output);






//switch(condition){

//condition -> true then the cases you have written will be validated 
//condition=false -> opposite of what youve specified