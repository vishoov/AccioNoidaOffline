function greet(name, callback){
    console.log("Hello, ", name);
    callback();
}

function goodbye(){
    console.log('GoodBye!')
}

greet("Aman", goodbye)

//callback execution flow
//outer function runs first
//the callback function is called at the point inside the outer function either sync or async 

// document.addEventListener("click", callback)

function filter(arr, functionn){
    let result= []
    for(let item of arr){
        if(functionn(item)){
            result.push(item)
        }else{
            continue;
        }
    }
    return result;
}

const nums = [1, 2, 3, 4, 5]

const even = filter(nums, n=>n%2==0);
console.log(even)

const odd = filter(nums, n=>n%2!=0)
console.log(odd)

const callback = ()=>{
    console.log("this is an async callback")
}
setTimeout(callback, 1000)

// document.querySelector('button').addEventListener('click', ()=>{
//     console.log("Hello")
// })


// arr.map(
//     ()=>{

//     }
// )
//map-> gives us the access of each element of the array one by one
//callback decision 


// arr.filter(()=>{})

    // arr.forEach(()=>{})

        // function makeObject(name, age){
             
        //         this.name=name,
        //         this.age=age
            
        // }

        // const newObj = new makeObject("ABC", 20 )
        // console.log(newObj)


        // Callback Patterns 

        // Error-first Callbacks 
    //callback functions recieve error as the first arg, and result as the second


            // ->Node.js and js async 
            //callback function -> first argument = error 
            // results

            function readFile(filename, callback){
                
                const error = false
                const data = "File Content";

                callback(error, data);
            }

            readFile('text.txt', (err, content)=>{
                if(err){
                    console.error("Error: ", err)
                }else{
                    console.log("File Content: ", content)
                }
            })

            // we can handle success and error seperately so that the code execution is efficient 


            // Nested callbackes
            //async tasks order maintain

    // login(
    //     user =>{
    //         getUserProfile(
    //             user.id, profile =>{
    //                 updateStatus(profile.name, status=>{
    //                     console.log("Status updated: ", status)
    //                 })
    //             }
    //         )
    //     }
    // )

    // const status = updateStatus()
    // const profile 
    // if(status){
    //     profile = getUserProfile
    // }

    // if(profile){
    //     login
    // }
            //sequence maintain
            //normally whenever we write any async code it automatically gets sent to the bottom
            //to prevent it we can nest the callbacks
            //meanng that only and only if the outer function is executed than the inner function will be executed 
            //this maintains the order of execution of the functions

    //Calback Hell
    //its a problem that arises when multiple async operations are performed sequentially using nested callbacks, the code has become deeply indented and difficult to read, maintain and debug

    // Pyramid of doom 

    // how is callback hell caused
    //whenevr async tasks depend on result of previous task, callbacks get deeply nested
    // each level adds a new callback inside previous one, which heavily increases the complexity
    // handling error becomes repititive and hard to debug
    // the code quickly loses readability

    //callback hell is very problematic 

    // Readability issue: code becomes hard to follow
    // Debugging difficulties: tracing error and understanding flow is very very challenging
    //maintainance problems -> add features, modify 

    //how to prevent callback hell

    // 1. use named functions instead of anonymous callbacks 

    function step1(callback){
        setTimeout(()=>{
            console.log("Step 1 complete")
            callback()
        }, 1000)
    }

    function step2(callback){
        setTimeout(()=>{
            console.log('Step 2 complete');
            callback();
        }, 1000)
    }

    function step3(){
        console.log("All steps done")
    }

    step1(()=>step2(step3))

    // 2. modularize code
    //split the code into seperate modules and functions to keep callbacks isolated, reusable and easily readable

    //3. early returns for error handling 

    function process(data, callback){
        if(!data) return callback(new Error("No data"));

        callback(null, "Success")
    }

    process("File Data", (err, res)=>{
        if(err){
            console.error("Error:", err)
            return 
        }

        console.log(res)
    })

// 4. use promises instead of callbacks 
// promise -> .then() or .catch()

//5. Ultimate solution -> async/await

function asyncFunc(){
    //sync 10 lines of code
    const data = //async function
    // if(!data){ }
    //sync 5 lines of code 
    console.log(data)
}


