async function deepFunction(){
    throw new Error("Error in deep function")
}

async function middleFunction(){
    try{
    await deepFunction();
    }catch(err){
        console.log("Error in middle function", err.message)
    }
}


async function topFunction(){
    try{
        await middleFunction();
    }
    catch(err){
        console.error("Caught error: ", err.message)
    }
}

topFunction();


