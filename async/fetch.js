

fetch('https://api.thecatapi.com/v1/images/search')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch(error=> console.error("Error: ", error))


//method : POST
//header -> content-type : application/json
//body -> user object

let user = {
    username: "Jai",
    email: "jaifrommathura@gmail.com",
    password: "Jaiiiiiiiii@123",
    role: "user",
    age: 20
}

user=JSON.stringify(user)

const options = {
    method:'POST',
    headers:{
        'Content-Type':"application/json"
    },
    body: user
}

// fetch('http://localhost:3000/register', options)
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err=>console.error(err))


fetch('http://localhost:3000/users')
.then(response=>{
    if(!response.ok){
        throw new Error("The response we recieved has an error")
    }

    console.log("Status: ", response.status);
    console.log("OK:", response.ok) //status : 200-299 -> true else false
    console.log("Status Text: ", response.statusText); //"OK", "Not found", "created", "ISE"
    console.log("Headers: ", response.headers);
    console.log("URL: ", response.url)

    return response.json()
})
.then(data=>console.log("data", data))
.catch(err=>console.error(err))


fetch("dummyapi")
.then(response=>{
    if(!response.ok){
        Promise.reject(response)
    }else{
        response.json();
    }
})
.then(data=>console.log(data))
.catch(err=>console.error("Failed response", err))