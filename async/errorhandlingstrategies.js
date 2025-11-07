// Strategy 1: Handle at call site using .catch()

async function fetchData(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data;
}


fetchData().catch(err=>console.error("Error at call site", err.message))



// Strategy 2: handle inside function with try-catch

async function fetchData(){
    try{
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error("Error inside function", err.message)
    }
}

// Strategy 3: partial error handling

async function processData(){
    try{
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.data();

        //this might fail
        const processed = await riskyOperation(data);
        return processed;
    }
    catch(err){
        console.error('Processing failed', err.message);
        throw err;
    }finally{
        console.log("Finally block")
    }
}