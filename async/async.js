
function fetchData(callback){
    setTimeout(()=>{
        const data = { name:"Shiva", age:20}
        callback(data)
    }, 3000);
}

console.log("start")
fetchData((data)=>{
    console.log(data)
})
console.log("data fetched")
console.log("end")










// function b(){
//     console.log("b executed")
// }

// function A(){
//     console.log("A started")
//     b();
//     console.log('A ended')

// }

// A()
