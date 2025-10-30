// // setTimeout(()=>{
// //     console.log('Execute after 2 seconds')
// // }, 2000)

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function callbackFunc(name){

//         console.log(`${name}`)

// }
// setTimeout(callbackFunc, 1500, "Shiva")

// //step 1 -> step 2 -> step 3
// setTimeout(()=>{
//     console.log("step1")
//     setTimeout(()=>{
//         console.log("Step 2")
//         setTimeout(()=>{
//             console.log("step 3")
//         }, 1000)
//     }, 1000)
// }, 1000)


// const timeoutID = setTimeout(()=>{
//     console.log("Timeout Function")
// }, 5000)
// clearTimeout(timeoutID)

//Execution flow -> timeoutId 


//conclusion
// delay ui feedback
// debouncing rapid fire events like keystrokes
//create timed transitions 
//pause between sequential operations


//countdown using setTImeout 
function countdown(seconds){
    if(seconds>0){
    console.log(seconds);
    setTimeout(()=>countdown(seconds-1), 1000);
    }
    else{
        console.log("Time's Up")
    }
}
// countdown(10)



