// async function getData(){
//     //logic
//     return "Hello World"
// }
//output : Promise { 'Hello World' }

const getData = async ()=>{
    return Promise.resolve("Hello World")
}


// console.log(getData())

// getData().then(data=>console.log(data))


// Async functions always return a promise, even if we dont explicitly mention to return one. If the function returns a value, the Promise resolves with that value.
// If the function throws and error, the promise rejects with that error


//Await 

function delay(ms){
    return new Promise(resolve=> setTimeout(resolve, ms));
}


async function greet(){
    console.log("Started.....");
    await delay(2000); //2 seconds
    console.log("Hello after 2 seconds");
    return "Done";
}

// greet()

//The await keyword literally suspends function execution UNTIL the promise settles, without blocking the javascript thread. The Javascript Engine can execute other scripts and handle events during this time

// function delay(ms) {
//     return new Promise((resolve) => {
//       setTimeout(() => {

//         resolve("Completed");
//       }, ms);
//     });
//   }
  
//   async function greet() {
//     console.log("started ...");
//     const data = await delay(2000);
//     console.log(data)
//     console.log("Hello after 2 seconds");
//     return "Done";
//   }
//   console.log(greet())
// console.log("Synchronous function")


const api = "https://randomuser.me/api/"

function fetchUser(){
    return fetch(api)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        return data;
    })
    .catch(err=>console.error(err))
}

// fetchUser()

async function fetchUserasync(api){
   try{ 
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return data
   }
   catch(err){
    console.log(err)
   }
}

fetchUserasync('https://randoser.me/api/')
fetchUserasync(api)

console.log("Sync")

// Robust -> properly error handled


