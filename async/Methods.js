// //air flight booking system
// //delhi -> mumbai
// //air india, emirates, akasa, spicejet, indigo

// Why do we need promise methods?
// Sequential execution -> one promise -> second promise -> third promise
// Parallel execution -> one || two || three




// const promise1 = Promise.resolve(3);
// const promise2 = new Promise(resolve => setTimeout(()=>resolve('resolved'), 5000));
// const promise3 = Promise.resolve(42);

// //1. Promise.all() -> waits for all promises to resolve, but reject immediately if there is any promise that rejects

//When to use
// Independant operations -> when functions dont depend on each other but all are necessary
// Performace optimization -> reduce the synchronous execution time and will call all promises parallely
//dashboard loading 


// Promise.all([promise1, promise2, promise3])
// .then(values=>{
//     console.log(values)
// })
// .catch(err=>console.error("reject", err))


//2. Promise.allSettled() -> waits for all promises to SETTLE (either resolve or reject) and return detailed results for each promise, regardless that if it failed or succeeded

// when to use allsettled()
//Partial failure tolerance -> when some data is better than no data 
// monitor systems -> collecting statuses from multiple sources or services
// batch operations -> process multiple sources where individual failures are fine



// const promises = [
//     Promise.resolve(10),  //this will succeed
//     Promise.reject(new Error("Network Failure")), //will fail
//     fetch('/api/users'), //unsure
//     new Promise(resolve=>setTimeout(()=>resolve(199), 5000)) //will succeed after 1 second 
// ]

// Promise.allSettled(promises)
// .then(results=>{
//     console.log("All operations completed")
//     results.forEach((result, index)=>{
//         if(result.status=='fulfilled'){
//             console.log(`Promise ${index} succeeded`, result.value)
//         }else{
//             console.log(`Promise ${index}, failed`, result.reason.message)
//         }
//     })
// })
// .catch(err=>console.error("Error", err))




//3. promise.race() -> the output of first promise to be SETTLED is considered

// when to use race()
// server selection -> whenever there are multiple servers and we have to pick the fastest server 
// resource competition -> first available resource wins
// performance testing -> check response times of each service

// const promise1 = new Promise(reject=> setTimeout(()=>reject("One"), 400))
// const promise2 = new Promise(resolve=> setTimeout(()=>resolve("Two"), 800))


// Promise.race([promise1, promise2])
// .then(value=> console.log(value))
// .catch(err=>console.error(err))


//4. promise.any() -> it outputs the data of first promise to be FULFILLED
// backup systems -> try multiple resources untiul one succeeds
// service discovery -> whenever we are looking for data from muyltiple services, and have to find the first available service
// Fallback mechanisms -> when any service is degraded because of any error we can use another as a fallback


// const promise1 = Promise.reject(new Error("Error 1"))
// // const promise2 = new Promise(reject=> setTimeout(()=>reject('ye bhi reject'), 1000));
// const promise3 = Promise.reject(new Error("Error 3"));


// Promise.any([promise1, promise3])
// .then(value=>{
//     console.log(value)
// })
// .catch(err=>console.error("Catch", err.constructor.name))


//5. promise.try() -> synchronous or asynchronous any function where we are unsure about the outcome

// Promise.try(()=>5+5).then(result=>console.log(result));

// Promise.try(()=>{
//     throw new Error('Sync error');
// }).catch(err=>console.error(err.message))


console.log("Start")
Promise.resolve().then(()=>console.log("Promise"))
console.log("End")