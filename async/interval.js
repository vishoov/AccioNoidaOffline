const intervalID = setInterval(()=>console.log("hello"), 1000)
setTimeout(()=>clearInterval(intervalID), 10000)


let counter = 1

let intervalId= setInterval(()=>{
    if(counter<10){
    console.log(counter)
    counter++
    } else{
        clearInterval(intervalId)
    }
}, 1000)