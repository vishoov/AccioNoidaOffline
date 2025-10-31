//Multi step forms

//step 1 
function validateStep1(data, callback){
    if(!data.name) return callback("Name Required");
    callback(null, "Step 1 Validated")
}

//step 2
function validateStep2(data, callback){
    if(!data.email.includes('@')) return callback("Invalid Email")
        callback(null, "Step 2 validated")
}

//form submission is complete
validateStep1({name:"Avinesh"}, (err, msg)=>{
    if(err) return console.error(err);

    console.log(msg);

    validateStep2({email:"avinesh@gmail.com"}, (err, msg)=>{
        if(err) return console.error(err);
        console.log(msg)
        console.log("Form Submission Completed")
    })


})


// 1. get the latest price of the stock
function getPrice(callback){
    console.log("First function")
    setTimeout(()=>callback(null, "Price is 123"), 1000);
}
//2 . quantity multiply 
function invest(priceofstock, callback){
    setTimeout(()=> callback(null, `${priceofstock} is invested`), 1000)
}


getPrice((err, data)=>{
    if(err){
        return console.error(err);
    }
    invest(data, (err, data2)=>{
        if(err) return console.error(err)
            console.log(data2)
    })
})

