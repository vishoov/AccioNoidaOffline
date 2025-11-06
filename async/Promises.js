
//promise constructor -> this takes an executer function that runs immediately when the promise is created


//this executer function is where we write the asynchronous logic
//this executer function recieves two function parameters
// resolve(value) -> fulfills the promise with given value
// reject(reason) -> rejects the promise with given reason
// const executer = (resolve, reject)=>{

//     //async operation
//    const randomNumber = Math.random();
//    const success = randomNumber >0.5;
//     console.log(randomNumber)
//    if(success){
//     resolve({
//         name:"Himanshu"
//     })
//    }else{
//     reject({
//         message:"This didnt work out"
//     })
//    }
// }

// const myPromise = new Promise(executer)
// //Handling the promise
// myPromise
// .then(
//     (data)=>{
//         console.log(data);
//         return data;
//     }
// )
// .catch(error=>console.error("Error caught", error.message))
// .finally(
//     ()=>{
//         console.log("Promise is completed")
//     }
// )

// console.log("MyPromise: ", myPromise)




// Promise: A promise is an object that serves as a PROXY for a value that is not yet known, which allows us to write asyncrhonous code that looks and behaves like synchronous code.


// Three states
// Pending -> initial state, where the promise is under execution, it is neither fulfilled nor rejected
// Fulfilled -> function has completed successfully, it has returned what we wanted 
// Rejected -> function has failed, it has returned us an error

// when a promise transitions from pending to fulfilled or rejected, its state and value becomes immutable

// whenever the function is fulfilled -> we can handle the response in the .then()
// whenever there is an error out of the promise -> we catch that error in .catch()
// whenever we want to run an operation on promise completion, be it success or failure, we use .finally()

// function fetchUser(id){
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve({id, name:"Shiva"}), 2000)
//     });
// }

// function fetchUserPosts(userId){
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve([
//             {id:1, title:"Post 1"},
//             {id:2, title:"Post 2"}
//         ]), 1000)
//     })
// }

// fetchUser(123)
// .then((user)=>{
//     console.log("then#1")
//     console.log(user)
//     return fetchUserPosts(user.id)
// })
// .then((posts)=>{
//     console.log("then#2")
//     console.log("Posts", posts);
//     return "posts fetched"
// })
// .then(data=>{
//     console.log("then#3")
//     console.log(data)
// })
// .catch(err=>console.error(err))
// .finally(()=>console.log("Atempted to fetch user data"))
//console.log User object
//catch
// attempted to fetch user data 


//for sequential executation of multiple promises, in cases of data pipelines, authentication flows, api fetching sequence, we can chain the promises



function fetchsomething(value){
    return new Promise(resolve =>{
        resolve( {
            id:123
        })
    })
}

// fetchsomething("hello")
// .then(
//     (data)=>{
//         console.log(data)
//         return {
//             name:"Shiva"
//         }
//     }
// )
// .then((data2)=>{
//     console.log(data2)
// })
// .catch(err=>console.log(err))


// function makeShake(fruit){
//     return new Promise(resolve=>{
//         resolve({
//             fruit:fruit
//         })
//     })
// }

// makeShake("Mango")
// .then((fruit)=>{
//     console.log("Buy ", fruit.fruit, " from market first")
//     return {
//         material:"milk"
//     }
// })
// .then((next)=>{
//     console.log("Buy ", next.material, " now")
//     return {
//         material:"Suger"
//     }
// })
// .then((next)=>{
//     console.log("Get ", next.material)
//     return "Milkshake Ready"
// })
// .then((message)=>{
//     console.log(message)
// })
// .catch((err)=>console.error(err))
// .finally(()=>{
//     console.log("A1 wow amazing")
// })


// //this is a classic exmaple of sequential exeution of code which causes CALLBACK HELL

// function getData(callback) {
//     setTimeout(() => callback(null, "data1"), 100);
//   }
  
//   function processData(data, callback) {
//     setTimeout(() => callback(null, data + "_processed"), 100);
//   }
  
//   function saveData(data, callback) {
//     setTimeout(() => callback(null, data + "_saved"), 100);
//   }

//   getData((err1, data1) => {
//     if (err1) return console.error(err1);
    
//     processData(data1, (err2, data2) => {
//       if (err2) return console.error(err2);
      
//       saveData(data2, (err3, data3) => {
//         if (err3) return console.error(err3);
//         console.log("Final result:", data3);
//       });
//     });
//   });


// //   Solution
// function getData() {
//     return new Promise(resolve => {
//       setTimeout(() => resolve("data1"), 100);
//     });
//   }
  
//   function processData(data) {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(data + "_processed"), 100);
//     });
//   }
  
//   function saveData(data) {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(data + "_saved"), 100);
//     });
//   }

//   getData()
//   .then(data=>processData(data))
//   .then(processedData=>saveData(processedData))
//   .then(finalResult=>console.log("Final Result: ", finalResult))
//   .catch(err=>console.error("Error: ", err))


const AjayPromise = new Promise(
    (resolve, reject)=>{
        setTimeout(()=>{
            const success = true;

            if(success){
                resolve("Operation successful")
            }else{
                reject(new Error("Operation Failed"))
            }

        }, 2000)
    }
)


AjayPromise
.then(result=>{
    console.log("Success", result);
    return result;
})
.catch(err=>console.error(err))
.finally(()=>console.log("Promise is terminated"))


const resolvedPromise = Promise.resolve("Hello World")

resolvedPromise.then(value=>console.log(value))