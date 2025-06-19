// Conditional Statement

//if a number is odd 
//let num = 7;
//if remainder is zero then it is even
//else it is odd
function checkEvenOdd(num) {
if(num%2==0){
    // then this logic will be implemented
    console.log(num + " is even");
}else{
    // else this logic will be implemented
    console.log(num + " is odd");
}

}

//counting 1 to 10 


//write table of number
// function table(num){
//     for(let i=1; i<=10; i++){
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }

checkEvenOdd(7); // 7 is odd
checkEvenOdd(8); // 8 is even
checkEvenOdd(0);


////you have to check if a number is positive or negative or neither 
let number = 1083083084;

if(number>0){
    console.log(number + " is positive");
}
else if(number<0){
    console.log(number + " is negative");
}
else{
    console.log(number + " is neither positive nor negative");
}

// function name(input){ logic }

//calculate grade of a student based on marks 
//marks>90 -> A+
//marks>80 -> A
//marks>70 -> B
//marks>60 -> C
//marks>50 -> D
//marks<50 -> F

function calculateGrade(marks){

    if(marks>90){
        console.log("Grade: A+");
    }
    else if(marks>80){
        console.log("Grade: A");
    }
    else if(marks>70){
        console.log("Grade: B");
    }
    else if(marks>60){
        console.log("Grade: C");
    }
    else if(marks>50){
        console.log("Grade: D");
    }
    else{
        console.log("Grade: F");

}
}

// let i=0;

// console.log(i)


calculateGrade(85);
calculateGrade(95);
calculateGrade(75);


// process.stdout.write('hello ');
// process.stdout.write('world');


//switch 


//start of the week,
//mid week
//end of the week

function checkDay(day){
    if(day=="Monday"){
        console.log("Start of the week");
    }
    else if(day=="Tuesday"){
        console.log("Mid of the week");
    }
    else if(day=="Wednesday"){
        console.log("Mid week");
    }
    else if(day=="Thursday"){
        console.log("Mid of the week");
    }
    else if(day=="Friday"){
        console.log("Mid of the week");
    }
    else{
        console.log("End of the week");
    }
}

// checkDay("Friday")
let day = "wednesday";
function checkDaySwitch(day){
    switch(day){
        case "Monday":
            console.log("Start of the week");
            break;
        case "Tuesday":
            console.log("Mid of the week");
            break;
        case "Wednesday":
            console.log("Mid of the week");
            break;
        case "Thursday":
            console.log("Mid of the week");
            break;
        case "Friday":
            console.log("Mid of the week");
            break;
      
    }
}

checkDaySwitch("Saturday");




// Ternary Operator
//ternary operator is a shorthand for if-else statement
//syntax: condition ? expressionIfTrue : expressionIfFalse

// let num = 1049649647;
// if(num%2==0){
//     console.log(num + " is even");
// }
// else{
//     console.log(num + " is odd");
// }

// let result = (num%2==0) ? "this is even" :"this is odd";
// console.log(result);


//Truthy and Falsy Values 
//Truthy is any value that has some meaning or value
//Falsy is any value that has no meaning or value
//Falsy values: 0, "", null, undefined, NaN
//Truthy values: any other value

let num =3;

function checkeven(num){
    return (num%2==0) ? true:false;
}

if(checkeven(num)){
    console.log(num + " is a truthy value");
}
else{
    console.log(num + " is a falsy value");
}

//logical operators 

//AND -> && 

//condition1 && condition2 -> 
    // false        true    -> false
    // true         false   -> false
    // false        false   -> false
    // true         true    -> true

    let a = 10;
    let b =0;
    if(a && b){
        console.log("Both a and b are truthy values");
    }
    else{
        console.log("Either a or b is falsy value");
    }

// ! not operator


    function canAccessContent(user) {
        if (user.isSubscribed && user.paymentMethod && !user.contentWarnings) {
          return "Access granted";
        } else {
          return "Access denied";
        }
    }

    console.log(
        canAccessContent({
            isSubscribed: false,
            paymentMethod: true,
            contentWarnings: true
        })
    )


    //movie 
    //online ticket book 
    //isPaid AND hasID AND !isunderage
    
    // function canWatch(user){
    //     if(user.isPaid && user.hasID && !user.isUderage){
    //         return "You can watch the movie";
    //     }
    //     else{
    //         return "You cannot watch the movie";
    //     }
    // }

    function canWatch(user){
        return (user.isPaid && user.hasID && !user.isUnderage) ? "You can watch movie": "You cannot watch the movie";
    }

    console.log(canWatch({
        isPaid: true,
        hasID: true,
        isUnderage: false
    }))

    // console.log(output); // You can watch the movie


    function checknumber(num){
        switch(num){
            case num>0:
                console.log(num + " is positive");
                break;
            case num<0:
                console.log(num + " is negative");
                break;
            case num ==0:
                console.log(num + " is neither positive nor negative");
                break;
        }
    }